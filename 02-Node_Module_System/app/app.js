// lets call require
/*
require(// and as the argument use 'path'
'path')
*/

/*
now, 
the argument we give 
with this 'require' function
Node assumes that this is a built-in module
If there is no built-in module
by the name specified here
Then Node looks for the existence
of a related path
to a file of this application
*/

/**
So if we have
require('./path)
or
require('../path)
Node assumes that this is a file in this application
*/

/**
Now in this case
we are gonna
load the built-in module
and store it in a constant
called path
*/

// require('path')

// const path = require('path')

/**
So this is an object 
with a bunch of different methods.

The method wee aer gonna use is the 'parse' method

path.parse()

*/

// path.parse()

/**
So I am gonna give it this underline underline filename
'__filename'
which is one of the arguments
of the module wrapper function that you saw
in the last lecture.
So lets call this
*/

// const path = require('path')

// path.parse(__filename)

/**
And store the result o¡in 'pathObj'
*/

const path = require('path')

var pathObj = path.parse(__filename)

// and finally log it on a console

console.log(pathObj)

/**
Now,
back in the terminal
lets run this application
*/

/**
So this is the path object
we have useful properties
we have:

'root'
'dir' // which specifies the  path to the folder containing this file
'base' // here the name of the file
'ext' // the extension
'name' // here is the name of the file 

*/

/**
{
  root: '/',
  dir: '/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/mosh/02-Node_Module_System/app',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
*/

/**
So if you wanna work with paths
its much easier to work with path module
as supposed to work with strings
*/

/**
In the next lecture 
we are gonna look at 
another built-in module
that give us information
about Operating System

*/
