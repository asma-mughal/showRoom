import React, {useRef} from 'react'
import { Navbar, Hero, Contact, Footer, Blogs } from '../components';
import CardSection from './CardSection';
const Dashboard = () => {
 
  return (
    <div 
    className='bg-black h-full w-full'>

  <Navbar />
  <Hero />
  <CardSection />
  <Contact />
  <Blogs />
  <Footer />
  </div>
  )
}

export default Dashboard
