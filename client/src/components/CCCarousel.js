import CC2 from '../images/cc2.jpg';
import CC3 from '../images/cc3.jpg';
import CC4 from '../images/cc4.jpg';
import CC5 from '../images/cc5.jpg';
import CC6 from '../images/cc6.jpg';
import React, { Component } from 'react';
import { Carousel, onChange, onClickItem, onClickThumb, infiniteLoop } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
  
class CCCarousel extends Component {
  render() {
      return (
          <Carousel 
            showArrows={true} 
            onChange={onChange} 
            onClickItem={onClickItem} 
            onClickThumb={onClickThumb}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            width={"500px"}
          >
              <div>
                  <img src={CC2} alt="cotton candy being made"/>
              </div>
              <div>
                  <img src={CC3} alt="large colorful cotton candy"/>
              </div>
              <div>
                  <img src={CC4} alt="small packages of cotton candy"/>
              </div>
              <div>
                  <img src={CC5} alt="freshly made cotton candy"/>
              </div>
              <div>
                  <img src={CC6} alt="kids eating cotton candy"/>
              </div>
          </Carousel>
      );
  }
};

<link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

export default CCCarousel 