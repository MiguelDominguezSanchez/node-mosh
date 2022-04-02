// first we need to require the module 'fs'
// require('fs')
// and store it in this constant
const fs = require('fs')

// fs. // look every operation defined here (vsc suggestions dialogue box)
/**
comes into forms
synchronous or blocking 
and 
asynchronous or non blocking
ie we have 'access' method
'.access'
which is an asynchronous method,
we also have 'accessSync'
'.accessSync'
which is asynchronous method.

Now
even though we have these synchronous methods here,
you should avoid using them
These are there purely for simplify.
In a real world application.
You should use asynchronous methods.
Because these are non-blocking
As I told you in the last section section.
A node process is single thread.
If you are using node for the backend of your application.
We have several hundreds or thousands of clients,
connecting to that backend.
If you keep that single thread busy,
you wont be able to serve many clients.
So always use asynchronous methods.

Now 
at aside,
lets look an example
/.../ further notetaking.
*/

const files = fs.readdirSync('./')
console.log(files)

fs.readdir('$', function (err, files) {
	if (err) console.log('Error', err)
	else console.log('Result', files)
})
