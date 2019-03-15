import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
      return (
        <div>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              {/* <h1 className="display-4">ABOUT</h1> */}
              <div className="container">
              <a className="navbar-brand" href="/">
                  <img src="https://lh3.googleusercontent.com/Bq0xojkZjsSdLRp8gpHHEBQvAkWquXKEdhAVUSCfqK-zA2dXjS7IRkEIAIK8aIPKaCtA2m9EB_ZWKfUIcMfoT7I5_YD7yvHtYSv1-pWZ-3a4Q_c2ow0dXGHOfHmNPPDYJxBJXNSDAg=w2400" alt="Clark" />
                </a>
              </div>
            </div>
          </div>
        </div>

      );
}
}
export default About;