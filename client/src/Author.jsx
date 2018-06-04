import React, { Component } from 'react';
import './App.css';
import Poem from './Poem';


function Author(props) {
        console.log('this is props', props.poems);
        return (
          <div>
             {props.poems.map((poem, index) => {
              return <Poem key={index} poem={poem}/>
             })}
          </div>
        )
    }
export default Author;


// this.state = {
    //   author: '',
    //   title: '',
    //   lines: '',
    //   linecount: ''
    // };


  // componentDidMount() {
  //   // fetch('http://localhost:3001/poems')
  //   // fetch(`${BASE_URL}/poems`)
  //   // fetch('http://localhost:3001/poems/3')
  //   fetch('http://poetrydb.org/author/Alan+Seeger')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log('this is data:', data);
  //       // this.setState({
  //       // poems: data.poems
  //       // })
  //       this.setState({
  //         author: data.author,
  //         title: data.title,
  //         lines: data.lines,
  //         linecount: data.linecount
  //       });
  //     });
  // }

 // <li className="ListItem"> { props.title }  </li>
            // <li className="ListItem"> { props.lines }  </li>
            // <li className="ListItem"> { props.author }  </li>
            // <li className="ListItem"> { props.linecount }  </li>

    // return (
    //   <div className="SinglePoem">
    //     <div className="cursive">Single Poem</div>
    //     <div>{JSON.stringify(this.state.poems)}</div>
    //     <div>{this.state.title}</div>

    //     <div>{this.state.lines}</div>
    //     <div>Author: {this.state.author}</div>
    //     <div>Line Count: {this.state.linecount}</div>

    //   </div>
