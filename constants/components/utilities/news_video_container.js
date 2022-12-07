import {
  Heading,
  HStack,
  Text,
  VStack,
  Flex,
  Box,
  Icon,
  Image,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";

import { MotionVStack, MotionButton } from "../motion";
import { FaPlay } from "react-icons/fa";

import { useRouter } from "next/router";
import { useWindowSize } from "../../../custom_hooks";

const NewsVideoContainer = (props) => {
  const { height, width } = useWindowSize();
  const router = useRouter();
  const { data, dataIndex } = props;
  const { title, date, category, desc, image } = data[dataIndex];

  return (
    <Flex
      w={"full"}
      h={"full"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingX={[2, 10, 10, 10, 10, 10]}
    >
      <VStack justifyContent={"center"} alignItems={"left"} spacing={"5px"}>
        <chakra.h3
          fontFamily={"Poppins.black"}
          paddingBottom={["30px", "30px", "30px", "30px", "40px", "40px"]}
          fontSize={["20px", "25px", "25px", "25px", "25px", "25px"]}
          fontWeight="black"
          letterSpacing={{
            base: "normal",
            md: "normal",
          }}
          color="#292929"
          whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
        >
          {title}
        </chakra.h3>
        <Flex alignItems={"end"} justifyContent={"end"}>
          <Box
            boxSize={["325px", "325px", "325px", "325px", "325px", "460px"]}
            filter="auto"
            brightness="80%"
          >
            <Image
              src={image}
              alt="Dan Abramov"
              objectFit="cover"
              boxSize={"full"}
            />
          </Box>

          <MotionButton
            style={{
              boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.4) `,
              overflow: "hidden",
            }}
            position={"absolute"}
            pl={["27px", "27px", "27px", "27px", "27px", "27px"]}
            pr={["23px", "23px", "23px", "23px", "23px", "23px"]}
            py={["40px", "40px", "40px", "40px", "40px", "40px"]}
            mr={[10, 10, 10, 10, 10, 10]}
            mb={[10, 10, 10, 10, 10, 10]}
            whileTap={{
              scale: 0.9,
            }}
            borderRadius={"full"}
            whileHover={{
              scale: 1.1,
            }}
            backgroundColor={"#FFFFFF"}
            _focus={{ border: "none" }}
            _focusWithin={{ backgroundColor: "#FFFFFF" }}
            _hover={{
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
            }}
            flexDirection={"row"}
            onClick={null} //update this
          >
            <FaPlay color={"#00CE7C"} size={"30px"} />
          </MotionButton>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default NewsVideoContainer;
