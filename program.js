'use strict';
// setTimeout(function(){ console.log("TIMED OUT!"); }, 300);

// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(function(){
//   fulfill('FULFILLED!'); }, 300);
// });
//
//
// promise.then(console.log)

var promise = new Promise(function (fulfill, reject){
  fulfill('I FIRED');

  reject(new Error('I DID NOT FIRE'));


});

function onRejected(error){
  console.log(error.message)
}

promise.then(console.log, onRejected)
