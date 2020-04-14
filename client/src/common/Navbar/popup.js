import Popup from '../../components/popup/index';
import React, { Component } from 'react';
import logo from '../../components/images/logo7.png'

class PopButt extends Component {

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
     <div> 
       <img onClick={this.togglePopup.bind(this)} src={logo}
     alt="logo"/>
       {this.state.showPopup ?
         <Popup
        
          closePopup={this.togglePopup.bind(this)}
         />
         : null
       }
      </div>

    );
  }
}

export default PopButt;