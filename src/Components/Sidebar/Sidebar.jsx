import React, { useState } from 'react';
import {
  Flex,
  Avatar,
  Heading,
  Text,
  IconButton,
} from '@chakra-ui/react'
import {
  FiMenu 
} from 'react-icons/fi'
import avatar_image from "../../assets/avatar_default_6.png";
import SideItem from "./SideItem";
import { BiSolidDashboard } from "react-icons/bi";
import { IoCalendarSharp } from "react-icons/io5";
import { LiaBookMedicalSolid, LiaNotesMedicalSolid } from "react-icons/lia";
import { CiLogout } from "react-icons/ci";


function Sidebar() {
<<<<<<< HEAD:smile front-end/src/Components/Sidebar/Sidebar.jsx
  const [navSize, changeNavSize] = useState("large");
=======
  const [activeLink, setActiveLink] = useState('/patient/dashboard');

>>>>>>> development:src/Components/Sidebar/Sidebar.jsx
  return (
    <Flex
    pos="fixed"
    h='100vh'
    background='white'
    w={navSize == "small" ? "75px" : "250px"}
    flexDir='column'
    justifyContent='space-between'
    >
      <Flex
      p="0.5rem"
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
      as="nav"
      >
        <IconButton 
        background='none'
        mt={5}
        _hover={{ background: 'none' }}
        icon={<FiMenu />}
        onClick={() => {
          if (navSize == "small")
              changeNavSize("large")
          else
              changeNavSize("small")
        }}
        />
        <Flex mt={4} align='center'>
          <Avatar size="sm" src={avatar_image} />
          <Flex flexDir='column' ml={4}  display={navSize == "small" ? "none" : "flex"}>
            <Heading as='h3' size='sm'>Omar Adel</Heading>
            <Text color='gray'>Patient</Text>
          </Flex>
        </Flex>
        <SideItem navSize={navSize} icon={BiSolidDashboard} title="Dashboard" />
        <SideItem navSize={navSize} icon={IoCalendarSharp} title="Appointment" />
        <SideItem navSize={navSize} icon={LiaBookMedicalSolid} title="Book appointment" active/>
        <SideItem navSize={navSize} icon={LiaNotesMedicalSolid} title="Medical Records" />
        <SideItem navSize={navSize} icon={CiLogout} title="Log out" />
      </Flex>
      <Flex
      p='5%'
      flexDir='column'
      width='100%'
      alignItems={navSize == "small" ? "center" : "flex-start"}
      mb={4}
      >
      </Flex>
    </Flex>
  )
}

export default Sidebar;