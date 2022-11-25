import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer-parent-div">
      <div className="container-lg">
        <div className="row pt-4">
          <div className="col-lg-3 col-md-6 col-sm-6 col-10 mx-auto p-0">
            <div className="my-3 p-0">
              <Heading size="2xl"  color="white">
                TRAVEL<span style={{ color: "green" }}>ER</span>
              </Heading>
              <Text my="3" fontSize="18px" fontFamily="sans-serif" color="white">
                Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet
                labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor
              </Text>
              <Heading
                as="h3"
                size="md"
                color="white"
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
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-10 mx-auto">
            <div className="text-light footer-ul">
              <Heading letterSpacing="1px" size="lg" color="white">
                Our Services
              </Heading>
              <ul className="my-2">
                <li>
                  <NavLink to="">
                    <FaArrowRight />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <FaArrowRight />
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <FaArrowRight />
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <FaArrowRight />
                    Pages
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <FaArrowRight />
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <FaArrowRight />
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-10 mx-auto">
            <div className="text-light footer-ul">
              <Heading letterSpacing="1px" size="lg" color="white">
                Use Full Links
              </Heading>
              <ul className="my-2">
                <li>
                  <NavLink to="">
                    <FaArrowRight />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <FaArrowRight />
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <FaArrowRight />
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <FaArrowRight />
                    Pages
                  </NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <FaArrowRight />
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-10 mx-auto">
            <div className="contact-form-footer text-light my-2">
              <Heading letterSpacing="1px" size="lg" color="white">
                Contact Us
              </Heading>
              <p className="my-2">
                <FaLocationArrow className="mx-3" size={20}/>
                123 Street, New York, USA
              </p>
              <p className="my-2">
                <FaPhone className="mx-3" size={20}/>
                +012 345 67890
              </p>
              <p className="my-2">
                <FaFacebookMessenger className="mx-3" size={20}/>
                mail@domain.com
              </p>
              <div className="d-flex">
                <Input size="md" bg="white" color="black" placeholder="Email" borderRadius="0px"/>
                <Button colorScheme="green" size="md" rounded="false">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
