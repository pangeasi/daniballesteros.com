import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import * as qs from "qs";

export default (request: VercelRequest, response: VercelResponse) => {
  (async () => {
    try {
      const { url, ...queries } = request.query;
      const { data } = await axios.get(
        `${url}&${qs.stringify(queries, { skipNulls: true })}`
      );
      response.status(200).send(data);
    } catch (error) {
      console.log("ERROR", error, process.env.USER);
      response.status(500).send({ error: true });
    }
  })();
};
