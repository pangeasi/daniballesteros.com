import {
  Box,
  Link,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaWikipediaW } from "react-icons/fa";

export const WikiTooltip = ({ children }: { children: string }) => {
  const [preview, previewSet] = useState<any>("");
  useEffect(() => {
    fetch(
      `/api/wiki?url=https://es.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=${children}&gsrlimit=2&prop=pageimages|extracts|info&inprop=url&pilimit=max&exintro&explaintext&exsentences=4&exlimit=max`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const [info] = Object.values(data.query.pages);
        previewSet(info as any);
      });
  }, []);
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Text cursor="help" as="span" fontWeight="bold" display="inline-flex">
          {children}
          <FaWikipediaW size={12} />
        </Text>
      </PopoverTrigger>
      <Portal>
        <PopoverArrow />
        <PopoverContent p={5} bg="white" color="black">
          <VStack align="start">
            <Box>{preview.extract}</Box>
            <Link href={preview.fullurl} target="_blank">
              Continual leyendo...
            </Link>
          </VStack>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
