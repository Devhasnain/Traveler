import {
  Button,
  Center,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const SectionSix = () => {
  return (
    <div className="container-fluid signup-parent-s6">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-lg col-md-6 col-sm-10 mx-auto">
            <Heading
              as="h5"
              size="md"
              color="green"
              fontWeight="semibold"
              letterSpacing="4px"
              p="2"
            >
              MEGA OFFER
            </Heading>
            <Heading as="h1" size="lg" fontSize="45px" color="white">
              <span style={{ color: "green" }} p="1">
                30% OFF
              </span>{" "}
              For Honeymoon
            </Heading>
            <Text
              color="white"
              fontFamily="sans-serif"
              fontSize="20px"
              letterSpacing="1px"
              p="1"
              my="2"
            >
              Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
              dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
              Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
              dolor
            </Text>
            <br />
            <List spacing={3}>
              <ListItem color="white" fontSize="20px">
                <ListIcon as={MdCheckCircle} color="green.500" />
                Lorem ipsum dolor sit amet
              </ListItem>
              <ListItem color="white" fontSize="20px">
                <ListIcon as={MdCheckCircle} color="green.500" />
                Assumenda, quia temporibus eveniet
              </ListItem>
              <ListItem color="white" fontSize="20px">
                <ListIcon as={MdCheckCircle} color="green.500" />
                Quidem, ipsam illum quis sed voluptatum
              </ListItem>
            </List>
          </div>
          <div className="col-lg col-md-6 col-sm-8 col-9 mx-auto my-3">
            <div className="row">
              <div className="col-lg-8 col-md-10 col-sm-10col bg-light mx-auto">
                <div className="row">
                  <Center bg="green" h="100px" color="white">
                    <Heading as="h1" size="xl">
                      Sign Up Now
                    </Heading>
                  </Center>
                </div>
                <div className="row pt-4 p-4">
                  <form>
                    <Input placeholder="Name *" borderRadius="none" size="lg" />
                    <br />
                    <br />
                    <Input
                      placeholder="Email *"
                      borderRadius="none"
                      size="lg"
                    />
                    <br />
                    <br />
                    <Select
                      size="lg"
                      borderRadius="none"
                      placeholder="Select Destination"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <br />
                    <Center bg="green" h="60px">
                      <Heading color="white" as="h3" size="md">
                        Sign Up Now
                      </Heading>
                    </Center>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-s6-bg"></div>
    </div>
  );
};

export default SectionSix;
