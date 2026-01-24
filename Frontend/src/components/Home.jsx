import React from 'react'
import Cards from './Ui/Cards.jsx'
import Footer from './Ui/Footer.jsx'
import HeroSection from './Ui/HeroSection.jsx'
import Navbar from './Ui/Navbar.jsx'
import Line from './Ui/Line.jsx'


function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <Line/>
        <Cards/>
        <Footer/>
      </div>
    </>

  )
}

export default Home