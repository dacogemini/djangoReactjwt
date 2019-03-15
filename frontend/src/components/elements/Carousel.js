import React, { Component } from 'react';
import './Carousel.css';

class Caro extends Component {
    render() {
      return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="w-30 ml-auto mr-auto" src="http://www.clarkwire.com/images/562x260Cable.png" alt="First slide" />
            </div>
            <div className="carousel-item">
            <img className="w-30 ml-auto mr-auto" src="http://www.clarkwire.com/images/562x260DT12.png" alt="Second slide" />
            </div>
            <div className="carousel-item">
            <img className="w-30 ml-auto mr-auto mw=10" src="http://www.clarkwire.com/images/562x260OC.png" alt="Third slide" />
            </div>
        </div>
        </div>
      );
    }
  }
export default Caro;