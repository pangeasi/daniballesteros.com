import { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import Joi from "joi";
import axios from "axios";

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

    if (!verifyResponse.data.success) {
      response
        .status(400)
        .send({ error: true, message: "Recaptcha verification failed" });
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
