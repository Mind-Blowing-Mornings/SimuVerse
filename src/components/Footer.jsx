import React from 'react'
import PlaceIcon from '@mui/icons-material/Place'
import CallIcon from '@mui/icons-material/Call'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

import './footer.css'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='section'>
          <div className='content'>
            <h3 className='head'>SimuVerse</h3>
            <p>
              SimuVerse is all about making users order their desired clothes
              and reduce return rates. Users also browse and try clothe of their
              choice.
            </p>
          </div>
          <div className='quick-link'>
            <ul>
              <li>
                <h4>Quick link</h4>
              </li>
              <li>
                <Link
                  to='/about'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/store'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  to='/login'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to='/signup'
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
          <div className='address'>
            <ul>
              <li>
                <h4>Get in touch with us</h4>
              </li>
              <li>
                <PlaceIcon />
                City,State,Pin code.
              </li>
              <li>
                <CallIcon />
                +91 0123456789
              </li>
              <li>
                <MailOutlineIcon />
                Email@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className='follow-us'>
          <h4>Follow us</h4>
          <div className='img'>
            <FontAwesomeIcon icon={faLinkedin} className='img' />
            <FontAwesomeIcon icon={faFacebookF} className='img' />
            <FontAwesomeIcon icon={faInstagram} className='img' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
