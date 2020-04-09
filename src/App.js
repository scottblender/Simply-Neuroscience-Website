import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";

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
                href="./About"
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
        <div>
          <Image src="Artboard 1.png" fluid />
        </div>
        <div>
          <>
            <div class="container">
              <h3>Mission Statement</h3>
              <p>
                Simply Neuroscience is an organization dedicated to developing
                students' interest in neuroscience and psychology, specifically
                through education, outreach, and awareness. We want to build a
                stronger bridge between neuroscience and psychology in high
                school and higher education while also increasing the impact of
                these fields on local, regional, national, and international
                levels. Our organization fosters a highly collaborative
                atmosphere among team members in hopes of providing a space for
                everyone to pursue their passion for learning about the brain;
                we welcome and highly encourage students with diverse and
                interdisciplinary interests. We aim to provide access to equal
                opportunities in neuroscience and psychology for every student
                regardless of their education, socioeconomic background, race,
                or gender identity. We provide information about neuroscience
                and psychology classes, online courses, guest speakers and
                professionals, and more. Additionally, our Research team matches
                students with internships and opportunities based on their
                interests. Moreover, our team is creating resources for high
                school students to study neuroscience and psychology and compete
                in neuroscience competitions. We are in the works of developing
                online educational workshops about getting involved in hands-on
                research as well as creating a curriculum on computational and
                statistical neuroscience as well, with an extension to AI/ML!
                Simply Neuroscience also hopes to help spread understanding and
                acceptance about mental health and neurological and
                psychological conditions and illnesses. We are in the works of
                creating guides about mental health along with illnesses that
                are not very well known to provide students with the knowledge
                and resources to promote awareness in their communities.
                Additionally, we are working to get legislation regarding mental
                illness passed by Congress. Furthermore, we are putting together
                a resource bank of undergraduate students, graduate students,
                and professionals involved in neuroscience and psychology as a
                part of our mentorship network. We hope that these individuals
                can serve as a point of contact for high school students
                interested in pursuing neuroscience or psychology in college and
                beyond and can provide guidance along the way. Last but not
                least, we are currently organizing neuroscience and psychology
                conferences/conventions for high school students. Currently, we
                are organizing a virtual/online conference for the summer of
                2020, and we hope to introduce high school students to the
                wonders of the brain and develop their interests. Overall, Our
                goal is to guide and support students in every step of their
                neuroscience and psychology journey!
              </p>
            </div>
            <div class="container">
              <div class="row">
                <div class="index-FeatureCard-module--cls2--2Vakg index-FeatureCard-module--cls1--JLkTf px-4 py-3 col-md-4">
                  <h2>Rebuilt with React</h2>
                  <p>
                    React-Bootstrap replaces the Bootstrap JavaScript. Each
                    component has been built from scratch as a true React
                    component, without unneeded dependencies like jQuery.
                  </p>
                  <p>
                    As one of the oldest React libraries, React-Bootstrap has
                    evolved and grown alongside React, making it an excellent
                    choice as your UI foundation.
                  </p>
                </div>
                <div class="index-FeatureCard-module--cls2--2Vakg index-FeatureCard-module--cls1--JLkTf px-4 py-3 col-md-4">
                  <h2>Bootstrap at its core</h2>
                  <p>
                    Built with compatibility in mind, we embrace our bootstrap
                    core and strive to be compatible with the world's largest UI
                    ecosystem.
                  </p>
                  <p>
                    By relying entirely on the Bootstrap stylesheet,
                    React-Bootstrap just works with the thousands of Bootstrap
                    themes you already love.
                  </p>
                  <p />
                </div>
                <div class="index-FeatureCard-module--cls2--2Vakg index-FeatureCard-module--cls1--JLkTf px-4 py-3 col-md-4">
                  <h2>Accessible by default</h2>
                  <p>
                    The React component model gives us more control over form
                    and function of each component.
                  </p>
                  <p>
                    Each component is implemented with accessibility in mind.
                    The result is a set of accessible-by-default components,
                    over what is possible from plain Bootstrap.
                  </p>
                </div>
              </div>
            </div>
            <Media>
              <img
                width={256}
                height={256}
                className="align-self-start mr-3"
                src="Chinmayi profile picture.jpg"
                alt="Generic placeholder"
                fluid
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>

                <p>
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                  vel eu leo. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
              </Media.Body>
            </Media>

            <Media>
              <img
                width={256}
                height={256}
                className="align-self-center mr-3"
                src="parin shaik profile picture.png"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>

                <p>
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                  vel eu leo. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
              </Media.Body>
            </Media>

            <Media>
              <img
                width={256}
                height={256}
                className="align-self-end mr-3"
                src="Aravind Krishnan Profile Picture.jpg"
                alt="Generic placeholder"
              />
              <Media.Body>
                <h5>Media Heading</h5>
                <p>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                </p>

                <p className="mb-0">
                  Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                  vel eu leo. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </p>
              </Media.Body>
            </Media>
          </>
        </div>
      </div>
    </div>
  );
}
