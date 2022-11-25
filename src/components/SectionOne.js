import { Button, Heading, Input, Select } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionSeven from "./SectionSeven";
import SectionSix from "./SectionSix";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const SectionOne = () => {
  return (
    <>
    <div className="contaner-fluid section-one-parent">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-11 col-12 mx-auto text-center">
            <Heading
              as="h4"
              size="lg"
              mb="3"
              fontWeight="bold"
              color="white"
              letterSpacing="1px"
              textAlign="center"
            >
              TOUR & TRAVEL
            </Heading>
            <Heading
              as="h1"
              size="4xl"
              fontWeight="bold"
              color="white"
              letterSpacing="1px"
              textAlign="center"
            >
              Discover Amazing Places With Us
            </Heading>
            <br />
            <br />
            <Button colorScheme="green" size="lg">
              BOOK NOW
            </Button>
          </div>
        </div>
        <form>
          <div className="row form-submit-row-s1 shadow">
            <div className="col-6 col-md-6 col-lg my-1 col-sm-6">
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div className="col-6 col-md-6 col-lg my-1 col-sm-6">
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
            </div>
            <div className="col-6 col-lg col-md-6 my-1 col-sm-6">
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
            </div>
            <div className="col-6 col-lg col-md-6 my-1 col-sm-6">
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div className="col-6 col-lg col-md-6 my-1 col-sm-6">
                <Button colorScheme="green" size="lg">Submit</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <SectionTwo/><br/><br/><br/><br/>
    <SectionThree/><br/><br/><br/><br/>
    <SectionFour/><br/><br/><br/><br/>
    <SectionFive/><br/><br/><br/><br/>
    <SectionSix/><br/><br/><br/><br/>
    <SectionSeven/><br/><br/><br/><br/>
    <Footer/>
    </>
  );
};

export default SectionOne;
