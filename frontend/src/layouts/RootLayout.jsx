import { Outlet } from "react-router-dom";
import { Flex, Spacer } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Flex flex="1" direction="column" >
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  );
}
