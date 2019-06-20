var parent = document.getElementById("deck");
/*
 * Create a list that holds all of your cards
 */
// var childs=;
var childList = Array.prototype.slice.call(document.getElementsByClassName("card"));
// console.log(childList);

let timeStatus = false;

var time;

var timeArea = document.getElementById("time");

var moves = 0;

var moveSection = document.getElementById("moves");

var cardStore = [];

var starCount = 3;

var starSection = [...document.getElementsByClassName("fa-star")];
// console.log(star);
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

parent.onload = inceptGame();

function inceptGame() {
  var finalizedCards = shuffle(childList);
  var i = 0;
  while (i < finalizedCards.length) {
    parent.append(finalizedCards[i]);
    i++;
  }
}
for (var i in childList) {
  childList[i].addEventListener("click", showCard);
}

// for(var i=0; i<childList.length; i++){
//   childList[i].addEventListener("click",showCard);
// }

function showCard() {
  if (timeStatus == false) {
    startTimer();
    timeStatus = true;
  }

  this.classList.add("card", "open", "show", "disable");

  cardStore.push(this);
  if (cardStore.length == 2) {
    // console.log(cardStore[0].children[0].classList.item(1));
    moves = moves + 1;
    moveSection.innerHTML = moves;
    starRating();
    if (cardStore[0].type == cardStore[1].type) {

      cardStore[0].classList.add("match", "disable");
      cardStore[1].classList.add("match", "disable");
      if (matchedCards.length == 16) {
        clearInterval(time);
        Swal.fire({
          title: 'congratulations',
          html: 'stars ' + starCount + '<i class ="fa fa-star">  </i><br>Time Taken Is<br>' + hours + 'hour: ' + min + 'minutes: ' + sec + 'seconds',
          animation: true,
          confirmButtonText: 'Restart',
        }).then(() => {
          document.location.reload();
        });
      }
      cardStore = [];
    } else {
      cardStore[0].classList.add("unmatch");
      cardStore[1].classList.add("unmatch");
      cardStore.map((card) => {
        setTimeout(() => {
          card.classList.remove("unmatch", "open", "show", "disable");
        }, 200);
      })
      cardStore = [];
    }
  }
}

var matchedCards = document.getElementsByClassName("match");
// Timer functionality
let sec = 0;
let min = 0;
let hours = 0;

function startTimer() {
  time = setInterval(() => {
    sec = sec + 1;
    if (sec == 59) {
      sec = 0;
      min = min + 1;
    }
    if (min == 60) {
      min = 0;
      hours = hours + 1;
    }
    timeArea.innerHTML = hours + " : " + min + " : " + sec;
  }, 1000)

}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

function starRating() {
  if (moves > 12 && moves <= 18) {
    starCount = 2;
    starSection[2].style.display = "none";
  }

  if (moves > 18) {
    starCount = 1;
    starSection[1].style.display = "none";
  }
}
