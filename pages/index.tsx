import { Layout } from "../components/layout/Layout";
import { Box, Text, HStack, VStack, Link, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

export default function Home() {
  return (
    <Layout>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        recusandae ut ad maiores illum quam officiis culpa laborum alias facilis
        ipsa hic voluptatem, enim harum rerum consectetur repellendus
        praesentium ex. Id, omnis. Quaerat, magni? Similique, recusandae non!
        Aut sint ipsum debitis magnam eos fugiat repellat doloremque rem hic ad
        aliquid, explicabo accusantium iure itaque eaque sit recusandae deleniti
        qui id! Nam, harum? Quidem odio inventore aperiam cupiditate officia
        assumenda tenetur in dolor asperiores amet explicabo et nam accusantium
        architecto odit minima consectetur atque hic soluta quae, commodi nulla?
        Iusto, dolor? Laborum a ullam rerum nesciunt nobis dolore provident cum
        deserunt! Dolore nulla ipsa dolores sunt commodi, repellat, nobis
        tempora modi fugit exercitationem voluptatem ut, voluptas sit molestias
        est neque velit? Itaque libero tempore voluptate, delectus in distinctio
        voluptates culpa fugiat! Illo quasi recusandae inventore! Itaque
        exercitationem commodi quod quae minus dolores minima illo,
        voluptatibus, laborum ipsum, repellendus sequi amet ratione. Expedita
        nemo deserunt fuga ratione quis inventore, quod mollitia esse cum nam
        architecto molestias accusamus atque nostrum, quo ipsa molestiae et,
        voluptas deleniti. Eius harum voluptatibus, natus asperiores illum
        perspiciatis! Earum doloremque neque facilis quo sint ullam eum nam,
        ratione, harum doloribus explicabo in? Dolore neque, sit illo libero
        aspernatur laborum distinctio beatae molestiae nihil voluptate expedita
        tenetur, nesciunt ea? Autem eos in ducimus sunt vel nulla perferendis
        reiciendis voluptas delectus consequuntur id, excepturi facilis
        molestias officiis amet quia exercitationem soluta at itaque laborum
        quasi quisquam possimus natus. Incidunt, vero. Omnis ab mollitia, rerum
        quasi asperiores vel ullam? Voluptatibus vitae, dignissimos omnis id
        distinctio deserunt, ab reprehenderit eius, in odio error placeat
        adipisci debitis quisquam quos repellat aperiam. Dolore, ipsam! Nulla
        blanditiis ad porro maiores sint quam sed aliquid incidunt. Numquam quam
        perspiciatis dignissimos dolores neque rem ullam, commodi quidem,
        obcaecati tempora eaque. Magni nisi amet quia, facere corporis neque!
        Quod quidem quasi hic minus quas facere excepturi harum ratione fugiat
        dolorum molestias veritatis, quisquam natus laudantium pariatur debitis
      </p>
      {/* <VStack align="start">
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
      </HStack> */}
    </Layout>
  );
}
