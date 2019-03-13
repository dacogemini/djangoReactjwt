import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    render() {
      return (
        <form>
              {/* <div className="reg">
              <a className="img" href="# ">
            <img src="https://lh3.googleusercontent.com/XpeR0z47JL_iXhl1bi0ql5MqE-8n6Yx4hhOWtesHuvOtweKgPH6j30eQ6pECEFdmDt6wGMj-rcUNWhj8uITI45ZwWNc2ic4F-axP9Md7hXuM5X8V9SxJY6OUeeyZDxyTuXyLWwQNbQ=s225-p-k" width="100" height="100" alt="Register" />
          </a>
          </div> */}
          <center>
          <div className="alert alert-primary" role="alert">
          <center><h1>REGISTER</h1></center>
          </div>
          </center>
          <div className="form-group"> {/* Name field */}
            <label className="control-label " htmlFor="name">Name</label>
            <input className="form-control" id="name" name="name" type="text" />
        </div>
        <div className="form-group"> {/* Email field */}
            <label className="control-label requiredField" htmlFor="email">Email<span className="asteriskField">*</span></label>
            <input className="form-control" id="email" name="email" type="text" />
        </div>
        <div className="form-group"> {/* Subject field */}
            <label className="control-label " htmlFor="subject">Subject</label>
            <input className="form-control" id="subject" name="subject" type="text" />
        </div>
        <div className="form-group"> {/* Message field */}
            <label className="control-label " htmlFor="message">Message</label>
            <textarea className="form-control" cols={40} id="message" name="message" rows={10} defaultValue={""} />
        </div>
        <div className="form-group">
            <button className="btn btn-primary " name="submit" type="submit">Submit</button>
        </div>
        </form>

    );
}
}
export default Register;