import {
  Box,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { MotionButton } from "../../components/motion";
import React from "react";

import Image from "next/image";
import { HiMoon, HiSun } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { chakra } from "@chakra-ui/react";
import { default as NextLink } from "next/link";
import { gsdblogo } from "../../../constants/data";
import { pagesStore } from "../../../store/pages";
import { Link } from "react-scroll/modules";
import "@fontsource/poppins";
import { useWindowSize } from "../../../custom_hooks";

export default function NavigationBar() {
  const mobileNav = useDisclosure();
  const cl = useColorModeValue("#474747", "#22C086");
  const mode = useColorModeValue("#474747", "#CDCDCD");
  const { toggleColorMode: toggleMode } = useColorMode();
  const SwitchIcon = useColorModeValue(HiMoon, HiSun);
  const klogoMode = useColorModeValue(gsdblogo, gsdblogo);
  const { height, width } = useWindowSize();

  const ref = React.useRef(null);

  const setPageIndex = pagesStore((state) => state.set_page_index);
  const getPageIndex = pagesStore((state) => state.page_index);

  const bg = useColorModeValue("white", "#474747");
  const MobileNavContent = (
    <VStack
      zIndex={10}
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={5}
      bg={bg}
      spacing={3}
      borderRadius={"20px"}
      shadow="lg"
    >
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >
        <MotionButton
          backgroundColor={"transparent"}
          _focus={{ border: "none" }}
          _focusWithin={{ backgroundColor: "transparent" }}
          _hover={{
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          flexDirection={"row"}
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
            color: cl,
          }}
          onClick={null} //update this
        >
          <Text
            fontWeight={getPageIndex == 1 ? "black" : "thin"}
            fontSize="14px"
            color={getPageIndex == 1 ? "#22C086" : "#474747"}
            _dark={{
              color: getPageIndex == 1 ? "#22C086" : "gray",
            }}
            _hover={{
              color: "#22C086",
            }}
          >
            About us
          </Text>
        </MotionButton>
      </Link>
      <Link
        activeClass="active"
        to="whatwedo"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >
        <MotionButton
          backgroundColor={"transparent"}
          _focus={{ border: "none" }}
          _focusWithin={{ backgroundColor: "transparent" }}
          _hover={{
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          flexDirection={"row"}
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
            color: cl,
          }}
          onClick={null} //update this
        >
          <Text
            fontWeight={getPageIndex == 2 ? "black" : "thin"}
            fontSize="14px"
            color={getPageIndex == 2 ? "#22C086" : "#474747"}
            _dark={{
              color: getPageIndex == 2 ? "#22C086" : "gray",
            }}
            _hover={{
              color: "#22C086",
            }}
          >
            What we do
          </Text>
        </MotionButton>
      </Link>
      <Link
        activeClass="active"
        to="ourgoal"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >
        <MotionButton
          backgroundColor={"transparent"}
          _focus={{ border: "none" }}
          _focusWithin={{ backgroundColor: "transparent" }}
          _hover={{
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          flexDirection={"row"}
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
            color: cl,
          }}
          onClick={null} //update this
        >
          <Text
            fontWeight={getPageIndex == 2 ? "black" : "thin"}
            fontSize="14px"
            color={getPageIndex == 2 ? "#22C086" : "#474747"}
            _dark={{
              color: getPageIndex == 2 ? "#22C086" : "gray",
            }}
            _hover={{
              color: "#22C086",
            }}
          >
            Our goal
          </Text>
        </MotionButton>
      </Link>
      <Link
        activeClass="active"
        to="workwithus"
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
      >
        <MotionButton
          backgroundColor={"transparent"}
          _focus={{ border: "none" }}
          _focusWithin={{ backgroundColor: "transparent" }}
          _hover={{
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          flexDirection={"row"}
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
            color: cl,
          }}
          onClick={null} //update this
        >
          <Text
            fontWeight={getPageIndex == 3 ? "black" : "thin"}
            fontSize="14px"
            color={getPageIndex == 3 ? "#22C086" : "#474747"}
            _dark={{
              color: getPageIndex == 3 ? "#22C086" : "gray",
            }}
            _hover={{
              color: "#22C086",
            }}
          >
            Work with us
          </Text>
        </MotionButton>
      </Link>
      <Link
        activeClass="active"
        to="tools"
        spy={true}
        smooth={true}
        offset={-10}
        duration={1000}
      >
        <MotionButton
          backgroundColor={"transparent"}
          _focus={{ border: "none" }}
          _focusWithin={{ backgroundColor: "transparent" }}
          _hover={{
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          flexDirection={"row"}
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
            color: cl,
          }}
          onClick={null} //update this
        >
          <Text
            fontWeight={getPageIndex == 4 ? "black" : "thin"}
            fontSize="14px"
            color={getPageIndex == 4 ? "#22C086" : "#474747"}
            _dark={{
              color: getPageIndex == 4 ? "#22C086" : "gray",
            }}
            _hover={{
              color: "#22C086",
            }}
          >
            Join us
          </Text>
        </MotionButton>
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-48}
        duration={1000}
      >
        <MotionButton
          backgroundColor={"transparent"}
          _focus={{ border: "none" }}
          _focusWithin={{ backgroundColor: "transparent" }}
          _hover={{
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          flexDirection={"row"}
          whileTap={{
            scale: 0.9,
          }}
          whileHover={{
            scale: 1.1,
            color: cl,
          }}
          onClick={null} //update this
        >
          <Text
            fontWeight={getPageIndex == 5 ? "black" : "thin"}
            fontSize="14px"
            color={getPageIndex == 5 ? "#22C086" : "#474747"}
            _dark={{
              color: getPageIndex == 5 ? "#22C086" : "gray",
            }}
            _hover={{
              color: "#22C086",
            }}
          >
            Understanding Poverty
          </Text>
        </MotionButton>
      </Link>
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
    </VStack>
  );
  return (
    <React.Fragment>
      <Box w={"full"} h={"200px"} position={"absolute"}>
        <chakra.header
          ref={ref}
          position={"absolute"}
          right={["0px", "10px", "75px", "75px", "0px", "0px"]}
          left={["10px", "10px", "75px", "75px", "75px", "75px"]}
          padding="6"
          zIndex={2}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Link display="flex" alignItems="center" href="/">
              <Box
                height={["30px", "45px", "45px", "45px", "45px", "45px"]}
                width={["150px", "220px", "220px", "220px", "220px", "220px"]}
              >
                <Image src={klogoMode} draggable="false" alt="gsdb icon png" />
              </Box>
            </Link>
            <Spacer />

            <HStack
              spacing="5"
              display={{
                base: "none",
                md: "flex",
              }}
            >
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                <MotionButton
                  backgroundColor={"transparent"}
                  _focus={{ border: "none" }}
                  _focusWithin={{ backgroundColor: "transparent" }}
                  _hover={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                  flexDirection={"row"}
                  whileTap={{
                    scale: 0.9,
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: cl,
                  }}
                  onClick={() => {}} //update this
                >
                  <Text
                    fontWeight={getPageIndex == 1 ? "black" : "thin"}
                    fontSize="14px"
                    color={getPageIndex == 1 ? "#22C086" : "#474747"}
                    _dark={{
                      color: getPageIndex == 1 ? "#22C086" : "gray",
                    }}
                    _hover={{
                      color: "#22C086",
                    }}
                  >
                    About us
                  </Text>
                </MotionButton>
              </Link>
              <Link
                activeClass="active"
                to="whatwedo"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                <MotionButton
                  backgroundColor={"transparent"}
                  _focus={{ border: "none" }}
                  _focusWithin={{ backgroundColor: "transparent" }}
                  _hover={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                  flexDirection={"row"}
                  whileTap={{
                    scale: 0.9,
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: cl,
                  }}
                  onClick={null} //update this
                >
                  <Text
                    fontWeight={getPageIndex == 2 ? "black" : "thin"}
                    fontSize="14px"
                    color={getPageIndex == 2 ? "#22C086" : "#474747"}
                    _dark={{
                      color: getPageIndex == 2 ? "#22C086" : "gray",
                    }}
                    _hover={{
                      color: "#22C086",
                    }}
                  >
                    What we do
                  </Text>
                </MotionButton>
              </Link>
              <Link
                activeClass="active"
                to="ourgoal"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                <MotionButton
                  backgroundColor={"transparent"}
                  _focus={{ border: "none" }}
                  _focusWithin={{ backgroundColor: "transparent" }}
                  _hover={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                  flexDirection={"row"}
                  whileTap={{
                    scale: 0.9,
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: cl,
                  }}
                  onClick={null} //update this
                >
                  <Text
                    fontWeight={getPageIndex == 2 ? "black" : "thin"}
                    fontSize="14px"
                    color={getPageIndex == 2 ? "#22C086" : "#474747"}
                    _dark={{
                      color: getPageIndex == 2 ? "#22C086" : "gray",
                    }}
                    _hover={{
                      color: "#22C086",
                    }}
                  >
                    Our goals
                  </Text>
                </MotionButton>
              </Link>
              <Link
                activeClass="active"
                to="workwithus"
                spy={true}
                smooth={true}
                offset={-180}
                duration={1000}
              >
                <MotionButton
                  backgroundColor={"transparent"}
                  _focus={{ border: "none" }}
                  _focusWithin={{ backgroundColor: "transparent" }}
                  _hover={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                  flexDirection={"row"}
                  whileTap={{
                    scale: 0.9,
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: cl,
                  }}
                  onClick={null} //update this
                >
                  <Text
                    fontWeight={getPageIndex == 3 ? "black" : "thin"}
                    fontSize="14px"
                    color={getPageIndex == 3 ? "#22C086" : "#474747"}
                    _dark={{
                      color: getPageIndex == 3 ? "#22C086" : "gray",
                    }}
                    _hover={{
                      color: "#22C086",
                    }}
                  >
                    Work with us
                  </Text>
                </MotionButton>
              </Link>
              <Link
                activeClass="active"
                to="tools"
                spy={true}
                smooth={true}
                offset={-130}
                duration={1000}
              >
                <MotionButton
                  backgroundColor={"transparent"}
                  _focus={{ border: "none" }}
                  _focusWithin={{ backgroundColor: "transparent" }}
                  _hover={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                  flexDirection={"row"}
                  whileTap={{
                    scale: 0.9,
                  }}
                  whileHover={{
                    scale: 1.1,
                    color: cl,
                  }}
                  onClick={null} //update this
                >
                  <Text
                    fontWeight={getPageIndex == 4 ? "black" : "thin"}
                    fontSize="14px"
                    color={getPageIndex == 4 ? "#22C086" : "#474747"}
                    _dark={{
                      color: getPageIndex == 4 ? "#22C086" : "gray",
                    }}
                    _hover={{
                      color: "#22C086",
                    }}
                  >
                    Join us
                  </Text>
                </MotionButton>
              </Link>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-48}
                duration={1000}
              >
                <MotionButton
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
                    color: cl,
                  }}
                  onClick={null} //update this
                >
                  <Text fontSize="14px" color={"white"}>
                    Understanding Poverty
                  </Text>
                </MotionButton>
              </Link>
            </HStack>

            <Box display="flex" alignItems="center" ml={"20px"}>
              {/* <MotionButton
                backgroundColor={"transparent"}
                _focus={{ border: "none" }}
                _focusWithin={{ backgroundColor: "transparent" }}
                _hover={{
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                whileTap={{
                  scale: 0.9,
                }}
                whileHover={{
                  scale: 1.1,
                  color: cl,
                }}
                onClick={toggleMode} //update this
              >
                <SwitchIcon color={mode} size={"22px"} />
              </MotionButton> */}
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Box>
          </Flex>

          {MobileNavContent}
        </chakra.header>
      </Box>
    </React.Fragment>
  );
}
