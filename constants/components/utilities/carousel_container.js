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

const CarouselContainer = (props) => {
  const { height, width } = useWindowSize();
  const router = useRouter();
  const { data, dataIndex } = props;
  const {
    projectName,
    projectDesc,
    projectBg,
    color,
    flutter,
    code,
    figma,
    nextjs,
    android,
    ios,
    design,
    deploy,
  } = data[dataIndex];

  // const pushRoute = ({ pathname, collection_id, item_id, image, art_name }) => {
  //   router.push({
  //     pathname: pathname,
  //     query: {
  //       collection_id: collection_id,
  //       image: image,
  //       art_name: art_name,
  //       item_id: item_id,
  //     },
  //   });
  // };

  return (
    <Flex
      w={"full"}
      h={"full"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingX={[2, 10, 10, 10, 10, 10]}
      paddingY={[10, 10, 10, 10, 10, 10]}
    >
      <MotionVStack
        // key={`child${index + 1}`}
        borderRadius={"1.5em"}
        spacing={5}
        alignItems={"center"}
        justifyContent={"end"}
        height={["450px", "450px", "450px", "450px", "450px", "600px"]}
        width={["800px", "800px", "800px", "800px", "2000px"]}
        backgroundColor={"white"}
        style={{
          boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.3) `,
          overflow: "hidden",
        }}
        onContextMenu={(e) => {
          e.preventDefault();
        }}
        onClick={() => null}
      >
        <Box
          w={"full"}
          h={"full"}
          filter="auto"
          brightness="60%"
          background={`url(${projectBg})`}
        ></Box>

        <VStack
          position={"absolute"}
          alignItems={"left| bottom"}
          spacing={"30px"}
          width={"80%"}
          zIndex={10}
          paddingY={"40px"}
        >
          <VStack alignItems={"left| bottom"}>
            <chakra.h3
              fontFamily={"Poppins.black"}
              fontSize={["20px", "20px", "20px", "20px", "20px", "30px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color={"white"}
              style={{
                userSelect: "none",
              }}
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {projectName}
            </chakra.h3>
            <chakra.p
              mb={6}
              style={{
                userSelect: "none",
              }}
              fontSize={["10px", "10px", "10px", "10px", "12px", "13px"]}
              color="white"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
              textAlign={"left"}
            >
              {projectDesc}
            </chakra.p>
          </VStack>
          <MotionButton
            width={"180px"}
            backgroundColor={"#22C086"}
            _focus={{ border: "none" }}
            _focusWithin={{ backgroundColor: "#22C086" }}
            _hover={{
              backgroundColor: "#22C086",
              cursor: "pointer",
            }}
            flexDirection={"row"}
            onClick={null} //update this
          >
            <Text fontSize="14px" color={"white"}>
              Read More
            </Text>
            <BiChevronRight size={"20px"} color={"white"} />
          </MotionButton>
        </VStack>
      </MotionVStack>
    </Flex>
  );
};

export default CarouselContainer;
