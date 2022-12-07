import {
  Box,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
  useToast,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { MotionButton, MotionFlex } from "../../constants/components/motion";
import { chakra } from "@chakra-ui/react";
import {
  CarouselContainer,
  NewsContainer,
  GoalContainer,
} from "../../constants/components/utilities";
import { gsdbloading, bank, brain, agreement } from "../../constants/data";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
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
    const dummyData = [
      {
        projectName: "Lorem ipsum dolor sit amet",
        projectDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        projectBg:
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        projectName: "Lorem ipsum dolor sit amet",
        projectDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        projectBg:
          "https://images.unsplash.com/photo-1593349783603-654a7069d88d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      },
      {
        projectName: "Lorem ipsum dolor sit amet",
        projectDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        projectBg:
          "https://images.unsplash.com/photo-1514747975201-4715db583da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
      {
        projectName: "Lorem ipsum dolor sit amet",
        projectDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        projectBg:
          "https://images.unsplash.com/photo-1526226060519-126d75eaa5e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      },
      {
        projectName: "Lorem ipsum dolor sit amet",
        projectDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        projectBg:
          "https://images.unsplash.com/photo-1581242163695-19d0acfd486f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      },
      {
        projectName: "Lorem ipsum dolor sit amet",
        projectDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per",

        projectBg:
          "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    ];
    const ref = React.useRef();
    return (
      <Flex
        width={width}
        flexDir={["column", "column", "row", "row", "row", "row"]}
        position={"relative"}
      >
        <Flex
          paddingTop={["2%", "5%", "5%", "5%", "5%", "5%"]}
          w={"full"}
          direction="column"
          alignItems={"center"}
        >
          <Box
            pt={["2em", "2em", "2em", "2em", "1em", "3em"]}
            w={[10 / 12, 10 / 12, 10 / 12, 10 / 12, 10 / 12, 9 / 12]}
            mx="auto"
            position={"relative"}
          >
            <VStack
              alignItems={[
                "start",
                "start",
                "start",
                "start",
                "center",
                "center",
              ]}
              spacing={"-55px"}
              width={"100%"}
              mb={"50px"}
            ></VStack>

            <ResponsiveContainer
              carouselRef={ref}
              render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 5;
                if (parentWidth <= 1440) currentVisibleSlide = 3;
                if (parentWidth <= 1080) currentVisibleSlide = 3;
                return (
                  <StackedCarousel
                    ref={carouselRef}
                    slideComponent={CarouselContainer}
                    slideWidth={parentWidth - 70}
                    carouselWidth={parentWidth}
                    data={dummyData}
                    currentVisibleSlide={currentVisibleSlide}
                    maxVisibleSlide={5}
                    useGrabCursor
                  />
                );
              }}
            />
            <>
              <IconButton
                style={{
                  position: "absolute",
                  top: "50%",
                  start: 0,
                  zIndex: 10,
                }}
                backgroundColor={"rgba(34, 192, 134, 0.3)"}
                _focus={{ backgroundColor: "rgba(34, 192, 134, 0.5)" }}
                w={"60px"}
                h={"60px"}
                borderRadius={"full"}
                onClick={() => {
                  ref.current?.goBack();
                }}
                //testing
                icon={<ChevronLeftIcon color={"white"} w={10} h={10} />}
              />
              <IconButton
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 0,
                  zIndex: 10,
                }}
                backgroundColor={"rgba(34, 192, 134, 0.3)"}
                _focus={{ backgroundColor: "rgba(34, 192, 134, 0.5)" }}
                borderRadius={"full"}
                w={"60px"}
                h={"60px"}
                onClick={() => {
                  ref.current?.goNext(6);
                }}
                icon={<ChevronRightIcon color={"white"} w={10} h={10} />}
              />
            </>
          </Box>
        </Flex>
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
            spacingY={"50px"}
            width={"85%"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            {dummyData.map((entry, index) => (
              <NewsContainer data={dummyData} dataIndex={index} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    );
  }

  function About() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        paddingTop={["2%", "2%", "2%", "2%", "5%", "10%"]}
      >
        <VStack alignItems={"start"} spacing={"55px"} width={"100%"} px={"10%"}>
          <Flex
            dir="row"
            justifyContent={["center", "center", "flex-start", "flex-start"]}
          >
            <chakra.h3
              id="about"
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              paddingBottom={["50px", "50px", "50px", "50px", "50px", "50px"]}
              fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#111518"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {`Know us `}
            </chakra.h3>
            <chakra.h3
              pl={3}
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              paddingBottom={["50px", "50px", "50px", "50px", "50px", "50px"]}
              fontSize={["30px", "40px", "40px", "40px", "40px", "50px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#00CE7C"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {` better`}
            </chakra.h3>
          </Flex>

          <VStack alignItems={"center"} width={"100%"}>
            <Box
              height={[180, 180, 180, 180, 180, 200]}
              width={[203, 303, 303, 303, 303, 503]}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
            >
              <Image src={gsdbloading} alt="gsdb icon png" draggable="false" />
            </Box>
            <chakra.h3
              fontFamily={"Poppins.black"}
              paddingTop={["30px", "30px", "30px", "30px", "23px", "15px"]}
              paddingBottom={["50px", "50px", "50px", "50px", "50px", "50px"]}
              fontSize={["20px", "25px", "25px", "25px", "25px", "30px"]}
              fontWeight="black"
              letterSpacing={{
                base: "normal",
                md: "normal",
              }}
              color="#111518"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
            >
              {` Global Social Development Bank (GLSDB)`}
            </chakra.h3>
            <chakra.p
              mb={6}
              fontSize={["14px", "14px", "15px", "15px", "15px", "20px"]}
              color="#AAAAAA"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
            >
              {`The Global Social Development Bank (GLSDB), registered in the Kingdom of Belgium is a trusted partner for many investors, both in Europe as well across the Globe. With a team of experienced senior advisory consultants, they are advising their trusted partners and world’s top investment structures.

The GLSDB-team of senior executive consultants is able to advise you on project management by using the knowledge and experience of its team of experts in both the public and private sector. The GLSDB team has years of experience in undertaking challenging and comprehensive projects in both the private and public sector. We also have the resources and commitment to provide services in innovative sectors, on a technological and conceptual level, using an entrepreneurial mind-set. We will continuously strive to provide your business with the best support. After all: your success is our success. The GLSDB will guide you throughout the process while we also strive economic viability with our practical and creative advice. Below our services in three categories.`}
            </chakra.p>
          </VStack>
          <SimpleGrid
            alignItems={"center"}
            alignSelf={"center"}
            justifyItems={"center"}
            pt={["70px", "70px", "70px", "70px", "70px", "100px"]}
            spacingX={"200px"}
            spacingY={"50px"}
            width={"80%"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            <Box
              width={["280px", "280px", "280px", "280px", "320px", "380px"]}
              height={["400px", "400px", "400px", "400px", "400px", "450px"]}
              justifyContent={"start"}
              alignItems={"start"}
              px={"30px"}
              py={"50px"}
              backgroundColor={"#16365F"}
              borderStartStartRadius={"30px"}
              borderEndStartRadius={"30px"}
              borderStartEndRadius={"30px"}
              borderEndEndRadius={"30px"}
              style={{
                boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.05) `,
              }}
            >
              <VStack alignItems={"start"} spacing={"20px"}>
                <Box w={["25%", "25%", "25%", "25%", "25%", "25%"]}>
                  <Image src={bank} alt="portfolio" />
                </Box>

                <chakra.p
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
                  color="white"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  {`Institute: In a close partnership with our corporate partners we offer client specific training and education related to the specific project or entrepreneurial challenges.
`}
                </chakra.p>
              </VStack>
            </Box>
            <Box
              width={["280px", "280px", "280px", "280px", "320px", "380px"]}
              height={["400px", "400px", "400px", "400px", "400px", "450px"]}
              justifyContent={"start"}
              alignItems={"start"}
              px={"30px"}
              py={"50px"}
              backgroundColor={"#16365F"}
              borderStartStartRadius={"30px"}
              borderEndStartRadius={"30px"}
              borderStartEndRadius={"30px"}
              borderEndEndRadius={"30px"}
              style={{
                boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.05) `,
              }}
            >
              <VStack alignItems={"start"} spacing={"20px"}>
                <Box w={["25%", "25%", "25%", "25%", "25%", "25%"]}>
                  <Image src={agreement} alt="portfolio" />
                </Box>

                <chakra.p
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
                  color="white"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  {`Development: Creating long-term value for our trusted partners through support in developing and implementing growth opportunities between Governments, Non-Governmental organizations and corporate or financial structures.

`}
                </chakra.p>
              </VStack>
            </Box>
            <Box
              width={["280px", "280px", "280px", "280px", "320px", "380px"]}
              height={["400px", "400px", "400px", "400px", "400px", "450px"]}
              justifyContent={"start"}
              alignItems={"start"}
              px={"30px"}
              py={"50px"}
              backgroundColor={"#16365F"}
              borderStartStartRadius={"30px"}
              borderEndStartRadius={"30px"}
              borderStartEndRadius={"30px"}
              borderEndEndRadius={"30px"}
              style={{
                boxShadow: `0px 0px 30px rgba(0, 0, 0, 0.05) `,
              }}
            >
              <VStack alignItems={"start"} spacing={"20px"}>
                <Box w={["25%", "25%", "25%", "25%", "25%", "25%"]}>
                  <Image src={brain} alt="portfolio" />
                </Box>

                <chakra.p
                  mb={6}
                  fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
                  color="white"
                  whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
                  fontFamily={"Poppins"}
                >
                  {`Innovation: Various initiatives and ventures started over the last 20 years. The common denominator is to make this world a better place for all.


`}
                </chakra.p>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function WHoWeAre() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        paddingTop={["20%", "2%", "2%", "2%", "10%", "10%"]}
      >
        <VStack alignItems={"start"} spacing={"55px"} width={"100%"} px={"10%"}>
          <Flex
            id="whoweare"
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
              {`Who`}
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
              {` we are`}
            </chakra.h3>
          </Flex>
          <SimpleGrid
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            spacingX={"10px"}
            spacingY={"50px"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                We are an impartial enabling governance body for Social Economic
                Transformation. We engage Government, Business and Community.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                We are an impartial enabling governance body for Social Economic
                Transformation. We engage Government, Business and Community.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                We are an impartial enabling governance body for Social Economic
                Transformation. We engage Government, Business and Community.
              </Text>
            </HStack>
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function WhatWeDo() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        paddingTop={["20%", "2%", "2%", "2%", "10%", "10%"]}
      >
        <VStack alignItems={"start"} spacing={"55px"} width={"100%"} px={"10%"}>
          <Flex
            dir="row"
            justifyContent={["center", "center", "flex-start", "flex-start"]}
          >
            <chakra.h3
              id="whatwedo"
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
              {`What`}
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
              {` we do`}
            </chakra.h3>
          </Flex>
          <SimpleGrid
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            spacingX={"10px"}
            spacingY={"50px"}
            columns={[1, 1, 1, 1, 3, 3]}
          >
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                Promote societal welfare and prosperity through equitable
                distribution of capital, access to collaborative networks and
                opportunities.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                The Global Social Development Bank’s operating model safeguard
                the project integrity for all party’s related.
              </Text>
            </HStack>

            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                Lead Societal impact projects are led by the Global Social
                Development Bank and its mandated local agency.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                Generate Impact indicators expressed as social returns such as
                increasing numbers of students, form new businesses and create
                jobs.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                All our projects are aligned with the Social Development Goals
                of the United Nations.
              </Text>
            </HStack>
            <HStack alignItems={"start"} w={"80%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>
                Principles applied by the Global Social Development Bank of
                combating bribery and corruption are underlined by separating
                the funding from the project Governance, deploying third-party
                regulators and audits. The budget sovereignty is retained by the
                Global Social Development Bank, whilst the project is controlled
                by the local Project Management Office, both monitored by
                external auditors.
              </Text>
            </HStack>
          </SimpleGrid>
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

  function OurGoal() {
    const dummyData = [
      {
        title: "No Poverty",

        image:
          "https://images.unsplash.com/photo-1518949142393-f1d68174c92a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        title: "Zero Hunger",

        image:
          "https://images.unsplash.com/photo-1548289227-b7d966b70003?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Good Health and Well-being",

        image:
          "https://images.unsplash.com/photo-1632053003385-245d2569568a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Quality Education",

        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Gender Equality",

        image:
          "https://images.unsplash.com/photo-1591467016621-8ebde0dec5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Clean Water and Sanitation",

        image:
          "https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Affordable and Clean Energy",

        image:
          "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      },
      {
        title: "Decent Work and Economic Growth",

        image:
          "https://images.unsplash.com/photo-1638913665258-ddd2bceafb30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Industry, Innovation and Infrastructure",

        image:
          "https://images.unsplash.com/photo-1536099629323-44806c1ea264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      },
      {
        title: "Reduced Inequality",

        image:
          "https://images.unsplash.com/photo-1594230762700-efe7b9333832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Sustainable Cities and Communities",

        image:
          "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Responsible Consumption and Production",

        image:
          "https://images.unsplash.com/photo-1589793463357-5fb813435467?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      },
      {
        title: "Climate Action",

        image:
          "https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
      },
      {
        title: "Life Below Water",

        image:
          "https://images.unsplash.com/photo-1581242163695-19d0acfd486f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: " Life on Land",

        image:
          "https://images.unsplash.com/photo-1531943865082-287018833410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
      },
      {
        title: " Peace and Justice Strong Institutions",

        image:
          "https://images.unsplash.com/photo-1648170051148-0c1edff39f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        title: "Partnerships to achieve the Goal",

        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
    ];
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        paddingTop={["20%", "2%", "2%", "2%", "10%", "10%"]}
        paddingBottom={["20%", "2%", "2%", "2%", "10%", "10%"]}
      >
        <VStack alignItems={"start"} spacing={"55px"} width={"100%"} px={"10%"}>
          <Flex
            id="ourgoal"
            dir="row"
            justifyContent={["center", "center", "flex-start", "flex-start"]}
          >
            <chakra.h3
              id="ourgoal"
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
              {`Our`}
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
              {` Goal`}
            </chakra.h3>
          </Flex>
          <SimpleGrid
            spacingX={[10, 10, 10, 10, 10, 10]}
            spacingY={10}
            width={"100%"}
            columns={[3, 3, 3, 3, 6, 6]}
          >
            {dummyData.map((entry, index) => (
              <GoalContainer data={dummyData} dataIndex={index} />
            ))}
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function FollowUs() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        py={["5%", "2%", "2%", "2%", "2%", "2%"]}
        alignItems={"start"}
        justifyContent={"space-around"}
        bgColor={"#16365F"}
      >
        <SimpleGrid
          alignItems={"center"}
          alignSelf={"start"}
          justifyItems={"center"}
          w={"100%"}
          spacingX={"10px"}
          spacingY={"20px"}
          columns={[1, 1, 1, 1, 2, 2]}
        >
          <HStack spacing={1}>
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
          </HStack>
          <HStack spacing={5}>
            <Text
              fontSize={["15px", "12px", "12px", "12px", "25px", "25px"]}
              color={"white"}
              fontWeight={"black"}
              marginRight={"5"}
            >
              Keep Updated
            </Text>
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
              whileTap={{
                scale: 0.9,
              }}
              whileHover={{
                scale: 1.1,
              }}
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
          </HStack>
        </SimpleGrid>
      </Flex>
    );
  }

  function TopicsToRead() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        paddingY={["20%", "2%", "2%", "2%", "10%", "10%"]}
      >
        <VStack alignItems={"start"} spacing={"55px"} width={"100%"} px={"10%"}>
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
                {`Topics to`}
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
                {` read`}
              </chakra.h3>
            </Flex>

            <chakra.p
              fontSize={["14px", "14px", "15px", "15px", "15px", "18px"]}
              color="#111518"
              whiteSpace={["normal", "normal", "pre-line", "pre-line"]}
              fontFamily={"Poppins"}
            >
              {`GSD focuses on sectors and themes that align with the commitment to eradicate poverty. 
The Bank’s work also spans across several development goals and cross-cutting initiatives.
`}
            </chakra.p>
          </VStack>
          <SimpleGrid
            alignItems={"start"}
            alignSelf={"start"}
            justifyItems={"start"}
            w={"100%"}
            spacingX={"10px"}
            spacingY={"50px"}
            columns={[1, 1, 1, 1, 2, 2]}
          >
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Agriculture and Food Security</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Governance</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Climate Change and Disaster Risk Management</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Health</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Digital Technology</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Public-Private Partnerships</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Energy</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Regional Cooperation and Integration</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Environment</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Social Development</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Finance</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Transport</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Fragility and Vulnerability</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Urban Development</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Gender Equality</Text>
            </HStack>
            <HStack alignItems={"start"} w={"100%"}>
              <CircleIcon boxSize={3} mt={1.5} />
              <Text>Water</Text>
            </HStack>
          </SimpleGrid>
        </VStack>
      </Flex>
    );
  }

  function WorkWithUs() {
    return (
      <Flex
        flexDir={["column", "column", "row", "row", "row", "row"]}
        height={["60em", "60em", "60em", "60em", "100vh", "80vh"]}
        bgColor={"#16365F"}
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
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 100, delay: 1 }}
      transition={{ ease: "easeIn", duration: 10, delay: 1 }}
    >
      <Box bgColor={"white"}>
        <CallToAction />
        <News />
        <About />
        <WHoWeAre />
        <WhatWeDo />
        <OurGoal />
        <FollowUs />
        <TopicsToRead />
        <WorkWithUs />
      </Box>
    </MotionFlex>
  );
}
