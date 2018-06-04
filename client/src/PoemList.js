import React, { Component } from 'react';
import './App.css';
import PoemListItem from './PoemListItem';

class PoemList extends Component {
  constructor(props){
    super(props);

    this.state = {
      author: [],
      poems: []
    };
  }

  componentDidMount() {
    fetch('http://poetrydb.org/author/Ann+Taylor')
    // fetch(`http://poetrydb.org/author/${this.state.author}`)
      .then(resp => resp.json())
      .then((data) => {
        console.log('this is data:', data);
        this.setState({
          poems: data
        })
      })
    }



  render() {
    return (
      <ul className="AuthorList">
        <h1 className="cursive">Poems</h1>
            {this.state.poems ?
              this.state.poems.map((poems, index) => {
                  return <PoemListItem key={index} poems={poems} />})
                :
                null
              }
       </ul>
      )
    }

  }





export default PoemList;


