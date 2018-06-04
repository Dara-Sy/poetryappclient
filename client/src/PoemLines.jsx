import React, { Component } from 'react';
import './App.css';


class PoemLines extends Component {
    constructor(props){
    super(props);
    };

    render() {
        return (
          <div>
            <li className="ListItem">
              <div className="cursive1">
                  { this.props.lines }
              </div>
            </li>
          </div>
        )
    }
}

export default PoemLines;
