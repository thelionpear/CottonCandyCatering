import CC1 from '../images/cc1.jpg';
import CC2 from '../images/cc2.jpg';
import CC3 from '../images/cc3.jpg';
import CC4 from '../images/cc4.jpg';
import CC5 from '../images/cc5.jpg';
import CC6 from '../images/cc6.jpg';
import { render } from 'react-dom';
import React, { Component } from 'react';
import { Carousel, showArrows, onChange, onClickItem, onClickThumb, infiniteLoop } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
  
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
                  <img src={CC2} />
              </div>
              <div>
                  <img src={CC3} />
              </div>
              <div>
                  <img src={CC4} />
              </div>
              <div>
                  <img src={CC5} />
              </div>
              <div>
                  <img src={CC6} />
              </div>
          </Carousel>
      );
  }
};


<link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
    
// const Div = styled.div `
// text-align: center; 
// align-items: center;
// justify-content: center;
// padding-top: 10px; 
// padding-bottom: 10px; 
// width: auto;
// height: auto;
// max-width: 400px;
// max-height: 400px;
// overflow: hidden; 
// `

// const CarouselBox = styled.div `

// `

export default CCCarousel 