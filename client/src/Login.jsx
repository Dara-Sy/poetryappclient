import React from 'react';
import {Link} from 'react-router-dom';
// import TokenService from './TokenService';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }


  render(props) {
    return (
      <main className="Login">
          <div className="box">
          </div>
        <div className="logInContainer">
        <h2 className="cursive"> Welcome! Log in here: </h2>

                <div className="formf">
                  <p className="LoginPl">Username&nbsp;&nbsp;&nbsp;</p>

                  <input
                    className="LoginPl"
                    type="text"
                    placeholder="username"
                    ref="username"
                    name="username"
                    onInput={this.handleChange}
                  />
                </div>

                <div className="formf">
                  <p className="LoginPl">Password&nbsp;&nbsp;&nbsp;</p>

                  <input
                    className="LoginPl"
                    type="password"
                    placeholder="password"
                    ref="password"
                    name="password"
                    onInput={this.handleChange}
                  />
                </div>


            <button className="button" type="submit" value="Submit"><Link to='/profile'>Submit</Link></button>
            </div>
            <p className="cursive1">Not a Member? &nbsp;&nbsp;

            <Link to="/register" classNamw="navlinks">Sign Up Here! </Link>

            </p>


      </main>
    );
  }
}

 // <a href="/register" className="navlinks">Sign Up Here! </a>
