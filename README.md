# FEND-Memory-Game

-   Test your memory and find all 8 matching pairs in the least amount of time.
-   This game will enhance your memory power with fun play.

## Quickstart

-   Download the project from github through the link provided in it.
-   Open the downloaded folder.
-   Locate the file `index.html` and open it with a Browser.
-   observe the errors in the console and start working to solve it.

## Dependencies

-   SweetAlert
-   Google Fonts
-   FontAwesome Icon set

## I did the following steps in order to develop this game.

-   After extracting the downloaded zip file, I came to understand that most of the modifications would happen in `app.js`.
-   Observed `shuffle` function which was provided by stack overflow in `app.js`. And created an array for listing all the cards named it as `childList`.
-   shuffle function will be triggered when the window is loaded.
-   I used spread operator (`[...]`) to convert HTMLCollection into an array.
-   I got new shuffled array after setting the `childList` array as a parameter in  `shuffle` function.
-   Added a `click` EventListener to each card with a function named `showCard`.
-   I concentrated on timer function, added timer function ( `startTimer` ) definition in `showCard` function.
-   I understand that timer function is not working properly. So I took a variable and assigned a Boolean value (`false`). The value will be changed to `true` If anyone card clicked.
-   `setInterval` function is used to start the Timer and `clearInterval` function is used to stop the Timer.
-   Then I had written a code to increase the move count .
-   And using function `starRating` i written a code to evaluate start rating
     i.e. i) Two stars for moves between 12 and 18.
         ii)  one star for moves above 19.
-   Then finally if the count of `matchedCards` is equal to 16 ,then game is going to be terminated showing a popup which includes star count (player gained in the game), hours(`hours`),minutes(`min`),seconds (`sec`)(taken by the player to complete the game).

### How to play the game.

-   open the index.html file using compatible Web Browser.
-   Game will load in the web page.
-   Now player can start matching the cards.
-   Among 16 cards every two cards are similar and the player need to match them.
-   As the player starts matching the cards the Timer starts running.
-   After matching all the cards ,the game is going to be terminated by showing a popup which includes the starcount, hours, minutes, seconds and with Restart button.
-   
