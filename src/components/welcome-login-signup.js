import React, {Component} from 'react'

/**
 * User login/ (sign up — option)
 * This component is designed for the welcome page
 * (on a user-based app) 
 */

 //module.js:545 after pushing to git..
let main_test = () =>{
    console.log("main_test")
}

export class SignUp extends Component{
    render(){
        return(
            <div>
                <input placeholder="username" type="text"/><br/>
                <input placeholder="password"type="password"/> <br/>   
                <input type="submit" value="Sign Up"/>
            </div>
        );
    }
}

class WelcomeLogin extends Component{
    render(){
        return(
            <div>
                <input placeholder="username" type="text"/><br/>
                <input placeholder="password"type="password"/> <br/>   
                <button type="submit" onClick={main_test} value="Login">Login</button> 
                <a href="#">Forgot password?</a>
            </div>
        );
    }
}

export default WelcomeLogin;