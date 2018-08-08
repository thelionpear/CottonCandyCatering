import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Divider } from 'semantic-ui-react';
// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { handleLogout } from '../reducers/user';
import CCCarousel from './CCCarousel'; 

class Home extends Component {

  render() {
    return (
      <div> 
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
          <Divider /> 
          <GraySections2>
            <CCCarousel/> 
          </GraySections2> 
          <Divider /> 
          <GraySections3> 
            <Review class="column"> 
            <Text>***This is where some fake reviews can go, probably in three columns***</Text> 
            </Review> 
            <Review class="column"> 
            <Text>***This is where some fake reviews can go, probably in three columns***</Text> 
            </Review> 
            <Review class="column"> 
            <Text>***This is where some fake reviews can go, probably in three columns***</Text> 
            </Review> 
          </GraySections3> 
          <Divider hidden/> 
          <GraySections4> 
            <TitleTextWhite>To Book Cotton Candy Catering for Your Event:</TitleTextWhite> 
            <TextWhite>
              Reach out to us by phone at: 555-555-5555
            </TextWhite> 
            <TextWhite>
              by email at: email@email.com 
            </TextWhite>
          </GraySections4> 
        </Container> 
      </div> 
    );
  }
}

const Review = styled.div`
border: 1px solid gray; 
margin: 5px; 
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
const TitleTextWhite = styled.h1 `
font-size: 25px; 
text-align: center; 
align-items: center;
justify-content: center;
color: white;  
font-family: clarendonlight;
`

const TextWhite = styled.h1 `
font-size: 20px; 
text-align: center; 
align-items: center;
justify-content: center;
color: white;  
font-family: clarendonlight;
`

const GraySections = styled.div `
padding-top: 20px;  
padding-left: 10px; 
padding-right: 10px; 
`

const GraySections2 = styled.div `
padding-top: 20px;  
padding-left: 10px; 
padding-right: 10px; 
display: flex; 
justify-content: center;  
`

const GraySections3 = styled.div `
padding-top: 20px;  
padding-left: 10px; 
padding-right: 10px; 
display: flex; 
justify-content: center;  
`
const GraySections4 = styled.div `
padding-top: 20px;  
padding-left: 10px; 
padding-right: 10px; 
justify-content: center; 
background-color: #6c6c6c; 
color: white; 
`

export default Home;
