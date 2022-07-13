import React from 'react'
import About from '../components/About'
import ContactHere from '../components/ContactHere'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ItemList from '../components/ItemList'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import SectorWeServe from '../components/SectorWeServe'
import WhoWeAre from '../components/WhoWeAre'

const Govind = () => {
  return (
    <>
    <Meta/>
    <Navbar/>
    <Hero/>
    <ContactUs/>
    <About/>
    <ItemList/>
    <WhoWeAre/>
    <SectorWeServe/>
    <ContactHere/>
    <Footer/>
    </>

   
  )
}

export default Govind