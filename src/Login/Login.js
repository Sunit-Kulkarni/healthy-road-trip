import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Col, ControlLabel, FormControl, Checkbox, Form, FormGroup, Button } from 'react-bootstrap';


class Login extends Component {
  render() {
    return (
      <Form horizontal id = "login-box">
        <FormGroup className="EmailSection" controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={3}>
            Email
          </Col>
          <Col sm={9}>
            <FormControl type="email" placeholder="Email" className="inputBar" />
          </Col>
        </FormGroup>

        <FormGroup className="PasswordSection" controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={3}>
            Password
          </Col>
          <Col sm={9}>
            <FormControl type="password" placeholder="Password" className="inputBar" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={3} sm={9}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={3} sm={9}>
            <Button type="submit" class = "button_1">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>




    );
  }
}




export default Login;