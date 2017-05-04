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
       }
     };
     return (
         <img src={this.props.image} title={this.props.title}
           alt={this.props.title} style={Styles.config} />
     )
   }
 }


 export default Listing
