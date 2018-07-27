import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Divider, Header, Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import Instagram from '../images/instagram_logo.png';
import twitter from '../images/twitter_logo.png';
import faceBook from '../images/facebook_logo.png';

class Home extends Component {


  

  render() {
    return (
      <div> 
        <UpperSection> 
          <Title as='h1' textAlign='center'>Cotton Candy Catering</Title>
          <Logos> 
              <Image src={Instagram} size="mini" floated="right" circular alt="instagram logo"/> 
              <span>Instagram</span> 
              <Image src={faceBook}  size="mini" floated="right" circular alt="Facebook logo"/> 
              <span>Facebook</span>
              <Image src={twitter} size="mini" floated="right" circular alt="Twitter logo"/>
              <span>Twitter</span> 
          </Logos> 
        </UpperSection> 
        <Divider /> 
        <Container> 
          <GraySections> 
            <TitleText>A One-of-a-Kind Experience</TitleText> 
            <Text>
              Specializing in unique, original flavors and specialty coloring, 
              Cotton Candy Catering brings fun to any event. 
              Book us for your parties, meetings, or other gatherings, 
              and your guests are sure to remember the event with fond memories! 
            </Text> 
          </GraySections> 
          <GraySections> 
            <Text> ***This is where the Carousel of images will go*** </Text> 
          </GraySections> 
          <GraySections> 
            <Text>***This is where some fake reviews can go***</Text> 
          </GraySections> 
          <GraySections> 
            <TitleText>To Book Cotton Candy Catering for Your Event:</TitleText> 
            <Text>
              Reach out to us by phone at: 555-555-555
            </Text> 
            <Text>
              by email at: email@email.com 
            </Text>
          </GraySections> 
        </Container> 
      </div> 
    );
  }
}

const UpperSection = styled.div `
margin-top: 40px; 
flex-direction: column; 
display: flex; 
`

const Logos = styled.div `
justify-content: flex-end; 
`

const TitleText = styled.h1 `
font-size: 25px; 
text-align: center; 
align-items: center;
justify-content: center;
color: #555; 
font-family: clarendonlight;
`

const Text = styled.h1 `
font-size: 20px; 
text-align: center; 
align-items: center;
justify-content: center;
color: #6c6c6c; 
font-family: clarendonlight;
`

const Title = styled.div `
font-size: 50px; 
text-align: center; 
`
const GraySections = styled.div `
padding-top: 20px;  
padding-left: 10px; 
padding-right: 10px; 
`

export default Home;
