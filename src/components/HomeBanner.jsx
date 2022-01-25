import React from 'react';
import { NavLink } from 'react-router-dom';
import Bannerimg from '../images/banner-1.png';

export default function HomeBanner() {
  return <>
    <section className='bannersection'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='baner_left'>
              <h1 className='title'>We Are Digital Agency {'&'} Technology Solution </h1>
              <p className="desc">
                We are leading technology solutions providing company all over the world doing over 40 years.
              </p>

              <NavLink to='/about' className='home_get-start'><span>Get Start</span> </NavLink>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='bann_img'>
              <img src={Bannerimg} alt="banner" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
    
}
