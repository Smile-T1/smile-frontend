import React from 'react';
import "./Home.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel, CardBody, Card } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import waves from "../../assets/waves.png";
import location from "../../assets/location.png";
import date from "../../assets/date.png";
import time from "../../assets/time.png";

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className='home'>
       {activeTab === 'about' &&  
      <div className='about-waves'>
      <img src={waves} alt="background" /> </div> }
      {activeTab === 'home' && <div className='eclipsehome1'></div>}
      {activeTab === 'home' && <div className='eclipsehome2'></div>}
      <div className={`upper-rectangle ${activeTab}`}>        

        <div className='logo'>
          <img src="https://s3-alpha-sig.figma.com/img/6b21/a3e1/f998fc732e043ac75497dd13ac5c6171?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cUE-~mzYhIylaXSLea-e~6UGxTVZnVClkFLwRSU5m5CMC6R9qy2YIOOAmer5IJQ9OBzFNtE64Dtb7i6qF2T14Sn~tL7aTM63le3yx-qewbc45xHcJI14gMIeft5HRbTYXZqts6C9hPOoz5HWexQRE20YnP3Y4AE6MFu1VbhJzZbbW3~M2j5Ch-odvM8~7LvJBdljuJXYsb9oDmPtW4iMu69X7226Z4AmS8DU1E8HGOgv9n4CQU7wA~b-fY8ibCnoaNOGkoHB-XzuuA1Apwm56dgsbdXU-mXqS3r0kRjwS0Zq70Z3dLQg7KagNG5aDn4aXK4Q7BsrXYux9QRTuJmG7A__" alt="" />
          <span className='logo-name'>Smile Clinic</span>
        </div>
      <div className='homeMenu'>
      <Tabs position='relative' variant='unstyled'>      
      <TabList>
      <Tab onClick={()=> setActiveTab('home')} >Home</Tab>
      <Tab  onClick={()=> setActiveTab('about')}>About Us</Tab>
      <Tab onClick={()=> setActiveTab('contact')} >Contact</Tab>
      <Tab  onClick={() => {navigate('/login'); setActiveTab('login')}}>Log In</Tab>  
</TabList>
  <TabPanels>
    <TabPanel>
<div className={`home ${activeTab}`}>
      <div className='hometab'>
      <div className='home-text'>
    <span className='home-text1'>“Where great smile meets compassionate care.”</span> <br />
    <span className='home-text2'> A specialized Dentistry Clinical Management System to insure a unique experience for both patients and clinical staff</span>
    </div>
    <div className='doctor'>
      <img src="https://s3-alpha-sig.figma.com/img/5fd1/cde4/07fc05af477483da6b00380edb02b533?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJykoDP1~EYmvI38Dq7LteQDCaFOPSj-R8kwSFRklwlpjGNyZkt17yNBrCbmJDJIQEo4ABJh6Alw43spUCLpXzZMaqW4BnaJoOAyoVLDH-BBUwWYjAwZgln3EzsE5dKJAbz82tphw3oaA6Cub-jD95cmfl7XqrJKpSMQ2DuyEnAgoEqT2AYcj3tgVO3I99zxMD2HYEi6y4Aspz33Y9adU~350wnz12GfDUfxhBBMeYZLT8dOEfUiU9T~PZU8S45mhmpQW7Pm9y12eL7~ThtkxQNWp36s4xfAyUqWJxtL82rckzQnaKhBSRbVAf~Fp~P8tGwPQWETDgQzgmYScpFlDA__" alt="doctor" />
    </div>
    </div>
    <Card>
      <CardBody>
        <div className='card-title'>
          <span>Cloud Storage</span>
          <span> CDS </span>
          <span>xxxxxx</span>
        </div>
        <div className='card-text'>
        <div className='location'>
          <img src={location} alt="location" />
        <span> CUFE</span> 
        </div>
        <div className='date'>
          <img src={date} alt="date" />
        <span> 10 April 2024</span>
        </div>
        <div className='time'>
          <img src={time} alt="time" />
        <span> 10:00 AM</span>

        </div>
        </div>
      </CardBody>
    </Card>
    </div>
    </TabPanel>
    <TabPanel>
    <div className='about'>
    <div className='about-text'>
    <span className='about-text1'>FOCUS SMILE & SURGERY</span> <br />
    <span className='about-text2'>Your Smile, Our Mission</span> <br />
    <span className='about-text3'> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </span>

    </div>
     
</div>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
    
  </TabPanels>
</Tabs>

      </div>
      </div>

    </div>
  )
}

export default Home
