/* -------------------------------------------------------------------------- */
/*                              Creating a Module                             */
/* -------------------------------------------------------------------------- */

/**
Alright, 
Now lets add a new module to  this application
Add a new file
'logger.js'
We are gonna create a module for login messages.
We are gonna reuse this module in various parts of this application.
Or potentially in other applications.
*/

/**
Now
In this module 
lets imagine that we are gonna use
one of these remote login services
for login our messages
There are websites outer with login as a service
They give us a url
an a http request to that u rl
to log messages in the cloud
*/

/**
So here we declare a variable url
and set it to something like this
'http://mylogger.io/log'
Of course I am making this up,
it may not be a true service out there.
But lets imagine in these implementation we are going to send
an http request to this endpoint.
*/

// var url = 'http://mylogger.io/log'

/**
Now we also need a function
called 'log'
that takes a message
an in this function we are gonna send an http request
*/

// function log(
// 	// that takes a message
// 	message
// ) {
// 	// send an HTTP request
// 	console.log(message)
// }

/**
However to keep things simple here
we are gonna focus on the functionality
We are not going to be distracted with 
all the details of sending an HTTP request
So for now I am gonna just log this message on the console
'console.log(message)'
 */

// var url = 'http://mylogger.io/log'

// function log(
// 	// that takes a message
// 	message
// ) {
// 	// send an HTTP request
// 	console.log(message)
// }

/**
Now 
this variable and this module 
they are both scoped to this module
they are private
they are not visible from the outside
However in app.js
our main module
we wanna use this logger module
So we should be able to access 
log function
we should be able to call it from
app module
sso we need to make this public
we need to make it visible from the outside
*/

/**
In the last lecture
we saw the module object
one of the problems 
we have here is 'exports'

*/

/*
Module {
...
  exports: {},
...
... 
...
...
  [
    '...'
    '...'
    '...'
    '...'
    '...'
    '...'
  ]
,
}
*/

/**
we see this property set to an empty object,
anything that we add to this object
will be exported to this module
It will be available outside of this module
*/

/**
So back in our logger module
I am gonna set module.exports.log
So I am adding a method 'log' 
to this 'exports' object
and simply setting to
this 'log' function we have defined.
*/

// var url = 'http://mylogger.io/log'

// function log(
// 	// that takes a message
// 	message
// ) {
// 	// send an HTTP request
// 	console.log(message)
// }

// module.exports.log = log

/** 
In other words
the object we are exporting here has
'module.exports'
have a single method called log
'module.exports.log'
*/

/**
Now similarly
if you want to export 'url'
it could be something like this:
*/

// module.exports.url = url

// var url = 'http://mylogger.io/log'

// function log(
// 	// that takes a message
// 	message
// ) {
// 	// send an HTTP request
// 	console.log(message)
// }

// module.exports.log = log
// module.exports.url = url

/**
And of course we can change the name 
that is exported to the outside.
ie Internally we may call this variable 'url'
but 
when we exported and we call it endPoint

'module.exports.endPoint = url'

 */

// var url = 'http://mylogger.io/log'

// function log(
// 	// that takes a message
// 	message
// ) {
// 	// send an HTTP request
// 	console.log(message)
// }

// module.exports.log = log
// module.exports.endPoint = url

/**
Now in this case
we dont need to export this 'url' variable
because this is purely implementation detail
So in real world applications 
every module may have several variables and functions.
We only want to export a subside of this members to the outside
Because we want to keep this module easy to use
*/

/**
Let me give you a metaphor.
Think of a dvd player
dvd player has a few bottoms on the outside.
And these are the bottoms for the objects we interact with.
So these objects represent the public interface of the dvd player.
But inside the box,
there are a lots of other complex objects,
that we dont need to know anything about these objects.
The implementation detail.
And they can change significantly from one model to another.
but what we see on  the outside
almost stable or static across different models.
*/

/**
So in our 'logger' module 
this 'url' is implementation detail
other modules dont need to know anything about this
they only need to call the 'log' function
So we export this
make it public
but keep the url private
*/

var url = 'http://mylogger.io/log'

function log(message) {
	// Send an HTTP request
	console.log(message)
}

module.exports.log = log

/**
So we are  done with our logger module
Now we need to log this module
and use inside app.js


logger.log('message')

// and  we get 'message' on the console


*/

/**
So this is how we work with modules in node
We define a module,
we export one or more members

'module.exports.log = log'

and then to load the module we use the 'require' function

*/

/**
Now in the recent versions of javascript
we have the ability to define constants
So as a best practice
by loading a module
using the require function
its better to store the result in constant
the reason of this is because we dont want to accidentally
overwrite the value of logger like this here

logger = 1

we set this to 1
and we call a log method 
we are gonna to get an exception

logger.log('message?)

in app.js

*/
