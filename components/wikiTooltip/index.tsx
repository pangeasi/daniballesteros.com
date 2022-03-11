import {
  Box,
  Link,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaWikipediaW } from "react-icons/fa";
import { useWiki } from "../../hooks/fetches/useWiki";

export const WikiTooltip = ({ children }: { children: string }) => {
  const { data: wiki } = useWiki(children);
  const preview = wiki && Object.values(wiki?.query.pages);

  return wiki?.query ? (
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
            <Box>{preview.at(0)?.extract}</Box>
            <Link href={preview.at(0)?.fullurl} target="_blank">
              Continua leyendo...
            </Link>
          </VStack>
        </PopoverContent>
      </Portal>
    </Popover>
  ) : (
    <Text as="span" display="inline-flex">
      {children}
    </Text>
  );
};
