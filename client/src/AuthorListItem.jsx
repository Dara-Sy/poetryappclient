import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';


class AuthorListItem extends Component {
    constructor(props){
    super(props);
    };

    render() {
        return (
          <div>
            <li className="ListItem">
              <div className="cursive1">
                <Link to="/author">

                  { this.props.author }
                </Link>
              </div>
            </li>
          </div>
        )
    }
}

export default AuthorListItem;


// <li>{this.renderAuthors()}</li>
// <a href="/author">
