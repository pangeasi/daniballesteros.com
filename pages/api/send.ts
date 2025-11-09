import { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import Joi from "joi";
import axios from "axios";

const RECAPTCHA_EXPECTED_ACTION = "contact";
const DEFAULT_MIN_SCORE = 0.5;

const schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().required(),
  token: Joi.string().required(),
});

export default async (request: VercelRequest, response: VercelResponse) => {
  const result = schema.validate(request.body);
  if (result.error) {
    response.status(402).send({ error: true, message: result.error.message });
    return;
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    response
      .status(500)
      .send({ error: true, message: "Recaptcha secret key is not configured" });
    return;
  }

  try {
    const params = new URLSearchParams({
      secret,
      response: request.body.token,
    });
    const verifyResponse = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      params.toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { success, score, action } = verifyResponse.data ?? {};
    const minScoreEnv = process.env.RECAPTCHA_MIN_SCORE;
    const minScore = Number.isFinite(Number(minScoreEnv))
      ? Number(minScoreEnv)
      : DEFAULT_MIN_SCORE;

    if (!success) {
      response
        .status(400)
        .send({ error: true, message: "Recaptcha verification failed" });
      return;
    }

    if (typeof score === "number" && score < minScore) {
      response.status(400).send({
        error: true,
        message: "Recaptcha score too low",
      });
      return;
    }

    if (action && action !== RECAPTCHA_EXPECTED_ACTION) {
      response.status(400).send({
        error: true,
        message: "Recaptcha action mismatch",
      });
      return;
    }
  } catch (error) {
    console.log("RECAPTCHA ERROR", error);
    response.status(500).send({ error: true });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  try {
    const { name, email, message } = request.body;
    await transporter.sendMail({
      from: `"${name} 👻" <${email}>`,
      to: "daniballesteros@protonmail.com,",
      subject: "Mensaje de mi web",
      text: "web message",
      html: `
            <p><strong>Nombre: </strong> ${name}</p>
            <p><strong>Correo: </strong> ${email}</p>
            <p><strong>Mensaje: </strong> ${message}</p>`,
    });
    response.status(200).send({ error: false });
  } catch (error) {
    console.log("ERROR", error, process.env.USER);
    response.status(500).send({ error: true });
  }
};
