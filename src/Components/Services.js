import React from 'react'
import ServicesData from './ServicesData';
import './Services.css'

const Services = () => {
  return (
    <div className='services_container'>
        <div className='services_top_content'>
            <div className='services_heading'>
                <h1>My Services</h1>
            </div>

            <div className='services_para'>
                <p>Lorem Ipsum is simply dummy text of the printing <br/>typesetting
                    industry simply dummy</p>
            </div>
        </div>

        <div className='services_bottom_content'>
                {
                    ServicesData.map( (curElem)=>{
                        return(
                            <div className='services_box'>
                                <div className='boxes_icon'>
                                    <i>{curElem.servicesIcon}</i>
                                </div>

                                <div className='boxes_title'>
                                    <h1>{curElem.servicesTitle}</h1>
                                </div>

                                <div className='boxes_para'>
                                    <p>{curElem.servicesPara}</p>
                                </div>
                                
                            </div>
                        )
                    })
                }
        </div>
    </div>
  )
}

export default Services;