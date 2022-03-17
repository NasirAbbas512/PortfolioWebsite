import React from 'react'
import "./Blog.css";
import BlogData from './BlogData';
import {BiUser} from "react-icons/bi";
import {BsFillCalendarDateFill} from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const Blog = () => {
  return (
    <div className='blog_container'>
      <div className='blog_heading'>
            <h1>Latest Blog</h1>
      </div>

      <div className='blog_content'>
        <div className='blog_left'>
          {
            BlogData.map( (curElem) => {
              return(
                  <div className='blog_left_content'>
                      <div className='blog_img'>
                        <img src={curElem.blogImg}  alt=""></img>
                      </div>

                      <div className='blog_info'>
                        <div className='user_info'>
                          <BiUser/>
                          <span>Admin</span>
                          <BsFillCalendarDateFill/>
                          <h3>{curElem.date}</h3>
                        </div>

                        <h2>{curElem.blog_text}</h2>

                        <p>{curElem.blog_para}</p>
                      </div>
                  </div>
              )
            })
          }
        </div>

        <div className='blog_right'>
          <div className='right_content'>
                 <h1>Nasir Lala</h1>
                 <div>
                    <img className='images' src='./images/man-01.png' alt='lala'></img>
                  </div>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                  <div>
                    <FaFacebookF className='social_icon'/>
                    <FaTwitter className='social_icon'/>
                    <FaPinterest className='social_icon'/>
                    <FaInstagram className='social_icon'/>
                  </div>
          </div>

          <div className='right_content'>
            <h1>Recent Posts</h1>
            <div className='recent_post_content'>
              {
                BlogData.map( (data) => {
                  return(
                    <div className='pos_data'>
                        <img src={data.blogImg} alt=""></img>
                        <div className='post_info'>
                            <h4>{data.blog_text}</h4>
                            <p>{data.date}</p>
                        </div>
                    </div>
                  )
                })
                
              }
            </div>
          </div>

          <div className='right_content'>
          <h1>Nasir Lala</h1>
                 <div>
                    <img className='images' src='./images/man-01.png' alt='lala'></img>
                  </div>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
                  <div>
                    <FaFacebookF className='social_icon'/>
                    <FaTwitter className='social_icon'/>
                    <FaPinterest className='social_icon'/>
                    <FaInstagram className='social_icon'/>
                  </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;