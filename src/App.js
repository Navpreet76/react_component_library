import React, { Component } from 'react';
// import './App.css';
import { Button } from 'reactstrap';
import Button1 from './components/button1';
import Buttonoutline from './components/buttonoutline';
import LargeButton from './components/largebutton';
import SmallButton from './components/smallbutton';
import BlockLevelButton from './components/blocklevelbutton';
import Jumbotronc from './components/jumbotronc';
import ModalExample from './ModalExample';
import TextContent from './components/textcontent';
import Collapsecomp from './Collapsecomp';
import Alerts from './components/alerts';
import Carouselz from './Carouselz';
import CarouselzDark from './CarouselzDark';
import logo from './images/space1.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Alerts />
        <Collapsecomp />
        <br />
        <Carouselz />
        <br/>
        <CarouselzDark />
        <br />
        <Buttonoutline />
        <br />
        <br />
        <LargeButton />
        <br />
        <SmallButton />
        <br />
        <br />
        <BlockLevelButton />
        <br />
        <br />
        <Jumbotronc />
        <TextContent />
      </div>
    );
  }
}

export default App;
