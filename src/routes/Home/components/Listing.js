/**
 * @Author: Carlos Picca <carlospicca>
 * @Project: Kijiji
 */

 import React, { Component } from 'react'
 import './Listing.scss'


 class Listing extends Component {

   render () {
     var Styles = {
       config: {
         height: this.props.height,
         width: this.props.width,
        //  background: this.props.colorUrl
       }
     };
     return (
        //  <div className='rectangle' style={Styles.config}></div>
         <img src={this.props.image} style={Styles.config} />
     )
   }
 }


 export default Listing
