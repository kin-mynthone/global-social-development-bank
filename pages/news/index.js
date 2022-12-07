import {
  Box,
  Flex,
  InputRightElement,
  Text,
  InputGroup,
  Input,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

import { MotionButton, MotionFlex } from "../../constants/components/motion";
import { chakra } from "@chakra-ui/react";
import {
  NewsContainer,
  NewsVideoContainer,
} from "../../constants/components/utilities";
import { gsdbloading, bank, brain, agreement } from "../../constants/data";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";

import { startUpStore } from "../../store/start_up";
import { useState, useEffect } from "react";

import { useWindowSize } from "../../custom_hooks";

import "@fontsource/poppins";
export default function Home() {
  const setshowStartup = startUpStore((state) => state.set_show_startup);

  useEffect(() => {
    setshowStartup(false);
  });
  const { height, width } = useWindowSize();

  function CallToAction() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        height={["63em", "60em", "60em", "60em", "80vh", "80vh"]}
        mt={["20%", "2%", "2%", "2%", "10%", "7%"]}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          boxSize="full"
          objectFit="cover"
          filter="auto"
          blur="5px"
          background={`url("https://images.unsplash.com/photo-1593349783603-654a7069d88d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`}
        >
          <Box
            boxSize="full"
            objectFit="cover"
            bgColor={"rgba(255, 255, 255, 0.7)"}
          ></Box>
        </Box>

        <SimpleGrid
          position={"absolute"}
          w={"full"}
          alignItems={"center"}
          justifyItems={"center"}
          spacingX={1}
          spacingY={9}
          columns={[1, 1, 1, 1, 2, 2]}
          mb={[0, 10, 10, 10, 10, 10]}
          mx={[5, 20, 20, 20, 20, 20]}
        >
          <VStack
            height={["30em", "50em", "50em", "50em", "70vh", "70vh"]}
            bgColor={"rgba(255, 255, 255, 0.9)"}
            spacing={"80px"}
            alignItems={"start"}
            justifyContent={"end"}
            width={["90%", "80%", "80%", "80%", "80%", "80%"]}
          >
            <Box
              boxSize="full"
              objectFit="cover"
              background={`url("https://images.unsplash.com/photo-1593349783603-654a7069d88d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`}
            >
              <Box
                boxSize="full"
                objectFit="cover"
                bgGradient="linear(transparent 0%, black 100%)"
              ></Box>
            </Box>

            <VStack
              alignItems={"start"}
              spacing={"30px"}
              position={"absolute"}
              padding={["50px", "50px", "50px", "50px", "50px", "50px"]}
              width={["90%", "40%", "40%", "40%", "40%", "40%"]}
            >
              <chakra.h3
                fontFamily={"Poppins.black"}
                paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
                fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
                fontWeight="black"
                lineHeight={["40px", "50px", "50px", "50px", "50px", "60px"]}
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="white"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`Climate and Development:
An agenda for action`}
              </chakra.h3>

              <chakra.p
                pr={["10px", "200px", "200px", "200px", "200px", "200px"]}
                fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
                color="#999999"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`Emerging Insights From Global Social Development Bank Group 2021 - 2022 Country Climate and Development
`}
              </chakra.p>
            </VStack>
          </VStack>

          <VStack
            alignItems={"center"}
            justifyContent={"center"}
            width={["90%", "80%", "80%", "80%", "80%", "80%"]}
          >
            <VStack alignItems={"start"} spacing={"30px"}>
              <chakra.h3
                fontFamily={"Poppins.black"}
                paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
                fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
                fontWeight="black"
                lineHeight={["40px", "50px", "50px", "50px", "50px", "60px"]}
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#16365F"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`COUNTRIES COULD CUT EMISSIONS BY 70% BY 2050 AND BOOST RESILIENCE WITH ANNUAL INVESTMENTS OF 1.4% OF GDP
`}
              </chakra.h3>

              <chakra.p
                fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
                color="#2E3B47"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`Investing an average of 1.4% of GDP annually could reduce emissions in developing countries by as much as 70% by 2050 and boost resilience, according to a new report from the World Bank Group.

