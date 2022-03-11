import axios from "axios";
import { useQuery } from "react-query";

export const useWiki = (term: string) => {
  return useQuery("wiki", async () => {
    return (
      await axios.get<{
        query: {
          pages: { [key: string]: { fullurl: string; extract: string } };
        };
      }>(
        `/api/wiki?url=https://es.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=${term}&gsrlimit=2&prop=pageimages|extracts|info&inprop=url&pilimit=max&exintro&explaintext&exsentences=4&exlimit=max`
      )
    ).data;
  });
};
