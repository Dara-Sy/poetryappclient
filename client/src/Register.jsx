import React from 'react';
import {Link} from 'react-router-dom';
// import TokenService from './TokenService';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      username: '',
      password: '',
      password2: '',
    }
  //   this.handleChange = this.handleChange.bind(this);
  //   this.submitReg = this.submitReg.bind(this);
  // }

  // handleChange() {
  //   this.setState({
  //     username: this.refs.username.value,
  //     password: this.refs.password.value,
  //   })
  }

  // submitReg(e) {
  //   e.preventDefault();
  //   let theData = this.state;
  //   fetch(`/login`, {
  //     body: JSON.stringify(theData),
  //     cache: 'no-cache',
  //     credentials: 'same-origin',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     method: 'POST',
  //     mode: 'cors',
  //     redirect: 'follow',
  //     referrer: 'no-referrer',
  //   })
  //   .then(response => response.json())
  //     .then(token => {
  //       TokenService.save(token)
  //       console.log('we have token', token)
  //       fetch('/token', {
  //         body: JSON.stringify(token),
  //         headers: {
  //           'content-type': 'application/json'
  //         },
  //         method: 'POST'
  //       })
  //       .then(response => response.json())
  //         .then(data => {
  //           console.log('thisisreturnedtoken', data)
  //           window.location.replace(`/${data.user_id}/faves`)
  //         })
  //     })
  // }

  render(props) {
    return (
      <main className="Login">
          <div className="box">
          </div>
        <div className="logInContainer">
        <h2 className="cursive"> Register </h2>

                <div className="formf">
                  <p className="LoginPl">First Name&nbsp;&nbsp;&nbsp;</p>

                  <input
                    className="LoginPl"
                    type="text"
                    placeholder="first name"
                    ref="username"
                    name="username"
                    onInput={this.handleChange}
                  />
                </div>

                <div className="formf">
                  <p className="LoginPl">Last Name&nbsp;&nbsp;&nbsp;</p>

                  <input
                    className="LoginPl"
                    type="text"
                    placeholder="last name"
                    ref="username"
                    name="username"
                    onInput={this.handleChange}
                  />
                </div>

                <div className="formf">
                  <p className="LoginPl">Username&nbsp;&nbsp;&nbsp;&nbsp;</p>

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
                  <p className="LoginPl">Password&nbsp;&nbsp;&nbsp;&nbsp;</p>

                  <input
                    className="LoginPl"
                    type="password"
                    placeholder="password"
                    ref="password"
                    name="password"
                    onInput={this.handleChange}
                  />
                </div>

                <div className="formf">
                  <p className="LoginPl">Confirm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

                  <input
                    className="LoginPl"
                    type="password"
                    placeholder="confirm password"
                    ref="password"
                    name="password"
                    onInput={this.handleChange}
                  />
                </div>

            <div className="logInButton">
              <button className="button" type="submit" value="Submit"><Link to='/profile'>Submit</Link></button>
            </div>
            <p className="cursive1">Already a Member? &nbsp;&nbsp;
            <Link to="/login" className="navLinks">Log In Here! </Link>
            </p>
          </div>




      </main>
    );
  }
}
