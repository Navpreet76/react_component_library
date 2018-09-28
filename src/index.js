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
import Calculator from './Calculator';
import SignUpDialog from './SignUpDialog';
//import Form1 from './Form1';
//import Reservation from './Reservation';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
//import FilterableProductTable from './FilterableProductTable';
import PRODUCTS from './FilterableProductTable';
import FancyButton from './components/FancyButton';
import NameForm from './NameForm';  
import Greetings from './components/Greetings';
import Mailbox from './components/Mailbox';
const messages = ['React', 'Re: React', 'Re:Re: React'];


ReactDOM.render(<Navbar />, document.getElementById('root'));
ReactDOM.render(<Jumbotron />, document.getElementById('Banner'));
ReactDOM.render(<StopWatch />, document.getElementById('root1'));
ReactDOM.render(<Calculator />, document.getElementById('root2'));
ReactDOM.render(<SignUpDialog />, document.getElementById('root3'));
ReactDOM.render(<FancyButton />, document.getElementById('root4'));
ReactDOM.render(<NameForm />, document.getElementById('root5'));
ReactDOM.render(<Greetings   isLoggedIn = {true} />, document.getElementById('root6'));
ReactDOM.render(<Mailbox unreadMessages={messages} />, document.getElementById('root7'));


//ReactDOM.render(<Reservation />, document.getElementById('root7'));




registerServiceWorker();
