import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Button1 from './components/button1';
import Buttonoutline from './components/buttonoutline';
import LargeButton from './components/largebutton';
import Alerts from './components/alerts';
import TextContent from './components/textcontent';
import Form1 from './Form1';

class Test extends Component {
  render() {
    return (
      <div className="Test">
        <TextContent />
        <Form1 />

      </div>
    );
  }
}

export default Test;