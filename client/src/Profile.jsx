import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import ShowPoem from './ShowPoem';
const BASE_URL = process.env.REACT_APP_BASE_URL;


class Profile extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    title: '',
    author: '',
    lines: '',
    poem_id: 0,
    showPoem: false
  }
  this.handleChange = this.handleChange.bind(this)
  this.submitPoem = this.submitPoem.bind(this)
  this.showForm = this.showForm.bind(this)
}

// showPoem() {
//   //
// }

handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value,
    poem_id: this.props.poem_id
  })
}


submitPoem(e, poem_id){
  e.preventDefault()
  this.setState({ showPoem: true })
  console.log('hitting submit')
  console.log(this.state);
  fetch(`${BASE_URL}/poems`, {
    method: 'POST',
    headers: ({"content-type": "application/json"}),
    body: JSON.stringify({
        "title": this.state.title,
        "author": this.state.author,
        "lines": this.state.lines,
        "poem_id": this.state.poem_id
    })
  })
    .then(() =>
    this.props.history.push('/profile')
)}

showForm() {
  return(
      <div className="AuthorList">
        <form onSubmit={this.submitPoem}>
          <label className="label">
            Add New Poem
            <br/>
            Title
            <br/>
            <input className="input" type="text" name= "title" onChange={this.handleChange} />
            <br/>
          </label>
        </form>
        <form onSubmit={this.submitPoem} type="text">
          <label className="label">
            Author
            <br/>
            <input className="input" type="text" name= "author" onChange={this.handleChange} />
          </label>
        </form>
        <form onSubmit={this.submitPoem}>
          <label className="label">
            Lines
            <br/>
            <textarea className="textarea" type="text" name= "lines" onChange={this.handleChange} />
          </label>
            <br/>
          <input className="button" type="submit" value="Submit" />
        </form>
        </div>
      )
  }


render() {
  if(this.state.showPoem){
    // return ({this.showPoem})
    return ( <ShowPoem
              title={this.state.title}
              author={this.state.author}
              lines={this.state.lines}

              /> )
      }
    return(
      <div>
        {this.showForm()}
      </div>
      )
  }
}


export default Profile;