`}
              </chakra.p>
            </VStack>
          </VStack>
        </SimpleGrid>
      </Flex>
    );
  }

  function News() {
    const dummyData = [
      {
        title: "Lorem ipsum dolor sit amet",
        date: "OCT 14, 2022",
        category: "Education",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        image:
          "https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "OCT 14, 2022",
        category: "Agriculture",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        image:
          "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "OCT 14, 2022",
        category: "Medicine",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        image:
          "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "OCT 14, 2022",
        category: "Wild",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        image:
          "https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "OCT 14, 2022",
        category: "Energy",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        image:
          "https://images.unsplash.com/photo-1509390144018-eeaf65052242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "OCT 14, 2022",
        category: "Future",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        image:
          "https://images.unsplash.com/photo-1658801956904-43841e89d831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "OCT 14, 2022",
        category: "Health",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXhlcmNpc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "OCT 14, 2022",
        category: "Nature",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        image:
          "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        date: "OCT 14, 2022",
        category: "Climate Change",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        image:
          "https://images.unsplash.com/photo-1543470388-80a8f5281639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aWNlYmVyZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
    ];

    const ref = React.useRef();
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        paddingTop={["20%", "10%", "10%", "10%", "10%", "10%"]}
      >
        <VStack alignItems={"start"} width={"full"}>
          <Flex
            px={"10%"}
            dir="row"
            justifyContent={["center", "center", "flex-start", "flex-start"]}
          >
            <chakra.h3
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#111518"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`Today’s`}
            </chakra.h3>
            <chakra.h3
              pl={3}
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#00CE7C"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`Highlights`}
            </chakra.h3>
          </Flex>
          <Flex w={"full"} direction="column" alignItems={"center"} px={"2%"}>
            <SimpleGrid
              alignItems={"center"}
              justifyItems={"center"}
              pt={["50px", "50px", "50px", "50px", "50px", "50px"]}
              spacingX={1}
              spacingY={["5px", "5px", "20px", "20px", "20px", "20px"]}
              width={"85%"}
              columns={[1, 1, 1, 1, 3, 3]}
            >
              {dummyData.map((entry, index) => (
                <NewsContainer data={dummyData} dataIndex={index} />
              ))}
            </SimpleGrid>
          </Flex>
        </VStack>
      </Flex>
    );
  }

  const CircleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path
        fill="currentColor"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );

  function ViewNewsByType() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        paddingTop={["20%", "2%", "2%", "2%", "10%", "10%"]}
        paddingBottom={["10%", "5%", "5%", "5%", "5%", "5%"]}
      >
        <VStack alignItems={"start"} spacing={"30px"} width={"100%"} px={"10%"}>
          <VStack alignItems={"start"} spacing={"-2px"} width={"100%"}>
            <Flex
              id="topicstoread"
              dir="row"
              justifyContent={["center", "center", "flex-start", "flex-start"]}
            >
              <chakra.h3
                fontFamily={"Poppins.black"}
                paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
                fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#111518"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`View news`}
              </chakra.h3>
              <chakra.h3
                pl={3}
                fontFamily={"Poppins.black"}
                paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
                fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#00CE7C"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {` by type`}
              </chakra.h3>
            </Flex>
          </VStack>

          <VStack alignItems={"start"} spacing={"30px"} width={"100%"}>
            <chakra.h3
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              fontSize={["20px", "25px", "25px", "25px", "25px", "25px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#00CE7C"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`All News`}
            </chakra.h3>

            <SimpleGrid
              alignItems={"start"}
              alignSelf={"start"}
              justifyItems={"start"}
              w={"100%"}
              spacingX={"10px"}
              spacingY={"50px"}
              columns={[1, 1, 1, 1, 3, 3]}
            >
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Press Releases</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Opinions</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Feature Stories</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Statements</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Blogs</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>In-Depth Stories</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Speeches and Transcripts</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Facts Sheets</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Multimedia</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Results</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Events</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Podcast</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Loans and Creadits</Text>
              </HStack>
            </SimpleGrid>
          </VStack>

          <SimpleGrid
            alignItems={"start"}
            justifyItems={"start"}
            spacingX={"100px"}
            spacingY={["5px", "5px", "20px", "20px", "20px", "20px"]}
            width={"100%"}
            columns={[1, 1, 1, 1, 2, 2]}
          >
            <VStack alignItems={"start"} spacing={"30px"} width={"100%"}>
              <chakra.h3
                fontFamily={"Poppins.black"}
                paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
                fontSize={["20px", "25px", "25px", "25px", "25px", "25px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#00CE7C"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`Search World Bank News`}
              </chakra.h3>
              <InputGroup
                bgColor={"white"}
                borderRadius={8}
                borderColor={"#111518"}
                borderWidth={1}
              >
                <InputRightElement>
                  <FiSearch color={"#00CE7C"} />
                </InputRightElement>
                <Input
                  type={"text"}
                  backgroundColor={"transparent"}
                  _focus={{ border: "none" }}
                  _hover={{ border: "none" }}
                  border={"none"}
                  placeholder="Search Here..."
                />
              </InputGroup>
              <HStack justifyItems={"center"}>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["15px", "20px", "20px", "20px", "20px", "20px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#00CE7C"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`View All News`}
                </chakra.h3>
                <BiChevronRight color={"#00CE7C"} size={"30px"} />
              </HStack>
            </VStack>
            <VStack alignItems={"start"} spacing={"30px"} width={"100%"}>
              <chakra.h3
                fontFamily={"Poppins.black"}
                paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
                fontSize={["20px", "25px", "25px", "25px", "25px", "25px"]}
                fontWeight="black"
                letterSpacing={{
                  base: "normal",
                  md: "normal",
                }}
                color="#00CE7C"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              >
                {`The News You Are Looking For`}
              </chakra.h3>
              <chakra.p
                fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
                color="#111518"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`Opt into the news on the regions and topics you cover
