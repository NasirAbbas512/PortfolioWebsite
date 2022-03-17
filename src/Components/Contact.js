import React, { useState } from 'react'
import ContactData from './ContactData';
import './Contact.css'

const Contact = () => {
  const [userData,setUserData]=useState(
    {
      fullname:"",
      email:"",
      subject:"",
      comment:""
    }
  );

  const {fullname, email, subject, comment}=userData;
  const postUserData = (event) =>
  {

    setUserData({...userData, [event.target.name] : event.target.value})
  };

  const submitData = async (event) =>
    {
      event.preventDefault();
      const {fullname,email,subject,comment}=userData;

      if(fullname && email && subject && comment)
      {
        const res= await fetch("https://v1.nocodeapi.com/nasirabbas/google_sheets/HwAEipbLTWlVkbWf?tabId=Sheet1",
          {
            method : "POST",
            headers:
            {
              "Content-Type" : "application/json",
            },
            body:JSON.stringify
            ([[
              fullname,
              email,
              subject,
              comment,
              new Date().toLocaleString()
            ]]),
          }
        );

        await res.json();

        if(res)
        {
          {
            setUserData(
              {
                fullname:"",
                email:"",
                subject:"",
                comment:""
              }
            )
          };
          alert("Data Stored in Google Sheet!")
        }
        else{
          alert("plz fill the data")
        }
      }
      else
      {
      alert("plz fill the data")
      }
    };
  return (
    <div className='about_container'>
      <div className='about_content_top'>
          <div className='about_heading'>
              <h1>Contact Me</h1>
          </div>

          <div className='about_para'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum standard dummy text</p>
          </div>
      </div>

      <div className='contact_bottom'>
          <div className='contact_content_top'>
            {
              ContactData.map( (curElem) =>{
                return(
                  <div className='contact_top_icon'>
                    <i>{curElem.contact_icon}</i>
                    <div className='contact_text'>
                        <h2>{curElem.contact_title}</h2>
                        <h3>{curElem.contact_text}</h3>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className='contact_bottom_two'>
            <form className='contact_form' method='POST' onSubmit={submitData}>
              <input type="text" placeholder='Your Name'
                name='fullname'
                onChange={postUserData}
                value={fullname}
              />

              <input type="email" placeholder='Your Email'
                name='email'
                onChange={postUserData}
                value={email}
              />

              <input className='subject' type="text" placeholder='Your Subject'
                name='subject'
                onChange={postUserData}
                value={subject}
              />

              <textarea className='subject text_area' rows="" cols="" placeholder='Your Comment'
               name='comment'
                onChange={postUserData}
                value={comment}
              />

              <div>
                  <button className='btn' type='submit'>Send Message</button>
              </div>
              
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact;