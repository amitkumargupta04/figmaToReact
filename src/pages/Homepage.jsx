import React from 'react'
import Hero from '../components/Hero';
import ContinuesScroll from '../components/ContinuesScroll';
import Prospectors from '../components/Prospectors';
import PeopleSaying from '../components/PeopleSaying';
import ThoushandsUsing from '../components/ThoushandsUsing';
import OurSupport from '../components/OurSupport';
import LinkedInSales from '../components/LinkedInSales';
import HowItWorks from '../components/HowItWorks';

function Homepage() {
  return (
    <>
     <Hero/>
     <ContinuesScroll/>
     <Prospectors/>
     <HowItWorks/>
     <PeopleSaying/>
     <LinkedInSales/>
     <OurSupport/>
     <ThoushandsUsing/>
    </>
  )
}

export default Homepage;