import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const SectionFour = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <Heading
              as="h3"
              size="md"
              color="green"
              fontWeight="semibold"
              letterSpacing="4px"
            >
              Services
            </Heading>
            <Heading as="h5" size="2xl" letterSpacing="1px">
              Tour & Travel Services
            </Heading>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-4 col-md-6 col-sm-8 mx-auto text-center p-1 card-div-s4">
            <div className="shadow">
              <Box
                mx="auto"
                h="80px"
                w="80px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                className="card-icon-s4"
              >
                <FaFacebook size={40} color=""/>
              </Box>
              <Heading as="h4" size="lg" my="2" fontWeight="semibold">
                Heading
              </Heading>
              <Text fontSize="17px" my="2" p="2">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                Amet lorem est amet labore
              </Text>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8 mx-auto text-center p-1 card-div-s4">
            <div className="shadow">
              <Box
                mx="auto"
                h="80px"
                w="80px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                className="card-icon-s4"
              >
                <FaFacebook size={40} />
              </Box>
              <Heading as="h4" size="lg" my="2" fontWeight="semibold">
                Heading
              </Heading>
              <Text fontSize="17px" my="2" p="2">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                Amet lorem est amet labore
              </Text>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8 mx-auto text-center p-1 card-div-s4">
            <div className="shadow">
              <Box
                mx="auto"
                h="80px"
                w="80px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                className="card-icon-s4"
              >
                <FaFacebook size={40} />
              </Box>
              <Heading as="h4" size="lg" my="2" fontWeight="semibold">
                Heading
              </Heading>
              <Text fontSize="17px" my="2" p="2">
                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                Amet lorem est amet labore
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
