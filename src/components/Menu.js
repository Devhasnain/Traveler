import { Box, Heading} from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai';
import { AppStates } from "../Store/States";
import { motion } from "framer-motion";

const variants={
  hidden:{
   x:"-100vw",
  },
  visible:{
    x:"0vw",
    transition:{duration:0.5}
  }
}
const overlay={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:"70%",
    transition:{
      duration:0.4
    }
  }
}
const Menu = () => {
  const {menu,setMenu}=useContext(AppStates);
  return (
    <>
      <motion.div variants={overlay} initial={"hidden"} animate={"visible"} className="menu-overlay"></motion.div>
      <motion.div className="menu-content" variants={variants} initial={"hidden"} animate={"visible"}>
        <div className="p-3">
          <Heading letterSpacing="1px" ml="1">
            TRAVEL<span style={{ color: "green" }}>ER</span>
          </Heading>
          <ul>
            <li>
              <NavLink to="/" onClick={()=>{setMenu(!menu)}} >Home</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={()=>{setMenu(!menu)}} >About</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={()=>{setMenu(!menu)}} >Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={()=>{setMenu(!menu)}} >Services</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={()=>{setMenu(!menu)}} >Pages</NavLink>
            </li>
            <li>
              <NavLink to="/" onClick={()=>{setMenu(!menu)}} >Contact Us</NavLink>
            </li>
          </ul>
          <br />
          <br />
          <hr />
          <Heading
            as="h3"
            size="md"
            color="green"
            letterSpacing="3px"
            fontFamily="sans-serif"
            my="4"
          >
            FOLLOW US
          </Heading>
          <div className="d-flex my-2">
            <Box
              h="40px"
              w="40px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              className="icon-div"
            >
              <FaFacebook size={25} />
            </Box>
            <Box
              h="40px"
              w="40px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              className="icon-div"
            >
              <FaInstagram size={25} />
            </Box>
            <Box
              h="40px"
              w="40px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              className="icon-div"
            >
              <FaWhatsapp size={25} />
            </Box>
            <Box
              h="40px"
              w="40px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              className="icon-div"
            >
              <FaLinkedin size={25} />
            </Box>
          </div>
        </div>
      </motion.div>
        <AiOutlineClose onClick={()=>{setMenu(!menu)}} color="white" size={30} className="close-icon-menu"/>
    </>
  );
};

export default Menu;
