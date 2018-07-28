import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import Example from './Example';
import Navbar from './Navbarz';
import ModalExample from './ModalExample';
import Jumbotron from './components/jumbotronc';
import Tablez from './Tablez';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar />, document.getElementById('root'));
ReactDOM.render(<Jumbotron />, document.getElementById('Banner'));
ReactDOM.render(<App />, document.getElementById('root1'));
ReactDOM.render(<Tablez />, document.getElementById('root5'));
ReactDOM.render(<Test />, document.getElementById('root2'));
ReactDOM.render(<Example />, document.getElementById('root3'));



registerServiceWorker();
