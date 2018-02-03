import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css';


class SignUp extends Component {
    render() {
        return(
            
        <div id="login-box">
        <div className="left">
            <h1>Sign up</h1>
            
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="password2" placeholder="Retype password" />
            
            <input type="submit" name="signup_submit" value="Sign me up" />
        </div>
        
        <div className="right">
            <span className="loginwith">Sign in with<br />social network</span>
            
            <button className="social-signin facebook">Log in with Facebook</button>
            <button className="social-signin github">Log in with Github</button>
            <button className="social-signin google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
        </div>
        )
    }

};


export default SignUp; 
