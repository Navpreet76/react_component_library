import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './Test';
import App1 from './App1';
import Navbar from './Navbarz';
import Jumbotron from './components/jumbotronc';
import Tablez from './Tablez';
import Collapsecomp from './Collapsecomp';
import Layout from './Layout';
import TextContent from './components/textcontent';
import Alerts from './components/alerts';
import StopWatch from './StopWatch';
//import Form1 from './Form1';
//import Reservation from './Reservation';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar />, document.getElementById('root'));
ReactDOM.render(<Jumbotron />, document.getElementById('Banner'));
ReactDOM.render(<StopWatch />, document.getElementById('root1'));
ReactDOM.render(<Alerts />, document.getElementById('root2'));
ReactDOM.render(<TextContent />, document.getElementById('root3'));
ReactDOM.render(<App1 />, document.getElementById('root4'));
//ReactDOM.render(<Form1 />, document.getElementById('root5'));
//ReactDOM.render(<Reservation />, document.getElementById('root7'));




registerServiceWorker();
