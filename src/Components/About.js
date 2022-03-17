import React, { useState } from 'react'
import "./About.css";

const About = () => {
  const [aboutDetail]=useState([
    { id: 1, title: "Name:", text: "Jonathan Doe" },
    { id: 2, title: "Email:", text: "example@domain.com" },
    { id: 3, title: "Phone:", text: "+1 023 454 345" },
    { id: 4, title: "Linkedin:", text: "Jonathan_123" }
  ])
  return (
    <div className='about_container'>
      <div className='about_content_top'>
          <div className='about_heading'>
              <h1>About Me</h1>
          </div>

          <div className='about_para'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text</p>
          </div>
      </div>

      <div className='about_content_bottom'>
        <div className='about_left'>
            <img src='./images/me-01-alt.png' alt='lala'></img>
        </div>

        <div className='about_right'>
          <div className='hi_there'>
            <h1>Hi There</h1>
          </div>

          <div className='second_para'>
            <p>In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui
                at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id
                efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
          </div>

          <div className='second_para'>
            <p> nunc id efficitur sagittis, urna est ultricies eros, ac porta
                sem turpis porta sem turpis quis leo. Nulla in feugiat elit</p>
          </div>

          <div className='about_detail'>
            {
              aboutDetail.map( (curElem) =>{
                return(
                  <div className='about_detail_content'>
                      <h1 >{curElem.title}</h1>
                      <h2>{curElem.text}</h2>
                  </div>
                )
              })
            }
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;