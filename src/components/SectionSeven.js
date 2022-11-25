import { Heading, Icon, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import One from "../medis/team-1.jpg";
import Two from "../medis/team-2.jpg";
import Three from "../medis/team-3.jpg";
import Four from "../medis/team-4.jpg";

const Team = [
  {
    name: "Member Name",
    text: "Destination",
    img: One,
  },
  {
    name: "Member Name",
    text: "Destination",
    img: Two,
  },
  {
    name: "Member Name",
    text: "Destination",
    img: Three,
  },
  {
    name: "Member Name",
    text: "Destination",
    img: Four,
  },
];

const SectionSeven = () => {
 
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col text-center p-4">
            <Heading
              as="h3"
              size="md"
              color="green"
              fontWeight="semibold"
              letterSpacing="4px"
            >
              Guides
            </Heading>
            <Heading as="h5" size="2xl" letterSpacing="1px">
              Our Travel Guides
            </Heading>
          </div>
        </div>
        <div className="row">
          {Team.map((item, index) => {
            return (
              <div className="col-lg-3 col-md-6 my-2 col-sm-6 col-10 mx-auto" key={index}>
                <div className="card-hoverdiv-parent-s7">
                  <div className="card-hoverdiv-s7">
                    <img src={item.img} className="" alt="" />
                    <div className="card-hoverdiv-overlay-s7">
                      <div className="d-flex">
                        <FaFacebook className="icon-1" color="white" size={25}/>
                        <FaInstagram className="icon-2" color="white" size={25}/>
                        <FaLinkedin className="icon-3" color="white" size={25}/>
                        <FaWhatsapp className="icon-4" color="white" size={25}/>
                      </div>
                    </div>
                  </div>
                  <div className="text-center p-3">
                    <Heading as="h3" size="md" fontWeight="semibold">
                      {item.name}
                    </Heading>
                    <Text fontSize="18px" mt="3" color="gray.500">
                      {item.text}
                    </Text>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;