`}
              </chakra.p>
              <HStack justifyItems={"center"}>
                <chakra.h3
                  fontFamily={"Poppins.black"}
                  fontSize={["15px", "20px", "20px", "20px", "20px", "20px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#00CE7C"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Register`}
                </chakra.h3>
                <BiChevronRight color={"#00CE7C"} size={"30px"} />
              </HStack>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function Video() {
    const dummyData = [
      {
        title:
          "Highlights from the 2022 World Bank Group-IMF Annual Meetings | The Development Podcast",

        image:
          "https://images.unsplash.com/photo-1636202339022-7d67f7447e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      },
      {
        title:
          "From Coal to Clean Energy: Protecting People| The Development Podcast        ",

        image:
          "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      },
      {
        title:
          "Is a Global Recession Imminent? | Video with Ayhan Kose highlights the latest research ",

        image:
          "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ];

    const ref = React.useRef();
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        position={"relative"}
      >
        <Flex w={"full"} direction="column" alignItems={"center"}>
          <SimpleGrid
            alignItems={"center"}
            justifyItems={"center"}
            pt={["50px", "50px", "50px", "50px", "50px", "50px"]}
            spacingX={1}
            spacingY={"80px"}
            width={"85%"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            {dummyData.map((entry, index) => (
              <NewsVideoContainer data={dummyData} dataIndex={index} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    );
  }

  function WorkWithUs() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        height={["60em", "60em", "60em", "60em", "100vh", "80vh"]}
        bgColor={"#16365F"}
        mt={["20%", "2%", "2%", "2%", "10%", "10%"]}
        alignItems={"end"}
        justifyContent={"end"}
      >
        <Box
          boxSize="full"
          objectFit="cover"
          background={`url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`}
        ></Box>

        <VStack
          mr={[0, 10, 10, 10, 10, 10]}
          mb={[0, 10, 10, 10, 10, 10]}
          px={"3%"}
          position={"absolute"}
          bgColor={"rgba(255, 255, 255, 0.9)"}
          spacing={"80px"}
          borderRadius={"20px"}
          alignItems={"start"}
          width={["100%", "62%", "62%", "62%", "62%", "48%"]}
          zIndex={10}
          paddingY={"40px"}
        >
          <VStack spacing={"55px"}>
            <VStack alignItems={"start"} spacing={"-2px"} width={"100%"}>
              <Flex
                dir="row"
                justifyContent={[
                  "center",
                  "center",
                  "flex-start",
                  "flex-start",
                ]}
              >
                <chakra.h3
                  id="workwithus"
                  fontFamily={"Poppins.black"}
                  paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
                  fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#111518"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {`Work with`}
                </chakra.h3>
                <chakra.h3
                  pl={3}
                  fontFamily={"Poppins.black"}
                  paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
                  fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
                  fontWeight="black"
                  letterSpacing={{
                    base: "normal",
                    md: "normal",
                  }}
                  color="#00CE7C"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                >
                  {` us`}
                </chakra.h3>
              </Flex>

              <chakra.p
                fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
                color="#111518"
                whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                fontFamily={"Poppins"}
              >
                {`Information on working with GSD for:
`}
              </chakra.p>
            </VStack>
            <SimpleGrid
              alignItems={"start"}
              alignSelf={"start"}
              justifyItems={"start"}
              w={"100%"}
              spacingX={"10px"}
              spacingY={"30px"}
              columns={[1, 1, 1, 1, 2, 2]}
            >
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Consultants</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Development Institutions</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Contractors and Suppliers</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Private Sector Partners</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Governments</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Civil Society/Nonzagovernment Organizations</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>Executing and Implementing Agencies</Text>
              </HStack>
              <HStack alignItems={"start"} w={"100%"}>
                <CircleIcon boxSize={3} mt={1.5} />
                <Text>All Audiences </Text>
              </HStack>
            </SimpleGrid>
          </VStack>
          <SimpleGrid
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            w={"100%"}
            spacingX={"10px"}
            spacingY={"10px"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            <MotionButton
              px={"30px"}
              py={"30px"}
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.1,
              }}
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
                Careers and Scholarships
              </Text>
            </MotionButton>
            <MotionButton
              px={"30px"}
              py={"30px"}
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.1,
              }}
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
                Operational Procurement
              </Text>
            </MotionButton>
            <MotionButton
              px={"30px"}
              py={"30px"}
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.1,
              }}
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
                Instuitutional Procurement
              </Text>
            </MotionButton>
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  return (
    <Box bgColor={"white"}>
      <CallToAction />
      <News />
      <ViewNewsByType />
      <Video />
      <WorkWithUs />
    </Box>
  );
}
