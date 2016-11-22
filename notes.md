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

Not all promises will be fulfilled, some errors may happen in the process.

promises provide a way to pass the specific error that prevents the successful execution.

once a promise has been rejected it can never be fulfilled.

```
var promise = new Promise(function (fulfill, reject) {
  setTimeout(function(){
    reject(new Error('REJECTED!')); }, 300);
   });

   function onReject (error) {
     console.log(error.message);
   }

  promise.then(null, onReject);

```

## Reject and Resolve a promise

In ES6 once a promise has been fulfilled or rejected it may not change state again. Difference between any other type of callback...

e.g. below the callback is called twice.

```
function myFunc(user, callback) {
  if (user) {
    callback(null, user);
  }

  return callback('No user was found', null);
}
```

```
var promise = new Promise(function (fulfill, reject){
  fulfill('I FIRED');

  reject(new Error('I DID NOT FIRE'));


});

function onRejected(error){
  console.log(error.message)
}

promise.then(console.log, onRejected)
```

## Always Asynchronous

Promises declare that they must not fire their resolution/ rejection on the same turn of the event loop that they are created on. This eliminates the possibiltiy of execution order varying.

a function passed to `then` will be called on the next turn of the event loop.


## Shortcuts

for handling rejection only use `.catch`. since onFulfilled is optional can leave it as null.

e.g.
```
promise.then(null, function (err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});
```

You could simply write

```
promise.catch(function (err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});
```

`resolve` can be used instead of the constructor and fulfill.

e.g
```
var promise = new Promise(function (fulfill, reject) {
  fulfill('SECRET VALUE');
});

```
===

`var promise = Promise.resolve('SECRET VALUE');`

`reject` used instead of reject in the promise constructor.

e.g.
```
var promise = new Promise(function (fulfill, reject) {
  reject(new Error('SECRET VALUE'));
});

```

`var promise = Promise.reject(new Error('SECRET VALUE'));`
