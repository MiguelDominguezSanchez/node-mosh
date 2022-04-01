/* -------------------------------------------------------------------------- */
/*                                 Path Module                                */
/* -------------------------------------------------------------------------- */

/*
So in the last lecture
I told you that in node
we have
a few useful modules built 
into thee core of node
with this modules we can 
work with files
with the operating system
with the network
and so on

Now let's have a quick look 
at these built in Modules
Head over Nodejs.org,
then go to docs,
in the left side,
go to version v8.9.3
that's the current stable release
chances are by the time 
you are watching this video
this version  might be different
So that doesn't really matter,
just pick that version.

Here on  the table of contents
We can see the built-in Modules

of course not everything 
you see here is a module
we have 'Console'
it is our console object
We have 'Buffer'
which we arre going to learn about 
in the  future in  this course.

Again that's a global object.


But you can see,
this is a fairly short list
Some of  the items of this list.

And some of the items in this list 
are built-in Modules in Node.
So just that,
We can see there are not many modules built into node

I am gonna highly
a few veery useful modules
that you should be aware of.

We have 'File System'
to work with files

we have HTTP
that we are gonna to learn about
later in this section
with this we can create web servers
that listen for HTTP request

We have OS
to work with the 'Operating System'

We have 'Path'
which gives us a bunch of utility function
to work with paths.

We have 'Process'
that give us information about the current process

We have 'Query Strings'
which is very useful
in building HTTP services

We have 'Stream'
which allows us to work with streams of data

again you are gonna learn about that in the future
and a lot of other modules

*/

/**
Now
In this section we are gonna to look at this 'Path' Module

So in the documentation you can see
all the functions defined in this module.

In this section we are gonna use 
the 'parse' method

path.parse(path)

Now if you scroll down
we can see how we can use this module
So we have seen the require function before
We call the module 'path'
using the require function
get the result
which is an object 
and store it in a constan 'path'

const path = require('path')

in app.js

*/
