import React from 'react';
import './Header.css';


import Logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {

  return <>
    <section className="menu_section">
      <div className="nav-sticky header-b">
        <div className="container_section nav-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="left-nav">
                  <nav className="navbar navbar-expand-lg navbar-light px-0 p-lg-0">
                    <NavLink className="navbar-brand" to="/">
                      <img src={Logo} alt="" className="logo img-fluid" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="main_nav">
                      <div className="offcanvas-header">
                        <button type="button" className=" btn-close float-right"><i className="fa fa-times"></i> </button>
                        <h5 className="py-2 ">
                          <img src="assets/public/images/logo.png" alt="" />
                        </h5>
                      </div>
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <NavLink className="nav-link active " to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink className="nav-link " to="/careers">Careers</NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink className="nav-link  " to="/service">Service</NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink className="nav-link  " to="/contact">Contact</NavLink>
                        </li>

                      </ul>
                    </div>

                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>


}
