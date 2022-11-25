import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import Card1 from "../medis/card1.jpg";
import Card2 from "../medis/card2.jpg";
import Card3 from "../medis/card3.jpg";
import Card4 from "../medis/card4.jpg";
import Card5 from "../medis/card5.jpg";
import Card6 from "../medis/card6.jpg";
import { FaLocationArrow, FaCalendar, FaPersonBooth } from "react-icons/fa";
import { motion } from "framer-motion";

const Cards = [
  {
    place: "Thailand",
    days: "3 days",
    persons: "2 persons",
    title: "This is card title...",
    img: Card1,
    price: "$350",
  },
  {
    place: "Thailand",
    days: "3 days",
    persons: "2 persons",
    title: "This is card title...",
    img: Card2,
    price: "$350",
  },
  {
    place: "Thailand",
    days: "3 days",
    persons: "2 persons",
    title: "This is card title...",
    img: Card3,
    price: "$350",
  },
  {
    place: "Thailand",
    days: "3 days",
    persons: "2 persons",
    title: "This is card title...",
    img: Card4,
    price: "$350",
  },
  {
    place: "Thailand",
    days: "3 days",
    persons: "2 persons",
    title: "This is card title...",
    img: Card5,
    price: "$350",
  },
  {
    place: "Thailand",
    days: "3 days",
    persons: "2 persons",
    title: "This is card title...",
    img: Card6,
    price: "$350",
  },
];

const SectionFive = () => {
  return (
    <div className="container-fluid">
      <div className="container-lg">
        <div className="row">
          <div className="col text-center">
            <Heading
              as="h3"
              size="md"
              color="green"
              fontWeight="semibold"
              letterSpacing="4px"
              p="3"
            >
              Packages
            </Heading>
            <Heading as="h5" size="2xl" letterSpacing="1px" p="3">
              Perfect Tour Packages
            </Heading>
          </div>
        </div>
        <div className="row my-3">
          {Cards.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-4 col-sm-6 col-10 mx-auto p-0 my-2" key={index}>
                <div className="card-content-s5 p-0 border mx-2">
                  <div className="">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="my-3 p-2">
                    <div className="d-flex p-0 justify-content-between">
                      <div className="d-flex align-items-center">
                        <FaLocationArrow className="mx-2" />
                        {item.place}
                      </div>
                      <div className="d-flex align-items-center">
                        <FaCalendar className="mx-2" />
                        {item.days}
                      </div>
                      <div className="d-flex align-items-center">
                        <FaPersonBooth className="mx-2" />
                        {item.persons}
                      </div>
                    </div>
                    <div className="card-body">
                      <Heading
                        fontWeight="semibold"
                        as="h2"
                        size="lg"
                        mt="4"
                        ml="3"
                      >
                        {item.title}
                      </Heading>
                      <div className="text-end my-3">
                        <hr />
                        <Text fontSize="20px" p="3">
                          {item.price}
                        </Text>
                      </div>
                    </div>
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

export default SectionFive;
