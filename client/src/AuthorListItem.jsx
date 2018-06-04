import React, { Component } from 'react';
import './App.css';


class AuthorListItem extends Component {
    constructor(props){
    super(props);
    };

    render() {
        return (
          <div>
            <li className="ListItem">
              <div className="cursive1">
                <a href="/author">
                  { this.props.author }
                </a>
              </div>
            </li>
          </div>
        )
    }
}

export default AuthorListItem;

// <li>{this.renderAuthors()}</li>
