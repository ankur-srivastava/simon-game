let gameSeq = [];
let userInputs = [];
let gameSeqNo = 0;
let level = 1;

function reset() {
  gameSeq = [];
  userInputs = [];
  gameSeqNo = 0;
  level = 0;
}

function playSound(randomNumber) {
  // Play the sound
  // Animate
  console.log(`Play Sound ${randomNumber}`);
  let tempClass = "."+randomNumber;
  $(tempClass).animate({
    opacity: "10%"
  });
  setTimeout(function () {
    $(tempClass).animate({
      opacity: "100%"
    });
  }, 200);
}

function nextSequence() {
  let randomNumber = Math.round(Math.random()*3);
  gameSeq.push(randomNumber);
  playSound(randomNumber);
}

function postUserClick(seq, userInput) {
  // For the user input check if it matches next in Game SEQ.
  if(seq[gameSeqNo] === userInput) {
    if((gameSeqNo+1) === seq.length) {
      level = level + 1;
      userInputs = [];
      gameSeqNo = 0;

      setTimeout(function () {
        $("#level-title").text("Level "+level);
        playGame();
      }, 2000);

    } else {
      gameSeqNo = gameSeqNo + 1;
      userInputs.push(userInput);
    }
  } else {
    $("#level-title").text("Oops, wrong choice.");
    reset();
    setTimeout(function () {
      $("#level-title").text("Start");
      playGame();
    }, 3000);
  }
}
function playGame() {
  console.log('Start the Game');
  nextSequence();
}
reset();
playGame();

$(".0").click(function() {
  userInput = 0;
  playSound(0);
  response = postUserClick(gameSeq, userInput);
});
$(".1").click(function() {
  userInput = 1;
  playSound(1);
  response = postUserClick(gameSeq, userInput);
});
$(".2").click(function() {
  userInput = 2;
  playSound(2);
  response = postUserClick(gameSeq, userInput);
});
$(".3").click(function() {
  userInput = 3;
  playSound(3);
  response = postUserClick(gameSeq, userInput);
});
