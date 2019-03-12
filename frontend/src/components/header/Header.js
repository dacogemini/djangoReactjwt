import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MediaQuery from 'react-responsive';

class Header extends Component {
    render() {
      return (
        <MediaQuery minWidth={1037}>
        {matches => {
          return matches
          ? <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4" id="nav">
          <div className="container">
          <a className="navbar-brand" href="# ">
            <img src="https://lh3.googleusercontent.com/Bq0xojkZjsSdLRp8gpHHEBQvAkWquXKEdhAVUSCfqK-zA2dXjS7IRkEIAIK8aIPKaCtA2m9EB_ZWKfUIcMfoT7I5_YD7yvHtYSv1-pWZ-3a4Q_c2ow0dXGHOfHmNPPDYJxBJXNSDAg=w2400" alt="Clark" />
          </a>
          </div>
          <div className="container-nav">
            <Link className="navbar-brand" to="/">
              {/* Clark Wire & Cable */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>
  
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/profiles">
                    {' '}
                    ABOUT
                  </Link>
                </li>
                 <li className="nav-item">

                  <Link className="nav-link" to="/catalog">
                    {' '}
                    <Card />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profiles">
                    {' '}
                    TECHNICAL
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profiles">
                    {' '}
                    CONTACT
                  </Link>
                </li>
              </ul>
              </div>
              <ul className="navbar-nav" id="nab">
              <div className="logo">
              <a className="logo" href="# ">
            <img src="https://lh3.googleusercontent.com/AaWEYz-N-NG-m5MyendhLNblUhe4edOZY9111-SVnSc81uH0Mj7LQr-HyRElqDAd_m1zcVlHXrtkg9cOTalS3n5QameRGjulDO8GgUWpn-0SOlqQtwEgfU-1n_8VfyLFMPV_0wAOXA=w2400" width="125" height="100" alt="Clark" />
          </a>
          </div>
              </ul>
            </div>
        </nav>
            :   <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
          <div className="container">
          <a className="navbar-brand" href="# ">
            <img src="https://lh3.googleusercontent.com/Bq0xojkZjsSdLRp8gpHHEBQvAkWquXKEdhAVUSCfqK-zA2dXjS7IRkEIAIK8aIPKaCtA2m9EB_ZWKfUIcMfoT7I5_YD7yvHtYSv1-pWZ-3a4Q_c2ow0dXGHOfHmNPPDYJxBJXNSDAg=w2400" alt="Clark" />
          </a>
          </div>
          <div className="container-nav">
            <Link className="navbar-brand" to="/">
              {/* Clark Wire & Cable */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>
            </div>
            </nav>
        }}
      </MediaQuery>


      );
    }
  }
  
  export default Header;