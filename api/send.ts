import { NowRequest, NowResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import Joi from "joi";

const schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  message: Joi.string().required(),
});
export default (request: NowRequest, response: NowResponse) => {
  const result = schema.validate(request.body);
  if (result.error) {
    response.status(402).send({ error: true, message: result.error.message });
  } else {
    (async () => {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USER,
          pass: process.env.PASS,
        },
      });

      try {
        await transporter.sendMail({
          from: `"${request.body.name} 👻" <${request.body.email}>`,
          to: "daniballesteros@protonmail.com,",
          subject: "Mensaje de mi web",
          text: "web message",
          html: `
            <p><strong>Nombre: </strong> ${request.body.name}</p>
            <p><strong>Correo: </strong> ${request.body.email}</p>
            <p><strong>Mensaje: </strong> ${request.body.message}</p>`,
        });
        response.status(200).send({ error: false });
      } catch (error) {
        console.log("ERROR", error);
        response.status(500).send({ error: true });
      }
    })();
  }
};
