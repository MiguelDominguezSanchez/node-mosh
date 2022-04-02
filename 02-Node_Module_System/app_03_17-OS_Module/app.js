// Define a constant 'os'
// require 'os'
const os = require('os')

// now we can call
// totalmem method
// os.totalmem()
// or freemem method
// os.freemem()
// or other methods

/**
So let me declare a variable
to store the result here

var totalMemory = os.totalmem()

similarly with freeMemory

var freeMemory = os.freemem()

and finally we log these values in the console

console.log('Total Memory: ' + totalMemory)

*/

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

// string and append variable totalMemory
// console.log('Total Memory: ' + totalMemory)

/**
Now we can simplify this method
by using a template string
which is available in more recent
version of javascript
we refer to ES6 / ES2015 : ECMAScript 6

It is the specification that defines
which features are available in javascript

So every year ECMA defines new features
added to javascript
As you know different browsers
implement different setup of features

but the v8 engine that we have in node
its pretty up to date
and a lot of new features of javascript
that is defined in javascript

So ECMAScript 6
or ECMAScript 2015

we have a feature called template string
which helps us to build the string without concatenations
Let me show you how that works
So

console.log('')

instead of single quotes
we use the backtick character

console.log(``)

backtick is the character before
number one on the keyword

So here we have some static text
like 
`Total memory`

Now we wanna add something here dynamically
so we use dollar sign $
and curly braces ${}
to add a placeholder or an argument

console.log(`Total Memory: ${}`)

In  this case the argument is 
'totalMemory' variable

console.log(`Total Memory: ${totalMemory}`)

So we can see that with the total string we dont  have concatenation.
We gonna duplicate this line

console.log(`Total Memory: ${totalMemory}`)

and change total to free
and freeMemory

console.log(`Free Memory: ${freeMemory}`)

*/

console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freeMemory}`)

// node app.js

/**
Total Memory: 17179869184
Free Memory: 211902464
*/

/**
Now what is interesting here 
is that before node
we can not get this information
using javascript
Javascript used to run only inside of a browser
and we could only work with the window 
or document objects
we could not get information of the Operating System
But using node 
our javascript executed outside of the browser
or as some people say on the server
With this we can get information about the operating system
we can work with files
we can work with network
for example we can build a web server
that listen for HTTP requests
at a given port.

and I gonna show you all of this later in this course

*/
