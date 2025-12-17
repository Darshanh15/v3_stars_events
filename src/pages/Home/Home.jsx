import React from 'react'
import EventBooking from './sub/EventBooking'
import VisionMission from '../About/sub/VisionMission'
import ServicesSection from '../About/sub/ServicesSection'
import HeroSection from './sub/HeroSection'
import ExperiencesSection from '../Booking/Book/ExperiencesSection'
import ExpoWebsite from '../ExpoWebsite/ExpoWebsite'
import ECard from '../ExpoWebsite/ECard'

function Home() {
  return (
      <>
      {/* <div>Home</div> */}
      <HeroSection />
      <ExpoWebsite />
    <ECard />
    <VisionMission />
    <ServicesSection />
    {/* <EventBooking /> */}
    
        <ExperiencesSection />
    
    </>
  )
}

export default Home