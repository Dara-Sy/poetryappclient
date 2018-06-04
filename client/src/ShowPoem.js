import React, { Component } from 'react';
import './App.css';


class ShowPoem extends Component {
    constructor(props){
    super(props);
    };

    render() {
        return (
          <div>
            <li className="AuthorList">
              <div className="cursive1">

                  { this.props.title }
              </div>
              <div className="cursive1">
                  { this.props.author }
              </div>
              <div className="cursive1">
                  { this.props.lines }
              </div>
              <div className="cursive1">
                  { this.props.poemid }
              </div>
            </li>
          </div>
        )
    }
}

export default ShowPoem;
