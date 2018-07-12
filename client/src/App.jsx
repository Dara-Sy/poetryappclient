import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Poem from './Poem';
import Author from './Author';
import AuthorListItem from './AuthorListItem';
import AuthorTheList from './AuthorTheList';
import PoemListItem from './PoemListItem';
import PoemList from './PoemList';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL_POEM = process.env.REACT_APP_BASE_URL_POEM;

class App extends Component {
  constructor(){
    super();

    this.state = {
      poems: [],
      authors: [],
      faves: [],
      author: '',
      title: '',
      lines: '',
      linecount: ''
    }

    this.toggleFave = this.toggleFave.bind(this);
  }

  // componentDidMount() {
  //   fetch(`${BASE_URL}/poems`)
  //     .then(res => res.json())
  //     .then(res => this.setState({
  //       poems: res.poems
  //     }))

componentDidMount() {
    fetch(`${BASE_URL}/poems`)
      .then((data) => data.json())
      .then((p) => {
        this.setState({
        poems: p.poems
  })
 })
      .catch((err) => console.log(err))
}


toggleFave(poem) {
  let faves = this.state.faves.slice();
  let poemIndex = faves.indexOf(poem);
  if(poemIndex > -1) {
    faves.splife(poemIndex, 1);
  } else {
    faves.push(poem);
  }
  this.setState({
    faves: faves
  });
}



  render() {
    return (
      <div className="App">
        <header>
            <h1>Poetry Book</h1>

            <Link to="/" className="navlinks">Home</Link>
            <Link to="/login" className="navlinks">Login</Link>
            <Link to="/authors" className="navlinks">Authors</Link>
            <Link to="/profile" className="navlinks">Write Your Poem</Link>


        </header>

        <div>{JSON.stringify(this.state.poems)}</div>


        <Switch>

          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/profile" component={Profile}/>
          <Route
            render={() => (<AuthorTheList authors={this.state.authors} />)}
            path="/authors"
          />

          <Route
            render={() => (<PoemList poems={this.state.poems} />)}
            path="/author"
          />

          <Route
            render={() => (
              <Author
                poems = {this.state.poems}
                title={this.state.title}
                lines={this.state.lines}
                author={this.state.author}
                linecount={this.state.linecount} />)}
                path="/author"
          />
          <Route
            render={() => (
              <Poem
                title={this.state.title}
                lines={this.state.lines}
                author={this.state.author}
                linecount={this.state.linecount} />)}
                path="/poems/:poemid"
          />
          <Route path="/" component={Home}/>

        </Switch>

        <div className="Footer">
            <h4> © Made by Dara Sy</h4>
        </div>
      </div>

    );
  }
}

export default App;

// {/* <Route path="/authors" component={AuthorList}/>*/}

 // <a className="navlinks" href="/:userid/faves"> Profile </a>
 // <a className="navlinks" href="/poems/:poemid"> Poem </a>



// <div>{BASE_URL}</div>
