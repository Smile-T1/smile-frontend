import React, { useEffect, useState } from 'react';
import "./Home.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel, CardBody, Card } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import waves from "../../assets/waves.png";
import location from "../../assets/location.png";
import date from "../../assets/date.png";
import time from "../../assets/time.png";
import logo from "../../assets/Smile_without.png";
import doctor from "../../assets/doctor.png";
import about from "../../assets/about.png";
import Omar from "../../assets/Omar.jpeg";
import Ahmed from "../../assets/abdelqader.jpeg"
import Hassan from "../../assets/Hassan.jpeg"
import Hana from "../../assets/hana.jpeg"

function Home(props) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    localStorage.removeItem('token'); 
  }, []);

  const handleTabChange = (index) => {
    if (index === 3) {
      navigate('/login');
    }
    else if (index === 0) {
      setActiveTab('home');
    }
    else if (index === 1) {
      setActiveTab('about');
    }
    else if (index === 2) {
      setActiveTab('contact');
    }
  };

  return (
    <div className='home'>
      {activeTab === 'about' &&
        <div className='about-waves'>
          <img src={waves} alt="background" /> </div>}
      {activeTab === 'home' && <div className='eclipsehome1'></div>}
      {activeTab === 'home' && <div className='eclipsehome2'></div>}
      {activeTab === 'about' &&
        <div className='about-waves'>
          <img src={waves} alt="background" /> </div>}
      
      <div className={`upper-rectangle ${activeTab}`}>

        <div className='logo'>
          <img src={logo} alt="" />
          <span className='logo-name'>Smile Clinic</span>
        </div>
        <div className='homeMenu'>
          <Tabs position='relative' variant='unstyled' onChange={handleTabChange}>
            <TabList>
              <Tab onClick={() => setActiveTab('home')} >Home</Tab>
              <Tab onClick={() => setActiveTab('about')}>About Us</Tab>
              <Tab onClick={() => setActiveTab('contact')} >Contact</Tab>
              <Tab onClick={() => { navigate('/login') }}>Log In</Tab>
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
                      <img src={doctor} alt="doctor" />
                    </div>
                  </div>
                  <div className='card1'>
                      <div className='card-title'>
                        <span>Smile</span>
                        <span> Confidence </span>
                        <span>Happiness</span>
                      </div>
                      <div className='card-text'>
                        <div className='homeloc'>
                          <img src={location} alt="location" />
                          <span> Location</span>
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
                      </div>
                 <div className='meetteam'>
                <h3>Meet the team</h3>
                <div className='team-cards'>
                  <div className='card'>
                    <img src={Omar} alt="Eng Omar Adel" />
                    <h4>Dr. Omar Adel</h4>
                      <h6>Orthodontist</h6>
                  </div>
                  <div className='card'>
                  <img src={Ahmed} alt="Eng Ahmed Abdelqader" />
                  <h4>Dr. Ahmed Abdelqader</h4>
                  <h6>Oral Pathologist</h6>
                  </div>
                  <div className='card'>
                  <img src={Hassan} alt="Eng Hassan Mohamed" />
                  <h4>Dr. Hassan Mohamed</h4>
                  <h6>Endodontist</h6>
                  </div>
                  <div className='card'> 
                  <img src={Hana} alt="Eng Hana Fares" />
                  <h4>Dr. Hana Fares</h4>
                  <h6>Pediatric Dentist</h6>
                  </div>
                </div>
              </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='about'>
                  <div className='about-text'>
                    <span className='about-text1'>FOCUS SMILE & SURGERY</span> <br />
                    <span className='about-text2'>Your Smile, Our Mission</span> <br />
                    <span className='about-text3'> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </span>
                    <span className='about-text3'> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </span>
                    <div className='bookapp'>
                      <button className='bookbutton'>Book today</button>
                    </div>

                    <div className='about-bottom'>
                      <div className='abouttxt'>
                        <div className='about-text4'>
                          IMPROVE YOUR SMILE AT THE BEST DENTAL HOSPITAL, CUFE SMILE
                        </div>
                        <div className='about-text5'>
                          We are a dedicated team of eye care professionals committed to providing our patients with the highest quality of care. Our mission is to help our patients maintain healthy eyes and clear vision throughout their lives. <br /> <br />

Our clinic offers a comprehensive range of services, including routine eye exams, vision screenings, and treatment for a variety of eye conditions and diseases. Our skilled and experienced doctors use the latest technologies and techniques to ensure that our patients receive the best possible care.
        </div>
        </div>
        <img src={about} alt="dental" />
      </div>
    </div>
     
</div>
    </TabPanel>
    <TabPanel>
      <div className='contactus'>
      <div className='contactform'>
    <h2>Contact us</h2>
  <form>
    <div className='formName'>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    </div>
    <div className='formEmail'>
    <label>
      Email:
      <input type="email" name="email"  />
    </label>
    </div>
    <div  className='formPhone'>
    <label>
      Phone:
      <input type="tel" name="phone" />
    </label>
    </div>
    <div className='formMessage' >
    <label>
      Message:
      <input  name="message" />
    </label>
    </div>
    <div className='formSubmit'>
    <button>
      Submit
    </button>
    </div>
  
  </form>
  </div>
  <div className='workinghours'>
      <div className='hours'>
      <h3>Working Hours</h3>
      <b>Monday - Friday: <br /> 8:00 AM - 5:00 PM</b> <br />
      <b>Saturday: <br /> 8:00 AM - 12:00 PM</b>
      </div>
      <div className='location'>
      <h3>Locations</h3>
      <b>Smile Clinic - Nasr City</b> <br />
      <b>Smile Clinic - Maadi</b>
      </div>
      <div className='contphone'>
        <h3>Phone Numbers</h3>
        <b>01000000000</b> <br />
        <b>02-26891638</b>
      </div>

    </div>
    </div>
</TabPanel>
  </TabPanels>
</Tabs>
        </div>
      </div>

    </div>
  )
}

export default Home