import React, { Component } from 'react'
import './HomeView.scss'
import Listing from './../../../components/Listing/Listing'
import { arrangeListings } from '../modules/GridSorter'


/**
Dummy Data for testing
**/
var testListings = [{"title": "A title", width: 120, height: 128, "image": "http://lorempixel.com/120/128"},
                {"title": "A title", width: 340, height: 128, "image": "http://lorempixel.com/340/128"},
                {"title": "A title", width: 150, height: 256, "image": "http://lorempixel.com/150/256"},
                {"title": "A title", width: 250, height: 128, "image": "http://lorempixel.com/250/128"},
                {"title": "A title", width: 40, height: 128, "image": "http://lorempixel.com/40/128"},
                {"title": "A title", width: 40, height: 128, "image": "http://lorempixel.com/40/128"},
                {"title": "A title", width: 150, height: 30, "image": "http://lorempixel.com/150/30"},
                {"title": "A title", width: 150, height: 146, "image": "http://lorempixel.com/150/146"},
                {"title": "A title", width: 150, height: 256, "image": "http://lorempixel.com/150/256"},
                {"title": "A title", width: 250, height: 128, "image": "http://lorempixel.com/250/128"},
                {"title": "A title", width: 300, height: 256, "image": "http://lorempixel.com/300/256"},
                {"title": "A title", width: 40, height: 128, "image": "http://lorempixel.com/40/128"},
                {"title": "A title", width: 40, height: 128, "image": "http://lorempixel.com/40/128"},
                {"title": "A title", width: 150, height: 30, "image": "http://lorempixel.com/150/30"},
                {"title": "A title", width: 150, height: 146, "image": "http://lorempixel.com/150/146"},
                {"title": "A title", width: 200, height: 40, "image": "http://lorempixel.com/200/40"},
                {"title": "A title", width: 100, height: 40, "image": "http://lorempixel.com/100/40"},
                {"title": "A title", "width": 64, "height": 256, "image": "http://lorempixel.com/64/256"},
                {"title": "A title", "width": 64, "height": 128, "image": "http://lorempixel.com/64/128"},
              ];


class HomeView extends Component {

  /**
  Renders out listings into the DOM
  @param array listings
  An array of listing objects with positioning metadata.
  Each listing object consists of a width (int), height (int), title (String) +
  positioning metadata.
  @return undefined
  **/
  renderListings(listings) {
    return listings.map((x,i) => <Listing key={i} height={x.height}
    width={x.width} image={x.image} title={x.title} />);
  };

  render () {
    return (
      <div id='frame' className='frame'>
        {
          this.renderListings(arrangeListings(testListings))
        }
      </div>
    )
  }
}


export default HomeView
