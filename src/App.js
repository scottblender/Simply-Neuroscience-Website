import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";

export default function App() {
  return (
    <div className="App">
      <div>
        <header
          role="banner"
          class="NavMain-StyledNavbar-module--cls2--2pVZv NavMain-StyledNavbar-module--cls1--3GekH navbar navbar-expand navbar-dark"
        >
          <Navbar>
            <Navbar.Brand href="#home">
              <a href="/" class="navbar-brand">
                <img
                  alt=""
                  src="ICON.png"
                  width="70"
                  height="70"
                  className="d-inline-block align-top"
                />
              </a>
            </Navbar.Brand>
            <div class="d-md-flex navbar-nav" id="top" role="navigation">
              <a
                href="/App.js"
                data-rb-event-key=""
                class="NavMain-StyledNavLink-module--cls2--1iTIQ NavMain-StyledNavLink-module--cls1--3NJV5 nav-link active"
              >
                {" "}
                Home{" "}
              </a>
              <a
                href="/About.js"
                data-rb-event-key=""
                class="NavMain-StyledNavLink-module--cls2--1iTIQ NavMain-StyledNavLink-module--cls1--3NJV5 nav-link"
              >
                {" "}
                About Us
              </a>
              <a
                href="/Partnerships.js"
                data-rb-event-key=""
                class="NavMain-StyledNavLink-module--cls2--1iTIQ NavMain-StyledNavLink-module--cls1--3NJV5 nav-link"
              >
                {" "}
                Current Partnerships
              </a>
            </div>
          </Navbar>
        </header>
      </div>
    </div>
  );
}
