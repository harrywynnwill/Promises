'use strict';
// setTimeout(function(){ console.log("TIMED OUT!"); }, 300);

// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(function(){
//   fulfill('FULFILLED!'); }, 300);
// });
//
//
// promise.then(console.log)

// var promise = new Promise(function (fulfill, reject) {
//   setTimeout(function(){
//     reject(new Error('REJECTED!')); }, 300);
//    });
//
//    function onReject (error) {
//      console.log(error.message);
//    }
//
//   promise.then(null, onReject);



// var promise = new Promise(function (fulfill, reject){
//   fulfill('I FIRED');
//
//   reject(new Error('I DID NOT FIRE'));
//
//
// });
//
// function onRejected(error){
//   console.log(error.message)
// }
//
// promise.then(console.log, onRejected)
//
// var promise = new Promise(function(fulfill, reject){
//   fulfill('PROMISE VALUE');
//
// })
//
// promise.then(console.log);
//
// console.log('MAIN PROGRAM');
var promise = Promise.reject(new Error('HErro'));
var promise1 = Promise.resolve("hello")
promise.catch(function(err){
  console.log('There is an error');
});
console.log(promise);
console.log(promise1);
