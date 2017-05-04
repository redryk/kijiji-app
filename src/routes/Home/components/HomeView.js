import React, { Component } from 'react'
import './HomeView.scss'
import Listing from './Listing'

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

/**
Lays out listings within the smallest container possible
@param array listings
An array of listing objects.
Each listing object consists of a width (int), height (int), title (String)
@return array
An array of listing objects that have the width (int), height (int), title (String),
and any positioning metadata (up to your discretion).
**/
 const arrangeListings = (listings) => {
   // console.log(listings);
   var boundSize = 800;
   var gridListings = [];
   var unfitableListings = [];

   sortListings(listings);
   sortListingsOnGrid(listings, gridListings, unfitableListings, boundSize);
   // console.log(gridListings);

   return gridListings;
 }

/**
Sort Listings first by height and then by width on DESC order.
@param array listings
An array of listing objects.
**/
const sortListings = (listings) => {
  listings.sort((a, b) => {
    //Parse values
    var aHeight = a.height;
    var bHeight = b.height;
    var aWidth = a.width;
    var bWidth = b.width;

    // Compare if it is equal on heights then compare widths. If not sort by height.
   if (aHeight == bHeight) {
       return (bWidth < aWidth) ? -1 : (bWidth > aWidth) ? 1 : 0;
   }
   else {
       return (bHeight < aHeight) ? -1 : 1;
   }
  })
}

/**
Sort Listings that can fit inside the 800px frame. Based on width.
@param array listings
An array of listing objects.
@param array gridListings
An array of listing objects fitted in proper order to meet frame bounds.
@param array unfitableListings
An array of listing objects that wont fit properly in order and inside the bounds of the frame.
@param array boundSize
An int, size of the frame bounds. Test case 800px.
**/
const sortListingsOnGrid = (listings, gridListings, unfitableListings, boundSize) => {
  var gridWidthSum = 0;
  for (var i = 0; i < listings.length; i++) {
    if (listings[i].width <= boundSize - gridWidthSum) {
      gridListings.push(listings[i]);
      gridWidthSum += listings[i].width;
    } else {
      unfitableListings.push(listings[i]);
    }
  }

  console.log(unfitableListings);
  if (unfitableListings.length > 0) {
    var copyUnfitables = unfitableListings;
    unfitableListings = [];
    sortListingsOnGrid(copyUnfitables, gridListings, unfitableListings, boundSize)
  }

}

/**
Renders out listings into the DOM
@param array listings
An array of listing objects with positioning metadata.
Each listing object consists of a width (int), height (int), title (String) +
positioning metadata.
@return undefined
**/
const renderListings = (listings) => {
  return listings.map((x,i) => <Listing key={i} height={x.height}
  width={x.width} image={x.image} title={x.title} />);
}


class HomeView extends Component {

  render () {

    return (
      <div id='frame' className='frame'>
        {
          renderListings(arrangeListings(testListings))
        }
      </div>
    )
  }
}


export default HomeView
