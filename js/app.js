var parent = document.getElementById("deck");
/*
 * Create a list that holds all of your cards
 */
// var childs=;
var childList = Array.prototype.slice.call(document.getElementsByClassName("card"));
// console.log(childList);

let timeStatus = false;

var time;

let timeArea = document.getElementById("time");

let moves = 0;

let moveSection = document.getElementById("moves");

let cardStore = [];

let starCount = 3;

let starSection = [...document.getElementsByClassName("fa-star")];


// Shuffle function for shuffling the cards
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
// inceptgame function is used to append the cards after shuffling.
function inceptGame() {
  var finalizedCards = shuffle(childList);
  var i = 0;
  while (i < finalizedCards.length) {
    parent.append(finalizedCards[i]);
    i++;
  }
}
// adding EventListener for each cards
for (var i = 0; i < childList.length; i++) {
  childList[i].addEventListener("click", showCard);
}
// function for starting Timer
function showCard() {
  if (timeStatus == false) {
    startTimer();
    timeStatus = true;
  }

  this.classList.add("card", "open", "show", "disable");

  cardStore.push(this);
  // condition for increasing move count
  if (cardStore.length == 2) {
    moves = moves + 1;
    moveSection.innerHTML = moves;
    starRating();
    if (cardStore[0].type == cardStore[1].type) {

      cardStore[0].classList.add("match", "disable");
      cardStore[1].classList.add("match", "disable");
      if (matchedCards.length == 16) {
        clearInterval(time);
        // using swal function to display popup in the end of the game.
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
// code to display time taken for the completion of the Game.
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
// function to evaluate start rating.
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
