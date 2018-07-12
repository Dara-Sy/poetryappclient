import React, { Component } from 'react';
import './App.css';


class ShowPoem extends Component {
    constructor(props){
    super(props);
    };

    render() {
        return (
          <div>
            <ul className="AuthorList">
              <div className="cursive1">

                  { this.props.title }
              </div>
              <div className="cursive1">
                  Written By: { this.props.author }
              </div>
              <div className="cursive1">
                  { this.props.lines }
              </div>
              <div className="cursive1">
                  { this.props.poemid }
              </div>
            </ul>
          </div>
        )
    }
}

export default ShowPoem;
