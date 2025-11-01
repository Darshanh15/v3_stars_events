import React from 'react'
import EventBooking from './sub/EventBooking'
import VisionMission from '../About/sub/VisionMission'
import ServicesSection from '../About/sub/ServicesSection'
import HeroSection from './sub/HeroSection'
import ExperiencesSection from '../Booking/Book/ExperiencesSection'

function Home() {
  return (
      <>
      {/* <div>Home</div> */}
      <HeroSection />
    <VisionMission />
    <ServicesSection />
    {/* <EventBooking /> */}
        <ExperiencesSection />
    
    </>
  )
}

export default Home