import React, { Component } from 'react';
import './App.css';
import AuthorListItem from './AuthorListItem';

class AuthorTheList extends Component {
  constructor(props){
    super(props);

    this.state = {
      authors: []
    };
  }

  componentDidMount() {
      fetch('http://poetrydb.org/author')
      .then(resp => resp.json())
      .then(data => {
        console.log('this is data:', data.authors);
        this.setState({
          authors: data.authors,
      })
    })
  }

  render() {
    return (
      <ul className="AuthorList">
      <h1 className="cursive">Authors</h1>
        {this.state.authors.map((author, index) => {
          return <AuthorListItem key={index} author={author} />
            })}
       </ul>
      )
  }

}


export default AuthorTheList;


