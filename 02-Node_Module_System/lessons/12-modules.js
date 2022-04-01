/* -------------------------------------------------------------------------- */
/*                                 012 Modules                                */
/* -------------------------------------------------------------------------- */

/**
So in the last section, you learn that iin the client side javascript that run inside of browsers. 
When we declare a variable or a function, added to the global scope.
ie when we define a function, lets sayHello, that function is added to the global scope.
And it's available via the 'window' object.
 */

// var sayHello = function () {}

// window.sayHello()

/**
But there is a problem with this behavior.
In a real world application,
we often split our javascript code,
into multiple files,
so it is possible that we have zwei files.
and in both these files we define this function.
sayHello, with the exact same name.
Because this function is added to the global scope,
we define this function in another file,
that new definition is going to overwrite the previous definition.
So this is the problem with global scope.
So in order to build reliable, and maintainable applications.
We should avoid defining variables and functions in the global scope.
Instead we need modularity.
Small building blocks or modules,
where we define our variables and functions.
So zwei variables or functions with the same name
dont overwrite the variable or function write somewhere else,
encapsulated inside of that module.
// 
Now at the core of node,
we have this concept called module.
Every file in a node application,
is consider a module.
The variables and functions
defining that file module
are scoped to that file.
In Object Oriented Programming terms,
we say, they are private,
they are not available outside that container,
outside that module.
If you wanna use a variable or 
a function defined in a module
outside that module,
you need to explicitly exported,
and make it public.
// 
We are going to look at that in the next lecture.
// 
So what I want you to take away from this lecture,
is that every node application,
has at least one file or one module,
which become the main module.
So in this case app.js is our main module.
Now let me show you this module
 */

console.log(module)

/**
This module object here,
may appear to be global,
so you may think we can access it via
the global object
like
// 
console.log(global.module)
// 
but actually this is not a global object,
iit appears to be global,
but is not global,
and you will find out why very soon.
Lets log this module object 
and see what's in the console
*/

/**
❯ node 12-modules.js
Module {
  id: '.',
  path: '/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/mosh/02-Node_Module_System/app',
  exports: {},
  parent: null,
  filename: '/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/mosh/02-Node_Module_System/app/12-modules.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/mosh/02-Node_Module_System/app/node_modules',
    '/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/mosh/02-Node_Module_System/node_modules',
    '/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/mosh/node_modules',
    '/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/Node/node_modules',
    '/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/Courses/node_modules',
    '/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/Courses_Tackled/node_modules',
    '/Users/migueldominguezsanchez/Desktop/MiguelDominguez_SeedTag/node_modules',
    '/Users/migueldominguezsanchez/Desktop/node_modules',
    '/Users/migueldominguezsanchez/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
 */

/**
So you can see we have an object 'module'
It's a json object with this key value pairs.
So we have:
Module {
  id: '.', // Unique Identifier
  exports: {},
  parent: null,
  filename: '...' // The complete path to that file
  loaded: false // Which is boolean that determines if that module is loaded or not
  children: [], 
  paths: 
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
For now dont worry about these properties,
as we go through this section
we will gradually become familiar
with these properties
*/

/**
So in node every file is a module,
and the variables and functions 
defined in that file
are scoped to that module
they are not available outside of that module
*/

/**
In the next section
we are gonna learn 
how to create and load a module
*/
