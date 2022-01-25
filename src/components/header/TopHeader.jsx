import React from 'react';
import './TopHeader.css';
export default function TopHeader() {
  return <>

    <section className="top-heading">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="top_left">
              <ul>
                <li> <a href="#"> <i className="fa fa-phone"></i> +91-9760221621</a></li>
                <li><a href="#"> <i className="fa fa-envelope"></i>raviweb@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="top_right">
              <ul className="social_icon">
                <li className="fac_book"><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li className="you-tub"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                <li className="you-tub"><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li className="inst-g"><a href="#"><i className="fa fa-instagram"></i></a></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
