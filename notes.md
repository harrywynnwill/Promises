# Promises Node School

## What is a Promise

Promises are a new type of object in ES6

A Promise is an object that defines a method called `then`. The promise object represents a value that maybe available some time in the future.


```
Parse.User.logIn('user', 'pass').then(function (user) {
  return query.find();
}).then(function (results) {
  return results[0].save({ key: value });
}).then(function (result) {
  // the object was saved
}).catch(function (err) {
  // an error happened somewhere in the process
});
```

## Fulfilling a Promise

Promises have an important internal property: it's state.

a promise is either:

* FULFILLED
* REJECTED
* PENDING

most promises are created with the `new Promise(executor)` executor is a callback function with the signature function `function(fulfill, reject)`. Inside executor, either fulfill or reject is called.

A promise has a `then` property function. It is the main way of manipulating promises and their values.
It takes two optional parameters `onFulfilled` and `onRejected`. called on fulfilled or rejected.

## Rejecting a Promise
