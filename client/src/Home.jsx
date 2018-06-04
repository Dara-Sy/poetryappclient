import React, { Component } from 'react';
import './App.css';
import AuthorListItem from './AuthorListItem';


function Home(props) {
    return (
      <div className="AuthorList">
      <p className="cursive">Welcome to the Poetry Book!</p>
      <p>This is where poetry, stories, and dreams come to life.</p>
      <p>This app uses a third party API:</p>
        <a className="cursive1" href="http://poetrydb.org/index.html">PoetryDB</a>
      <p> To bring these beautiful poems to you! </p>

       </div>
      )}


export default Home;
