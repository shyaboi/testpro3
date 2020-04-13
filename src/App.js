import './App.css';
import Popup from './components/popup';
import Chat from './components/chat';
import React, { Component } from 'react';
import logo from './components/images/logo7.png'
class App extends Component {

  constructor(props){
  super(props);
  this.state = { showPopup: false };
  }

  togglePopup() {
   this.setState({
     showPopup: !this.state.showPopup
   });
 }

  render() {
    return (
     <div id='main'> 
       <img id='open' onClick={this.togglePopup.bind(this)} src={logo}
     alt="mail poem"/>
<h1>Click ^ to toggle chat box</h1>
       {this.state.showPopup ?
         <Popup
          text='Click "Close Button" to hide popup'
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
      </div>

    );
  }
}

export default App;