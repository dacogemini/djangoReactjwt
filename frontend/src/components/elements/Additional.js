import React, { Component } from 'react';
import './Additional.css';

class Additional extends Component {
    render() {
      return (
        <ul className="list-group loc">
        <li className="list-group-item other-head">OTHER CATEGORIES</li>
        <li className="list-group-item">CAMERA CABLE</li>
        <li className="list-group-item">AUDIO/VIDEO COMBO</li>
        <li className="list-group-item">NETWORK</li>
        <li className="list-group-item">LIGHTING/CONTROL</li>
        <li className="list-group-item">FIBER OPTIC</li>
        </ul>

      );
    }
  }
export default Additional;