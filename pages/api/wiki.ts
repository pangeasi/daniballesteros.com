import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import qs from "qs";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const { url, ...queries } = request.query;

    if (typeof url !== "string") {
      response.status(400).send({ error: true, message: "Missing url query" });
      return;
    }

    const { data } = await axios.get(
      `${url}&${qs.stringify(queries, { skipNulls: true })}`
    );

    response.status(200).send(data);
  } catch (error) {
    console.log("ERROR", error, process.env.USER);
    response.status(500).send({ error: true });
  }
}
