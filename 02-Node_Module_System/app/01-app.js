// Global Object

// console.log() // global
/**
part of global scope
access it anywhere in any files
we have a bunch of other objects and functions
that are also globally available in node
ie we have setTimeout()
we use it to call a function after a delay
 */

// setTimeout()

/**
part of the standard javascript
you can use it
inside a browser or inside node
*/

// clearTimeout()

/**
we also have clearTimeout()
*/

// setInterval()

/**
similarly we have setInterval()
it is used to repeatedly call a function
after a given delay
*/

// clearInterval()

/**
we also use clearInterval
it is used to stop that 
function from being called repeatedly
*/

/**
These are the global objects in javascript
now in node we have a couple of global objects 
we are gonna learn about latter in this section
*/

/** 
in browsers we have this window object
that we present as global scope
so all the variables and functions 
that are defined globally
we can access them via this window object

*/

// window.console.log
// or simply
// console.log()

/**
The javascript engine 
prefix this statement
with window
that's where that object is defined
/
window.console.log
// or simply
console.log()
*/

/**
Similarly
All of these other functions 
over here

setTimeout()
clearTimeout()
setInterval()
clearInterval()

belong to the window object
so we can call 
window.setTimeout()
to call it directly
By the same token
when we declare a variable
lets say:
var message = ''
*/

// var message = ''
// window.message

/**
This variable is also available 
in the window object.

In node we have no window object
instead we have another object call 'global'
*/

// global

/**
all these functions we have here
we can access then via the 'global' object
*/

// global.console.log()
// global.setTimeout()

/**
Of course it's easier to 
use the shorthand 
instead of prefixing them with 'global'
But one thing you need to know,
is that these variables that we define here
*/

// var message = ''

/**
are not added to the global object
In other words,
if I do a console.log(global.message)
*/

// console.log(global.message)

/**
We arre going to see undefined in the console.
So we get 'undefined' in the console
So as you can see the variables defined, 
they ae not added to the global object.
They are only scope to this file 'app.js'.
This is because Node Modular System,
we are gonna learn about it in the next section.
*/

// zweiMillionen()
