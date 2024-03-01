let userScore = 0;
let computerScore = 0;

playGame = (userChoice) => {
  compChoice = genComChoice()
  if (userChoice === compChoice){
    console.log("It's a tie");
  } else if ((userChoice === 'rock' && compChoice === 'scissors' )|| (userChoice === 'paper' && compChoice === 'rock' )||( userChoice === 'scissors' && compChoice === 'paper')){
    console.log("User wins");
    document.getElementById("msg").innerHTML = "User wins";
    document.getElementById('user-score').innerHTML = ++userScore;
   } else {
    document.getElementById('msg').innerHTML = "Computer wins";
    console.log("Computer wins");
    document.getElementById('comp-score').innerHTML = ++computerScore;
  }
}

genComChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  x = Math.floor(Math.random() * 3);
  computerChoice = choices[x];
  console.log("Computer choice is", computerChoice);
  console.log(x);
  return computerChoice;
};


btn = document.querySelectorAll(".btn");

btn.forEach((choice) => {
  choice.addEventListener("click", function() {
    const userChoice = choice.getAttribute('id');
    console.log("Choice is clicked", userChoice);
    playGame(userChoice)
  });
})