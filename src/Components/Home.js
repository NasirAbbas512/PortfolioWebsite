import React from 'react'
import "./Home.css"
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    FaPlay,
  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home_container'>
        <div className='home_left_content'>
            <div className='social_media_icons'>
                <FaFacebookF className='social_icon'/>
                <FaTwitter className='social_icon'/>
                <FaPinterest className='social_icon'/>
                <FaInstagram className='social_icon'/>
            </div>

            <div className='home_heading'>
                <h1>I am Nasir Lala</h1>
            </div>

            <div className='home_para'>
                <p>i,m Jonathan, professional web developer with long time
                     experience in this field​</p>
            </div>

            <div className='home_buttons'>
                <Link to="/services"> My Portfolio</Link>
                <FaPlay className='home_button_icon'/>
            </div>
        </div>

        <div className='home_right_content'>
                <img src='./images/man-01.png' alt='lala'></img>
        </div>
    </div>
  )
}

export default Home;