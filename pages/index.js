import { Box } from "@chakra-ui/react";

import { chakra } from "@chakra-ui/react";
import { Footer } from "../constants/components/utilities/";

import { useEffect, useState } from "react";
import Loading from "./loading";
import Main from "./main";
import { startUpStore } from "../store/start_up";
import { MotionFlex } from "../constants/components/motion";

export default function Home() {
  const setshowStartup = startUpStore((state) => state.set_show_startup);
  const getshowStartup = startUpStore((state) => state.show_startup);

  return (
    <Box width={"full"} height={"full"}>
      <Loading />
    </Box>
  );
}
