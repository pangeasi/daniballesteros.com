import { Layout } from "../components/layout/Layout";
import { Box, Text, HStack, VStack, Link, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

export default function Home() {
  return (
    <Layout>
      <Box mt={{ base: 10, sm: 200 }} maxW={1000} p={{ base: 3, md: 8 }}>
        <Box>
          <Box>
            <VStack align="start">
              <HStack>
                <Text fontWeight="bold" fontSize={{ base: 40 }}>
                  Hola, soy Dani
                </Text>
              </HStack>

              <Text fontSize={{ base: 20 }}>
                Desarrollador front-end, especializado en react
              </Text>
            </VStack>
            <HStack spacing={6} mt={10} justify="end">
              <Link href="https://github.com/pangeasi" color="purple.400">
                GitHub
              </Link>
              <Link href="https://twitter.com/Danitiwt" color="blue.400">
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/in/dani-ballesteros/"
                color="green.400"
              >
                Linkedin
              </Link>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
