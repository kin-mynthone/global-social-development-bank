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

import { MotionFlex, MotionButton } from "../motion";
import { BiChevronRight } from "react-icons/bi";

import { useRouter } from "next/router";
import { useWindowSize } from "../../../custom_hooks";

import { startUpStore } from "../../../store/start_up";

const GoalContainer = (props) => {
  const { height, width } = useWindowSize();
  const router = useRouter();
  const { data, dataIndex } = props;
  const { image, title } = data[dataIndex];

  const active = startUpStore((state) => state.hover);

  const sethover = startUpStore((state) => state.set_hover);
  return (
    <MotionFlex
      width={["100px", "130px", "130px", "130px", "130px", "130px"]}
      height={["100px", "130px", "130px", "130px", "130px", "130px"]}
      alignItems={"end"}
      justifyContent={"center"}
      backgroundColor={"white"}
      borderStartStartRadius={"20px"}
      borderEndStartRadius={"20px"}
      borderStartEndRadius={"20px"}
      borderEndEndRadius={"20px"}
      _focus={{ borderColor: "white" }}
      _focusWithin={{
        backgroundColor: "white",
        borderColor: "white",
      }}
      _hover={{
        backgroundColor: "white",
        borderColor: "white",
      }}
      style={{
        boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.05) `,
        overflow: "hidden",
      }}
      onMouseOver={() => {
        sethover(dataIndex);
      }}
      onMouseOut={() => {
        sethover(1000);
      }}
    >
      {active == dataIndex ? (
        <Text
          pb={"20px"}
          position={"absolute"}
          w={"100px"}
          zIndex={10}
          color={"white"}
          fontSize={"12px"}
          whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
          fontWeight={"black"}
        >
          {title}
        </Text>
      ) : null}

      <Box
        display="flex"
        alignItems={"end"}
        py={"10px"}
        justifyContent={"center"}
        w={"full"}
        h={"full"}
        filter={active == dataIndex ? "auto" : "none"}
        brightness="60%"
        bgImage={`url(${image})`}
        bgSize={"cover"}
      ></Box>
    </MotionFlex>
  );
};

export default GoalContainer;
