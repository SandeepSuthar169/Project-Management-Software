import React from 'react'
// import Cards from './Pages/Cards.js'
import Footer from './Footer.jsx'
import HeroSection from './HeroSection.jsx'
import Navbar from './Navbar.jsx'
import Line from './Line.jsx'
import SecoundHeroSection from './SecoundHeroSection.jsx'

function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <SecoundHeroSection/>
        <Line/>
        <Footer/>
      </div>
    </>

  )
}

export default Home