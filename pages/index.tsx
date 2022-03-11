import { Layout } from "../components/layout/Layout";
import { Box, Text, HStack, VStack, Link, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

export default function Home() {
  return (
    <Layout>
      <Box maxW={700} shadow="md" rounded="lg" p={{ base: 3, md: 8 }}>
        <Box>
          <Box mt={5}>
            <VStack align="start">
              <HStack>
                <Text fontSize={50}>Hola, soy Dani</Text>
                <MotionBox
                  as="span"
                  fontSize={40}
                  animate={{ rotate: [0, 90, 10, 90, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  👋
                </MotionBox>
              </HStack>

              <Text fontSize={50}>Web developer</Text>
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
