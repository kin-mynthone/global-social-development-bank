import { Flex, SimpleGrid, HStack, Text, Box, VStack } from "@chakra-ui/react";
import { Link } from "react-scroll/modules";

import Image from "next/image";
import { useWindowSize } from "../../../custom_hooks";
import { MotionButton, MotionFlex } from "/constants/components/motion";
import {
  gsdbloading,
  bank,
  brain,
  agreement,
  gsdblogo1,
} from "/constants/data";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { chakra } from "@chakra-ui/react";
import Router from "next/router";

export default function Footer() {
  const { height, width } = useWindowSize();

  return (
    <Flex
      w={"full"}
      bg="#132F54"
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <Flex
        flexDir={"column"}
        py={["10%", "3%", "3%", "3%", "3%", "3%"]}
        px={["5%", "3%", "3%", "3%", "3%", "3%"]}
        alignItems={"start"}
        justifyContent={"space-around"}
        width={[width, width - 14, width - 14, width - 14, width, width - 14]}
        bgColor={"#16365F"}
      >
        <VStack alignItems={"start"}>
          <Box
            height={["30px", "45px", "45px", "45px", "45px", "45px"]}
            width={["150px", "220px", "220px", "220px", "220px", "220px"]}
          >
            <Image src={gsdblogo1} draggable="false" alt="gsdb icon png" />
          </Box>
          <VStack alignItems={"start"} spacing={"-2px"}>
            <chakra.p
              fontSize={["8px", "8px", "11px", "11px", "11px", "12px"]}
              color="white"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
            >
              {`Your partners in securing Social Impact Development & Investments`}
            </chakra.p>
            <chakra.p
              fontSize={["8px", "8px", "11px", "11px", "11px", "12px"]}
              color="white"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
            >
              {`Building Bridges - Not fences`}
            </chakra.p>
          </VStack>
        </VStack>
        <Flex
          w={"full"}
          flexDir={["column", "column", "row", "row", "row", "row"]}
          alignItems={"start"}
          alignSelf={"start"}
          justifyContent={"space-between"}
          alignContent={"space-between"}
          spacingY={"20px"}
        >
          <SimpleGrid
            alignItems={"start"}
            alignSelf={"start"}
            pt={"60px"}
            justifyItems={"start"}
            spacingX={"20px"}
            spacingY={"20px"}
            columns={[1, 1, 2, 2, 2, 2]}
          >
            <Text
              as={"button"}
              color={"white"}
              fontSize={["12px", "12px", "14px", "14px", "14px", "15px"]}
            >
              About us
            </Text>
            <Text
              as={"button"}
              color={"white"}
              fontSize={["12px", "12px", "14px", "14px", "14px", "15px"]}
              onClick={() => {
                Router.push({
                  pathname: "/news",
                });
              }}
            >
              News
            </Text>
            <Text
              as={"button"}
              color={"white"}
              fontSize={["12px", "12px", "14px", "14px", "14px", "15px"]}
            >
              What we do
            </Text>
            <Text
              as={"button"}
              color={"white"}
              fontSize={["12px", "12px", "14px", "14px", "14px", "15px"]}
            >
              Projects and Operations
            </Text>
            <Text
              as={"button"}
              color={"white"}
              fontSize={["12px", "12px", "14px", "14px", "14px", "15px"]}
            >
              Where we work
            </Text>
            <Text
              as={"button"}
              color={"white"}
              fontSize={["12px", "12px", "14px", "14px", "14px", "15px"]}
            >
              Countries
            </Text>
            <Text
              as={"button"}
              color={"white"}
              fontSize={["12px", "12px", "14px", "14px", "14px", "15px"]}
            >
              Join us
            </Text>
            <Text
              as={"button"}
              color={"white"}
              fontSize={["12px", "12px", "14px", "14px", "14px", "15px"]}
            >
              Topics
            </Text>
          </SimpleGrid>

          <SimpleGrid
            pt={["60px"]}
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            spacingX={"50px"}
            spacingY={"30px"}
            columns={[1, 1, 1, 1, 2, 2]}
          >
            <VStack spacing={1} alignItems={"start"}>
              <Text
                fontSize={["15px", "12px", "12px", "12px", "25px", "25px"]}
                color={"white"}
                fontWeight={"black"}
                marginRight={"5"}
                whiteSpace={["normal", "normal", "normal", "normal"]}
              >
                Follow us
              </Text>

              <HStack spacing={10}>
                <MotionButton
                  size="xxs"
                  width={["20px", "30px", "30px", "30px", "30px", "30px"]}
                  height={["20px", "30px", "30px", "30px", "30px", "30px"]}
                  backgroundColor={"transparent"}
                  borderColor="transparent"
                  _focus={{ borderColor: "transparent" }}
                  _focusWithin={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  _hover={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  borderRadius={8}
                  whileTap={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  onClick={() => {}}
                >
                  <AiFillFacebook
                    size={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    color={"rgba(255, 255, 255, 0.5)"}
                  />
                </MotionButton>
                <MotionButton
                  size="xxs"
                  width={["20px", "30px", "30px", "30px", "30px", "30px"]}
                  height={["20px", "30px", "30px", "30px", "30px", "30px"]}
                  backgroundColor={"transparent"}
                  borderColor="transparent"
                  _focus={{ borderColor: "transparent" }}
                  _focusWithin={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  _hover={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  borderRadius={8}
                  whileTap={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  onClick={() => {}}
                >
                  <FaTwitter
                    size={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    color={"rgba(255, 255, 255, 0.5)"}
                  />
                </MotionButton>
                <MotionButton
                  size="xxs"
                  width={["20px", "30px", "30px", "30px", "30px", "30px"]}
                  height={["20px", "30px", "30px", "30px", "30px", "30px"]}
                  backgroundColor={"transparent"}
                  borderColor="transparent"
                  _focus={{ borderColor: "transparent" }}
                  _focusWithin={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  _hover={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  borderRadius={8}
                  whileTap={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  onClick={() => {}}
                >
                  <AiFillInstagram
                    size={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    color={"rgba(255, 255, 255, 0.5)"}
                  />
                </MotionButton>
                <MotionButton
                  size="xxs"
                  width={["20px", "30px", "30px", "30px", "30px", "30px"]}
                  height={["20px", "30px", "30px", "30px", "30px", "30px"]}
                  backgroundColor={"transparent"}
                  borderColor="transparent"
                  _focus={{ borderColor: "transparent" }}
                  _focusWithin={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  _hover={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  borderRadius={8}
                  whileTap={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  onClick={() => {}}
                >
                  <FaLinkedinIn
                    size={["10px", "30px", "30px", "30px", "30px", "30px"]}
                    color={"rgba(255, 255, 255, 0.5)"}
                  />
                </MotionButton>
                <MotionButton
                  size="xxs"
                  width={["20px", "30px", "30px", "30px", "30px", "30px"]}
                  height={["20px", "30px", "30px", "30px", "30px", "30px"]}
                  backgroundColor={"transparent"}
                  borderColor="transparent"
                  _focus={{ borderColor: "transparent" }}
                  _focusWithin={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  _hover={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                  }}
                  borderRadius={8}
                  whileTap={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  onClick={() => {}}
                >
                  <FaYoutube
                    size={["20px", "30px", "30px", "30px", "30px", "30px"]}
                    color={"rgba(255, 255, 255, 0.5)"}
                  />
                </MotionButton>
              </HStack>
            </VStack>
            <VStack spacing={1} alignItems={"start"}>
              <Text
                fontSize={["15px", "12px", "12px", "12px", "25px", "25px"]}
                color={"white"}
                fontWeight={"black"}
                marginRight={"5"}
              >
                Keep Updated
              </Text>
              <MotionButton
                whileTap={{
                  scale: 0.9,
                }}
                whileHover={{
                  scale: 1.1,
                }}
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
                <Text
                  fontSize="14px"
                  color={"white"}
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  Read More
                </Text>
                <BsArrowRightShort size={"30px"} color={"white"} />
              </MotionButton>
            </VStack>
          </SimpleGrid>
        </Flex>
      </Flex>

      <chakra.p
        fontSize={["10px", "10px", "10px", "10px", "10px", "10px"]}
        color="white"
        fontFamily={"Poppins"}
        py={{
          base: "10px",
          sm: "10px",
        }}
      >
        © 2022 Global Social Development Bank, All Rights Reserved.
      </chakra.p>
    </Flex>
  );
}
