import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import Instagram from '../images/instagram_logo.png';
import twitter from '../images/twitter_logo.png';
import faceBook from '../images/facebook_logo.png';
import styled from 'styled-components'


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

  logos = () => {
    return (
      <Menu.Menu position='right'>
        <Link to='/'>
          <Image src={Instagram} size="mini" floated="right" circular alt="instagram logo"/> 
        </Link> 
          <span>Instagram</span> 
        <Link to='/'>
          <Image src={faceBook}  size="mini" floated="right" circular alt="Facebook logo"/> 
        </Link> 
          <span>Facebook</span>
        <Link to='/'>
          <Image src={twitter} size="mini" floated="right" circular alt="Twitter logo"/>
        </Link> 
          <span>Twitter</span> 
      </Menu.Menu> 
    )
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          {/* <Link to='/'>
            <Menu.Item name='home' />
          </Link> */}
          { this.logos() }
        </Menu>
      </div>
    );
  }
}

const SocialMedia = styled.img `
left: 890px;
top: -33px;
position: absolute;
height: 27px;
width: 33px;
z-index: 5;
display: block;
opacity: 1.0;
`

const mapStateToProps = state => {
  return { user: state.user };
};

// export default withRouter(connect(mapStateToProps)(NavBar));

export default NavBar; 
