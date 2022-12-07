import {
  Heading,
  HStack,
  Text,
  VStack,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";

import { MotionVStack, MotionButton } from "../motion";
import { BiChevronRight } from "react-icons/bi";

import { useRouter } from "next/router";
import { useWindowSize } from "../../../custom_hooks";

const NewsContainer = (props) => {
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
      paddingY={[10, 10, 10, 10, 10, 10]}
    >
      <Box
        pb={"20px"}
        justifyContent={"start"}
        alignItems={"start"}
        backgroundColor={"white"}
        borderStartStartRadius={"30px"}
        borderEndStartRadius={"30px"}
        borderStartEndRadius={"30px"}
        borderEndEndRadius={"30px"}
        style={{
          boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.05) `,
          overflow: "hidden",
        }}
      >
        <Flex
          alignSelf={"start"}
          mt={"30px"}
          height={"30px"}
          backgroundColor={"#16365F"}
          borderStartStartRadius={"0px"}
          borderEndStartRadius={"0px"}
          borderStartEndRadius={"10px"}
          borderEndEndRadius={"10px"}
          position={"absolute"}
          px={"12px"}
          alignItems={"center"}
          zIndex={"10"}
        >
          <Text
            paddingX={"10px"}
            fontSize={["12px", "12px", "12px", "12px", "12px", "12px"]}
            color={"white"}
            fontWeight={"black"}
            fontFamily={"Poppins.black"}
          >
            {category}
          </Text>
        </Flex>
        <VStack w={"full"} spacing={"10px"}>
          <Box
            w={"full"}
            h={["200px", "200px", "200px", "200px", "200px", "300px"]}
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

          <VStack
            justifyContent={"center"}
            alignItems={"left"}
            spacing={"1px"}
            px={"30px"}
          >
            <VStack
              justifyContent={"center"}
              alignItems={"left"}
              spacing={"-10px"}
            >
              <Text
                fontSize={["9px", "9px", "9px", "9px", "9px", "10px"]}
                fontWeight={"black"}
                fontFamily={"Poppins.black"}
                pt={"12px"}
              >
                {date}
              </Text>
              <Text
                fontSize={["18px", "18px", "18px", "18px", "18px", "20px"]}
                color={"#111518"}
                fontWeight={"black"}
                fontFamily={"Poppins.black"}
                pt={"12px"}
              >
                {title}
              </Text>
            </VStack>

            <chakra.p
              pt={"20px"}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontSize={["12px", "12px", "12px", "12px", "12px", "13px"]}
              color={"#474747"}
              textAlign={"left"}
            >
              {desc}{" "}
            </chakra.p>

            <Flex w={"full"} justifyContent={"end"} pt={"20px"}>
              <MotionButton
                backgroundColor={"transparent"}
                _focus={{ border: "none" }}
                _focusWithin={{ backgroundColor: "transparent" }}
                _hover={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                flexDirection={"row"}
                onClick={null} //update this
              >
                <Text fontSize="14px" fontWeight={"thin"} color={"#4F4F4F"}>
                  Read More
                </Text>
                <BiChevronRight size={"20px"} color={"#4F4F4F"} />
              </MotionButton>
            </Flex>
          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default NewsContainer;
