import React from 'react';
import './Footer.css';

import Logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';
export default function Footer() {
  return <>

    <section id="footer" className="bg_light_w">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            <h2><img src={Logo} alt="" /></h2>
            <p className='foot_abot'>Raviweb provides free React Js, HTML, CSS, JavaScript tutorials and source code along with creative CSS Animations and hover Effects</p>

            <div className="social-btn">
              <ul>
                <li><NavLink to="" className="fb_color"><i className="fa fa-facebook"></i></NavLink></li>
                <li><NavLink to="" className="inked_color"><i className="fa fa-linkedin"></i></NavLink></li>
                <li><NavLink to="" className="twitter_color"><i className="fa fa-twitter"></i></NavLink></li>
                <li><NavLink to="" className="youtube_color"><i className="fa fa-youtube"></i></NavLink></li>
                <li><NavLink to="" className="google_plus"><i className="fa fa-google-plus"></i></NavLink></li>

              </ul>
            </div>

            <p>© 2022 - Ravi Web All Rights Reserved. </p>
          </div>
          <div className=" col-12 col-md-3">
            <h2>Quick Link</h2>
            <ul className="foot-list">
              <li><NavLink className="link_footer" to="/">Home</NavLink></li>
              <li><NavLink className="link_footer" to="/about">About</NavLink></li>
              <li><NavLink className="link_footer" to="/careers">Careers</NavLink></li>
              <li><NavLink className="link_footer" to="/service">Service</NavLink></li>
              <li><NavLink className="link_footer" to="/contact">Contact</NavLink></li>

            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h2>Follow Us!</h2>
            <ul className="address-widget">
              <li>
                <i className="fa fa-map"></i>
                <div className="desc">374 FA Tower, William S Blvd 2721, IL, USA</div>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                <div className="desc">
                  <NavLink to="tel:7219366223">(+91) - 7219366223</NavLink>
                </div>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <div className="desc">
                  <NavLink to="mailto:support@rstheme.com">inforavi7195@gamil.com</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </>

}
