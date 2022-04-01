/* -------------------------------------------------------------------------- */
/*                           Module Wrapper Function                          */
/* -------------------------------------------------------------------------- */

/**
So now you know
the variables and functions we define in a module
are scoped to that module.

Private and not visible from the outside.

But you would be wondering
How node does this?

So let me show you

At the very first line of
the logger.js module
I am gonna create a syntactical error

Define a variable x and set it to ;
like this:

var x =;

make sure of run this on the very first line
of course
if you have a line break here
and you do this on the second line
you are not gonna see what I am gonna show you know

Lets run the application again
we have:
SyntaxError: Unexpected token ;

SyntaxError: Unexpected token ';'

But look above this line
you see this function declaration
so this function has a few parameters:

(function (exports, require, module, __filename, __dirname) { var x =; 

exports
require
module
__filename
__dirname

so  let me copy this code here
basically what happens under the hood,
is that node does not execute this code
directly
it wraps it inside of a function 
thats the function itself

So at runtime our code
will b converted to something like this.
so we have this function declaration

(function (exports, require, module, __filename, __dirname))

for now I am going to remove this function here in logger.js
the error one
var x =;

(function (exports, require, module, __filename, __dirname) {

  var url = 'http://mylogger.io/log'

  function log(message) {
    // Send an HTTP request
    console.log(message)
  }

  module.exports = log;

})

this is our code inside
and then we have the end of the function the closing bracket and parenthesis

Now the actual code is slightly more complicated than this 
wee dont want to get distracted for that complexity
If you are a more advanced javascript developer.
You probably know this is a IIFE
Immediately Invoked Function Expression
or IIFE

If you dont know that
dont worry is not the scope of node

What I want you to take here
is that node does not execute our code directly.
It always wraps the code inside its module
in something like this:
inside of a function

(function (exports, require, module, __filename, __dirname) {
  ... // code
})

Now look at these arguments to this function
so you have seen 'require'
I told you this require function
I told you that this require function
appeals to be global 
but actually its no global
in fact its local to each module.
So in every module 'require',
is one of the arguments that its passed
to this function.
We call this function the 'Module Wrapper Function'

So you have seen the 'require' function
wee have also seen the 'module'
that is what w are using here:

'module.exports = log'

we also have 'exports'
which is a shortcut of 'module.exports'
so if you wanna add a function to module.exports object

'module.exports.log = log'

or you can write:

'exports.log = log'

But you can not reset this 'exports'
like what we did earlier
and not write:

exports = log

Because this 'exports' its a reference
to 
'module.exports'

you can not change that reference

So these are the first three arguments

we also have '__filename' and '__dirname'

the name of this file and the path.
Lets take a quick look at these arguments

I am gonna do 
in logger.js

console.log(__filename)
and also
console.log(__dirname)

we are not gonna have this function
this module wrapper
this was purely for demonstration

I am gonna write the code to what we have before
in logger.js
So now we dont have any errors
in this module
lets go back to the terminal and run this program

*/

/**

console.log(__filename)
console.log(__dirname)

var url = 'http://mylogger.io/log'

function log(message) {
	// Send an HTTP request
	console.log(message)
}

module.exports = log

// 
node app.js
// 

/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/mosh/02-Node_Module_System/app/logger.js // Here in the first line which is the complete file to that path to that file
/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/mosh/02-Node_Module_System/app // and in the second line we have the path to the directory that contains a module
message

*/

/**
Now you have a basic idea of our node modules and how they work
You now how to create and upload them

But node it self comes with a bunch of basic modules
that we can use in a lot of applications
Thats is what we are going to look at the next lecture
*/
