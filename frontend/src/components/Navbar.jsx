import React from 'react'
import { Link } from "react-router-dom";
import { Container,Flex,Text, HStack, Button, useColorMode } from '@chakra-ui/react';
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useProductStore } from '../store/product';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const{products} = useProductStore()
  return (
      <Container maxW={"1140px"} px={4} >
        <Flex
        h = {16}
        alignItems = {"center"}
        justifyContent = {"space-between"}
        flexDir={{
            base:"column",
            sm:"row"
        }}
        >
            <Text
            fontSize={{ base: "22", sm: "28"}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient= 'linear(to-r, yellow.500, yellow.500)'
            _hover={{
                bgGradient:"linear(to-r, teal.500, purple.500)",
            transition: 'background 0.3s ease',}}
            bgClip={"text"}
            >
                <Link to={"/"}>ManjaPai 👜</Link>
            </Text>
            <HStack spacing={2} alignItmes={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <PlusSquareIcon fontSize={20} />
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>{colorMode === "light" ? <IoMoon />: <LuSun size="20" />}
                </Button>
            </HStack>
        </Flex>
      </Container>
  )
}

export default Navbar
