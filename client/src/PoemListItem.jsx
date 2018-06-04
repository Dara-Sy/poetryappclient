import React, { Component } from 'react';
import './App.css';
import PoemLines from './PoemLines';


class PoemListItem extends Component {
    constructor(props){
    super(props);
    };

    render() {
        return (
          <div>
            <li className="ListItem">
              <div className="cursive1">

                <div>
                  { this.props.poems.title }
                </div>
                  <br/>
                <div>
                  {this.props.poems.lines.map((lines, index) => {
                    return <PoemLines key={index} lines={lines} />
                      })}
                </div>
                  <br/>
                <div>
                  By: { this.props.poems.author }
                </div>
                  <br/><br/><br/>
              </div>
            </li>
          </div>
        )
    }
}








export default PoemListItem;
