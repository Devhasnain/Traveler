import { Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Card1 from '../medis/card1.jpg';
import Card2 from '../medis/card2.jpg';
import Card3 from '../medis/card3.jpg';
import Card4 from '../medis/card4.jpg';
import Card5 from '../medis/card5.jpg';
import Card6 from '../medis/card6.jpg';

const Cards=[
    {
        text:"This is Text",
        num:"29",
        img:Card1
    },
    {
        text:"This is Text",
        num:"29",
        img:Card2
    },
    {
        text:"This is Text",
        num:"29",
        img:Card3
    },
    {
        text:"This is Text",
        num:"29",
        img:Card4
    },
    {
        text:"This is Text",
        num:"29",
        img:Card5
    },
    {
        text:"This is Text",
        num:"29",
        img:Card6
    },
]



const SectionThree = () => {
  return (
    <div className='container-fluid'>
        <div className='container-lg'>
            <div className='row'>
                <div className='col text-center'>
                    <Heading as="h3" size="md" color="green" fontWeight="semibold" letterSpacing="4px">Destination</Heading>
                    <Heading as="h5" size="2xl" letterSpacing="1px" >Explore Top Destinations</Heading>
                </div>
            </div>
            <div className='row my-1'>
                {Cards.map((item,index)=>{
                    return(
                        <div className='col-lg-4 col-md-4 col-sm-6 col-11 mx-auto my-4' key={index}>
                            <div className='card-content-div-s3'>
                                <img src={item.img} alt=''/>
                                <div className='card-text-div-s3'>
                                    <Heading  color="white" letterSpacing="1px" as="h4" size="md">{item.text}</Heading>
                                    <Text color="white" >{item.num}</Text>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SectionThree;