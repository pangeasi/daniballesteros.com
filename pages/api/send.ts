import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import Joi from "joi";
import axios from "axios";

const RECAPTCHA_EXPECTED_ACTION = "contact";
const DEFAULT_MIN_SCORE = 0.5;
const DEFAULT_FROM_EMAIL = "onboarding@daniballesteros.com";

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

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    response
      .status(500)
      .send({ error: true, message: "Resend API key is not configured" });
    return;
  }

  const resend = new Resend(resendApiKey);

  try {
    const { name, email, message } = request.body;
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL,
      to: ["daniballesteros@protonmail.com"],
      replyTo: email,
      subject: "Mensaje de mi web",
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
      html: `
            <p><strong>Nombre: </strong> ${name}</p>
            <p><strong>Correo: </strong> ${email}</p>
            <p><strong>Mensaje: </strong> ${message}</p>`,
    });
    response.status(200).send({ error: false });
  } catch (error) {
    console.log("ERROR", error);
    response.status(500).send({ error: true });
  }
};
