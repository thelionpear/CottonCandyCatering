import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class EmailForm extends Component {

  state = { contactMethod: '' }

  handleChange = (e) => {
    const { contactMethod, value } = e.target
    this.setState({ [contactMethod]: value })
  }

  render() {
    const { value } = this.state 

    return (
    <Container>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field> 
          <label>Prospective Event Date(s)</label> 
          <input placeholder='' /> 
        </Form.Field> 
        <Form.Group inline>
              <label>Best Form of Contact</label>
              <Form.Radio
                label='Text'
                value='text'
                checked={value === 'text'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Call'
                value='call'
                checked={value === 'text'}
                onChange={this.handleChange}
              />
              <Form.Radio
                label='Email'
                value='email'
                checked={value === 'email'}
                onChange={this.handleChange}
              />
        </Form.Group> 
        <Form.TextArea label='Additional Details' placeholder='What else do I need to know?' />
        <Form.Button type='submit'>Submit</Form.Button>
      </Form>
    </Container> 
    )
  }
}


export default EmailForm 