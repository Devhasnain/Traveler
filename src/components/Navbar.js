import React, { useContext, useState } from "react";
import {
  Box,
  Breadcrumb,
  Container,
  Heading,
  Text,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  FaAngleRight,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaSun,
  FaInbox,
  FaPhone,
  FaYoutube,
  FaAngleDoubleDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { AppStates } from "../Store/States";
const Navbar = () => {
  const {menu,setMenu}=useContext(AppStates);
  return (
    <div className="container-fluid bg-light navbar-main-div">
      <div className="container-lg">
        <div className="row p-3 navbar-1">
          <div className="col-lg col-mg col-sm col-5">
            <Breadcrumb>
              <BreadcrumbItem>
                <Text
                  fontSize="17px"
                  color="gray"
                  height="13px"
                  display="inline-flex"
                  alignItems="center"
                >
                  {" "}
                  <FaInbox className="mx-2" /> mail@domain.com
                </Text>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <Text
                  fontSize="17px"
                  color="gray"
                  height="13px"
                  display="inline-flex"
                  alignItems="center"
                >
                  <FaPhone className="mx-2" /> +012 345 6789
                </Text>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="col-lg col-mg col-sm col text-end">
            <IconButton
              ml="3"
              colorScheme="green"
              icon={<FaFacebook />}
              isRound="true"
            ></IconButton>
            <IconButton
              ml="3"
              colorScheme="green"
              icon={<FaInstagram />}
              isRound="true"
            ></IconButton>
            <IconButton
              ml="3"
              colorScheme="green"
              icon={<FaWhatsapp />}
              isRound="true"
            ></IconButton>
            <IconButton
              ml="3"
              colorScheme="green"
              icon={<FaLinkedin />}
              isRound="true"
            ></IconButton>
            <IconButton
              ml="3"
              colorScheme="green"
              icon={<FaYoutube />}
              isRound="true"
            ></IconButton>
          </div>
        </div>
        <div className="row nav-links-row shadow ">
          <div className="col-lg-4 col-md-5">
            <Heading letterSpacing="1px" ml="4">
              TRAVEL<span style={{ color: "green" }}>ER</span>
            </Heading>
          </div>
          <div className="col-lg-8 col-md-7">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <Text
                    className="nav-links-navbar"
                    fontSize="16px"
                    fontWeight="semibold"
                    color="black"
                  >
                    Home
                  </Text>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <Text
                    className="nav-links-navbar"
                    fontSize="16px"
                    fontWeight="semibold"
                    color="black"
                  >
                    About
                  </Text>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <Text
                    className="nav-links-navbar"
                    fontSize="16px"
                    fontWeight="semibold"
                    color="black"
                  >
                    Gallery
                  </Text>
                </NavLink>
              </li>
              <li className="nav-item services-link">
                <NavLink to="/" className="nav-link">
                  <Text
                    className="nav-links-navbar"
                    fontSize="16px"
                    fontWeight="semibold"
                    color="black"
                  >
                    Services
                  </Text>
                </NavLink>
              </li>
              <li className="nav-item pages-link">
                <Menu className="nav-item contact-link">
                  <MenuButton as="button" righticon={<FaAngleDoubleDown />}>
                    <Text
                      className="nav-links-navbar"
                      fontSize="16px"
                      fontWeight="semibold"
                      color="black"
                      mt="2"
                    >
                      Pages
                    </Text>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                  </MenuList>
                </Menu>
              </li>
              <li className="nav-item contact-link">
                <NavLink to="/" className="nav-link">
                  <Text
                    className="nav-links-navbar"
                    fontSize="16px"
                    fontWeight="semibold"
                    color="black"
                  >
                    Contact
                  </Text>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row navbar-small-screen align-items-center">
          <div className="col">
            <Heading letterSpacing="1px" ml="4">
              TRAVEL<span style={{ color: "green" }}>ER</span>
            </Heading>
          </div>
          <div className="col">
            <div className="text-end">
              <IconButton
                colorScheme="gray"
                aria-label="Search database"
                icon={<FiMenu size={25}/>}
                onClick={()=>{setMenu(!menu)}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
