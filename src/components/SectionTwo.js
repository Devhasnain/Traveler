import { Heading, Text, Button, Box } from "@chakra-ui/react";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import Img from "../medis/cardImg.jpg";
import CardOne from "../medis/cardImg1.jpg";
import CardTwo from "../medis/cardImg2.jpg";

const SectionTwo = () => {
  return (
    <div className="container-fluid">
      <div className="container-lg my-5 pt-5">
        <div className="row my-5 pt-5">
          <div className="col-lg-6 col-md-6 col-8 mx-auto col-md">
            <div className="card-img-div-s2">
              <img src={Img} alt="" className="img-fluid" />
            </div>
          </div>
          {/*  */}
          <div className="col-lg-6 col-md-6 col-11 col-sm-10 mx-auto">
            <div className="card-2-s2">
              <div className="card-2-content-div-s2 shadow">
                <Heading
                  color="green"
                  as="h1"
                  size="sm"
                  letterSpacing="4px"
                  fontWeight="semibold"
                >
                  ABOUT US
                </Heading>
                <Heading
                  color="black"
                  as="h2"
                  size="xl"
                  fontSize="35px"
                  fontWeight="bold"
                  my="4"
                >
                  We Provide Best Tour Packages In Your Budget
                </Heading>
                <Text fontSize="16px" my="4" letterSpacing="1px" color="gray">
                  Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam
                  dolore sed et. Sit rebum labore sit sit ut vero no sit. Et
                  elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos
                  et erat sed diam duo
                </Text>
                <div className="row pt-3 my-3">
                  <div className="col">
                    <div>
                      <img src={CardOne} alt="" />
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <img src={CardTwo} alt="" />
                    </div>
                  </div>
                  <div className="my-5">
                    <Button colorScheme="green" letterSpacing="1px" size="md">
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
            <div className="col-lg col-md-6 col-sm-10 col-12 my-2"><div className="d-flex "><div><Box width='108px' height='16vh' alignItems="center" justifyContent="center" display="flex" bg="green.500"><FaFacebook size={40} color="white"/></Box></div><div className="mx-2"><Heading as="h3" size="md">Compitative Services</Heading>
            <Text fontSize="18px" color="gray.500">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</Text>
            </div></div></div>
            <div className="col-lg col-md-6 col-sm-10 col-12 my-2"><div className="d-flex "><div><Box width='108px' height='16vh' alignItems="center" justifyContent="center" display="flex" bg="green.500"><FaFacebook size={40} color="white"/></Box></div><div className="mx-2"><Heading as="h3" size="md">Compitative Services</Heading>
            <Text fontSize="18px" color="gray.500">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</Text>
            </div></div></div>
            <div className="col-lg col-md-6 col-sm-10 col-12 my-2"><div className="d-flex "><div><Box width='108px' height='16vh' alignItems="center" justifyContent="center" display="flex" bg="green.500"><FaFacebook size={40} color="white"/></Box></div><div className="mx-2"><Heading as="h3" size="md">Compitative Services</Heading>
            <Text fontSize="18px" color="gray.500">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</Text>
            </div></div></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
