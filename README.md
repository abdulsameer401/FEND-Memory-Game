# FEND-Memory-Game

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
----------------------
## I did the following steps in order to develop this game.
+ Downloaded the skeleton project from GitHub link which was provided by udacity in rubric structure.
+ After extracting the downloaded zip file, I came to understand that most of the modifications would happen in `app.js`.
+ Observed `shuffle` function which was provided by stackoverflow in `app.js`. And created an array for listing all the cards named it as `childList`.
+ shuffle function will be triggered when the window is loaded.
+ I used spread operator (`[...]`) to convert HTMLCollection into an array.
+ I got new shuffled array after setting the `childList` array as a parameter in  `shuffle` function.
+ Added a `click` EventListener to each card with a function named `showCard`.
+ I concentrated on timer function, added timer function ( `startTimer` ) definition in `showCard` function.
+ I understand that timer function is not working properly. So I took a variable and assigned a boolean value (`false`). The value will be changed to `true` If anyone card clicked
