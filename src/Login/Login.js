import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Col, ControlLabel, FormControl, Checkbox, Form, FormGroup, Button } from 'react-bootstrap';


class Login extends Component {
  render() {
    return (
      <Form horizontal id = "login-box">
        <FormGroup controlId="formHorizontalEmail" >
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" className="inputBar" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" className="inputBar" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>




    );
  }
}




export default Login;