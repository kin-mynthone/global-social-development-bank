import { Flex, useColorModeValue, Box } from "@chakra-ui/react";
import Image from "next/image";
import { gsdbloading } from "../constants/data";
import { MotionFlex } from "../constants/components/motion";
import { startUpStore } from "../store/start_up";
import "@fontsource/poppins";
import { useWindowSize } from "../custom_hooks";
import Router from "next/router";

import { useEffect, useState } from "react";
export default function Loading() {
  const setshowLogo = startUpStore((state) => state.set_show_logo);
  const showDelay = startUpStore((state) => state.show_delay);
  const showKlogo = startUpStore((state) => state.show_klogo);
  const setshowStartup = startUpStore((state) => state.set_show_startup);
  const { height, width } = useWindowSize();
  const klogoMode = useColorModeValue(gsdbloading, gsdbloading);

  useEffect(() => {
    if (showDelay >= 0) {
      console.log(showDelay);
      setTimeout(() => {
        setshowLogo(!showKlogo);
      }, 1000);

      if (showDelay == 0) {
        setTimeout(() => {
          Router.push({
            pathname: "/home",
          });
        }, 3000);
      }
    }
  }); //testinga asdasdasd

  return (
    <Flex justifyContent={"center"} alignItems={"center"} w={width} h={height}>
      <MotionFlex
        initial={showKlogo ? { opacity: 0 } : { opacity: 100 }}
        animate={showKlogo ? { opacity: 100 } : { opacity: 0 }}
        transition={
          showKlogo
            ? { ease: "easeIn", duration: 10 }
            : { ease: "easeOut", duration: 2 }
        }
      >
        <Box
          height={[70, 90, 90, 90, 90, 90]}
          width={[83, 103, 103, 103, 103, 103]}
        >
          <Image src={klogoMode} alt="gsdb icon png" draggable="false" />
        </Box>
      </MotionFlex>
    </Flex>
  );
}
