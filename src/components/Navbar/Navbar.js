import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import classes from './Navbar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const ExportedNavbar = props => {
  return ( 
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand><Link to="/">Smart Talking Gestures</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div className={classes.navLink}>
              <Link to="/sign-to-speech" className={classes.whiteText}> Signs to Speech </Link>
            </div>
            <div className={classes.navLink}>
              <Link to="/speech-to-sign" className={classes.whiteText}> Speech to Signs </Link>
            </div>
            <div className={classes.navLink}>
              <Link to="/custom-signs" className={classes.whiteText}> Custom Signs </Link>
            </div>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(ExportedNavbar);