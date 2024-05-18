import React, { useEffect, useState } from 'react';
import "./Home.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel, CardBody, Card } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import waves from "../../assets/waves.png";
import location from "../../assets/location.png";
import date from "../../assets/date.png";
import time from "../../assets/time.png";
import logo from "../../assets/Smile.png";
import doctor from "../../assets/doctor.png";
import about from "../../assets/about.png";
import activeIcon from "./icons/activeIcon";

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
      setActiveTab('home');
    }
  };

  return (
    <div className='home'>
      {activeTab === 'about' &&
        <div className='about-waves'>
          <img src={waves} alt="background" /> </div>}
      {activeTab === 'home' && <div className='eclipsehome1'></div>}
      {activeTab === 'home' && <div className='eclipsehome2'></div>}
      <div className={`upper-rectangle ${activeTab}`}>
        <div className='homeMenu'>
          <Tabs position='relative' variant='unstyled' onChange={handleTabChange}>
            <div style={{display:'flex',gap:'322px', alignItems:'center', justifyContent:'center'}}>
              <div className='logo' style={{marginTop: '0', height:'auto'}}>
                <img src={logo} alt="Smile Clinic" style={{ height: '97px', width: '150px' }} />
              </div>
              <TabList>
                <Tab onClick={() => setActiveTab('home')} >
                  Home
                  {activeTab === 'home' && <activeIcon />}
                </Tab>
                <Tab onClick={() => setActiveTab('about')}>
                  About Us
                  {activeTab === 'about' && <activeIcon />}
                </Tab>
                <Tab onClick={() => setActiveTab('contact')} >
                  Contact
                  {activeTab === 'contact' && <activeIcon />}
                </Tab>
                <Tab onClick={() => { navigate('/login') }}>
                  Log In
                  {activeTab === 'login' && <activeIcon />}
                </Tab>
              </TabList>
            </div>
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
                  <Card>
                    <CardBody>
                      <div className='card-title'>
                        <span>Smile</span>
                        <span> Confidence </span>
                        <span>Happiness</span>
                      </div>
                      <div className='card-text'>
                        <div className='location'>
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
                        <input type="email" name="email" />
                      </label>
                    </div>
                    <div className='formPhone'>
                      <label>
                        Phone:
                        <input type="tel" name="phone" />
                      </label>
                    </div>
                    <div className='formMessage' >
                      <label>
                        Message:
                        <input name="message" />
                      </label>
                    </div>
                    <div className='formSubmit'>
                      <button>Submit</button>
                    </div>
                  </form>
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