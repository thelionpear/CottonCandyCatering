import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import instaGram from '../images/instagram_logo.png';
import twitter from '../images/twitter_logo.png';
import faceBook from '../images/facebook_logo.png';
import styled from 'styled-components'
import { Divider, Menu, Image, Button } from 'semantic-ui-react';

class NavBar extends Component {

  //only render this on pages where they can shop 
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position='right'>
        <Link to='/register'>
          <Menu.Item name='Register' />
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' />
        </Link>
      </Menu.Menu>
    );
  }

  header = () => {
    return (
       <UpperSection> 
          <Title as='h1' textAlign='center'>Cotton Candy Catering</Title>
          <Logos> 
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <Image src={instaGram} size="mini" floated="right" circular alt="instagram logo"/> 
              </a> 
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <Image src={faceBook}  size="mini" floated="right" circular alt="Facebook logo"/> 
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"> 
                <Image src={twitter} size="mini" floated="right" circular alt="Twitter logo"/>
              </a> 
          </Logos> 
          <Button
            as={ Link }
            to={`/booknow`}
            >
            Book Now 
          </Button>
          <Divider /> 
        </UpperSection>
    )
  }
     

  render() {
    return (
      <div>
        {this.header()}
      </div>
    );
  }
}

const UpperSection = styled.div `
flex-direction: column; 
display: flex; 
color: white; 
background-color: gray; 
padding-top: 40px; 
`
const Title = styled.span `
font-size: 50px; 
text-align: center; 
`
const Logos = styled.span `
justify-content: flex-end; 
margin-right: 15px; 
`

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));