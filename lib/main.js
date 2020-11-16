"use strict";

console.log('test');

var parks = ["Arcadia National Park", "Big Bend National Park", "Black Canyon National Park", "Crater Lake National Park", "Grand Canyon National Park", "Kenai Fjords National Park", "Lake Clark National Park", "Olympic National Park", "Redwood National Park", "White Sands National Park"];
//
// let rand_parks = Math.floor(Math.random() * 10);
//
// let parkRandom = parks[rand_parks];
//
// // const getNewItem = document.getElementById('click-me');
// // getNewItem.addEventListener('click', myFunction);
//
// document.getElementById("click-me").addEventListener("click",
//   function myFunction() {
//     document.getElementById("place").innerHTML = parkRandom;
//   }, false
// );
var randomParks = void 0;

randomParks = function randomParks() {
  var i = void 0,
      j = void 0,
      k = void 0;
  for (i = parks.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = parks[i];
    parks[i] = parks[j];
    parks[j] = k;
  }
  document.getElementById("place").innerHTML = parks[0];
};

document.getElementById("click-me").addEventListener("click", randomParks);