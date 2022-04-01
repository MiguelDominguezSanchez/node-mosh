/* -------------------------------------------------------------------------- */
/*                              Loading a Module                              */
/* -------------------------------------------------------------------------- */

/**
To load a module we use the 'require' function.
It is one of the functions in node,
we dont have it in browsers.
This function takes one argument,
and thats the name or path of the target module,
we wanna load.
So here we wanna log the logger module.
Both the app module and the logger module are in the same folder.
So we use period slash 
('./')
to indicate the current folder
and then we add the name of our module.
'logger.js'
(./logger.js)
or shorter and we use 'logger'
Because node asumes that this is a javascript file,
and automatically adds the javascript js extension. 
*/

// require('./logger')

/** 
now if this logger was in a subfolder
add a subfolder here
require('./subFolder/logger)
or
we can use 
dot dot slash
require('../logger')
so here we are using 
the related path to the target model
*/
/**
In this case that module is in the same folder
*/

require('./logger')

/**
Now this require function returns
the object that is exported from this target module.
So this exports object here

Module {
  ...,
  exports: {},
  ...,
}

this is what we get when we call the require function

*/

/**
Let me show you
so I am gonna declare a variable
call it logger 
the name of the module
and set it to the return value of the required module

var logger = require('./logger')

// now lets log this logger and see what we get

console.log(logger)

in app.js

*/

/**

var logger = require('./logger')

console.log(logger)

// { log: [Function: log] }

*/

/**

node app.js
look we get an object
it has a single method called log
you can see its a function
*/

/**
So we can call this function or method in app.js

so back here 'app.js'
we call logger
wee have intellisense in visual studio code
so logger.log()
and pass a message

logger.log('message')

/*

logger = 1
       ^

TypeError: Assignment to constant variable.

*/

/**
we have a typeError: Assignment to constant variable.
There are tools out there
to check our javascript code
for errors like that,
but by using this constructs properly
we can prevent these errors for happening at runtime
*/

/**
So one of the popular tools is js hints 
If you have never used it before
dont worry
I am gonna show you a quick demo

So if you run:

jshint app.js 

we get this error:
Attempting to override 'logger' which is a constant.

Thats the benefit of using a constant
as supposed to a variable here.
if accidentally reset this object
then we are gonna get an error at compiling time
instead of at runtime
*/

/**
And one last thing 
before we finish this error
Sometimes instead of 
exporting an object from a module.
We wanna export only a single function.

For example in our logger module
we dont necessary need 
an object because we have a single method
An  object will be useful if we have
multiple methods or properties here.

But in this case,
instead of exporting an object
we can export a single function.
So we can reset this 'exports'
to a log function 

module.exports = log

so initially was an empty object
but we reset it to an empty function

with that in app.js
so logger is no longer an object 
its a function that we can call directly
like this:

const logger = require('./logger)

logger('message')

So a better name for this function
is log
I rename this to 'log'

const log = require('./logger')

log('message')

app.js

and we get the same result
we can export a single function or an object
*/
