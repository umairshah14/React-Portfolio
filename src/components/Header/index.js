import React from "react";
import { NavLink } from "react-router-dom";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import portfolio from "./portfolio.png"
import "./header.css"

function Header() {
  const logo = portfolio
  return (
    <MDBNavbar light bgColor="dark" >
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img
            src={logo}
            height="40"
 
            alt=""
            loading="lazy"
          />
        </MDBNavbarBrand>
        <ul className="nav nav-tabs">
          <li className="nav-item ">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active customActive" : "nav-link customNonActive"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="gallery"
              className={({ isActive }) =>
                isActive ? "nav-link active customActive" : "nav-link customNonActive"
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
