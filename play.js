// setting the player and computer choices to null
const player = {
  currentChoice: null
};
const computer = {
  currentChoice: null
};

// index 0 : Lapis = Rock
// index 1: Papyrus = Paper
// index 2: Scalpellus = Scissors
const choices = ["Lapis", "Papyrus", "Scalpellus"];

// This function creates a random choice for the computer after the user clicks a button 
function computerChooses(e) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
}

//function to compare the choices between the computer and the user's choice
function compareChoices(event){
  player.currentChoice = event.currentTarget.innerText
  computerChooses()
  
  //if the users choice and the computer choice is the same
  if(computer.currentChoice === player.currentChoice){
    document.getElementById("results").innerText="It's a tie! Both players won and they selected " + computer.currentChoice;
    //and computer choice is Lapis = Rock 
  }else if(computer.currentChoice === choices[0]){
    //players choice is Papyrus = Paper, then the user wins 
    if(player.currentChoice === choices[1]){
      document.getElementById("results").innerText="Player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
    }else{ // if the user's selection is not paper, then the computer wins
      document.getElementById("results").innerText="Computer wins! computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
    }   // if the computers selection is Papyrus = Paper, which is choices[1]
  }else if(computer.currentChoice === choices[1]){
    // if the players selection is Scalpellus = Scissors, then the player wins
    if(player.currentChoice === choices[2]){
      document.getElementById("results").innerText="Player wins! computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
    }else{ // if the players selection is not Scalpellus = Scissors, then computer wins
     document.getElementById("results").innerText="Computer wins! computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice; 
    } // if the computers selection is Scalpellus = Scissors, which is choices[2]
  }else if(computer.currentChoice === choices[2]){
    if(player.currentChoice === choices[0]){ //players choice is Lapis = Rock, then the user wins 
      document.getElementById("results").innerText="Player wins! computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
    }else{ // else the other option is Papyrus = Paper so, the computers wins 
      document.getElementById("results").innerText="Computer wins! computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice;
    }
   }  
  }
// gets the id's based on the button click
document.getElementById("lapis").addEventListener("click", compareChoices);
document.getElementById("papyrus").addEventListener("click", compareChoices);
document.getElementById("scalpellus").addEventListener("click", compareChoices);
