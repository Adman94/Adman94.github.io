import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "Adeeb Rahman",
      headerLinks: [
        {title: 'Home', path: '/'},
        {subTitle: 'About', path: '/about'},
        {text: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Welcome Everyone!',
        subTitle: 'Love to learn and teach',
        text: 'Some projects I"m working on'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s get coffee!!'
      }
    }
  }
  render() {
    return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <NavLink style={{color: 'inherit', textDecoration: 'inherit'}} className="nav-Link p-2" to="/">Adeeb Rahman</NavLink>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <NavLink style={{color: 'inherit', textDecoration: 'inherit'}} className="nav-Link p-2" to="/">Home</NavLink>
              <NavLink style={{color: 'inherit', textDecoration: 'inherit'}} className="nav-Link p-2" to="/about">About</NavLink>
              <NavLink style={{color: 'inherit', textDecoration: 'inherit'}} className="nav-Link p-2" to="/contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/portfolio" exact render={() => 
          <HomePage 
            title={this.state.home.title}
            subTitle={this.state.home.subTitle}
            text={this.state.home.text}
          />} />
        <Route path="/" exact render={() => 
          <HomePage 
            title={this.state.home.title}
            subTitle={this.state.home.subTitle}
            text={this.state.home.text}
          />} />
          <Route path="/about" exact render={() =>
          <AboutPage 
            title={this.state.about.title}
            subTitle={this.state.about.subTitle}
            text={this.state.about.text}
          />} />
          <Route path="/contact" exact render={() =>
          <ContactPage 
            env={this.props.env}
            title={this.state.contact.title}
            subTitle={this.state.contact.subTitle}
            text={this.state.contact.text}
          />} />

        <Footer />
      </Container>
    </Router>
  );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;
