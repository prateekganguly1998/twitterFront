import React from 'react';
import '../styles/footer.css'
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF , faGoogle,faGithub} from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF,faGoogle,faGithub); 
function Footer(props) {
    return (
        <div className="footer">
        <div className="footer-content">
      <div className="footer-section about">
          <h2 className="logo-text"><span>TWEEZER</span></h2>
          <h4>This is a working demo of our project</h4>
          
          <div className="contact">
              <span><FontAwesomeIcon icon={['fab', 'google']}/>&nbsp;aggarwal.rohan.me@gmail.com</span>
              <span><FontAwesomeIcon icon={['fab', 'google']}/>&nbsp; gangulyprateek0@gmail.com</span>
        </div>
       
      </div>
      <div className="footer-section links">
          <h2>Quick Links</h2>
          <br/>
          <ul>
              <NavLink to="/about-us" exact><li>About Us</li></NavLink>
              <NavLink to="/approach" exact><li>Approach</li></NavLink>
              <NavLink to="/case-studies" exact><li>Case Study</li></NavLink>
          </ul>
      </div>
      <div className="footer-section contact-form">
          <h2>Working Demo</h2>
          <a href="https://www.github.com/prateekganguly1998"><FontAwesomeIcon icon={['fab', 'github']}/>&nbsp;Dataset Github Page</a>
           <br/><br/>   
          <a href="https://github.com/aggrowal/terrorism-tweets-detect"><FontAwesomeIcon icon={['fab', 'github']}/>&nbsp;Learning Github Page</a>

      </div>
    </div>
    <div className="footer-bottom">
      &copy; TWEEZER&nbsp;I&nbsp;Designed By prateekganguly1998
    </div>
        </div>    );
}

export default Footer;