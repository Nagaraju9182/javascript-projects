
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const buttons = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const resetBtn = document.getElementById('reset-btn');

let playerChoice = '';
let computerChoice = '';


function determineWinner(player, computer) {
  if (player === computer) {
    return 'tie';
  }
  if (
    (player === 'rock' && (computer === 'scissors' || computer === 'lizard')) ||
    (player === 'paper' && (computer === 'rock' || computer === 'spock')) ||
    (player === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
    (player === 'lizard' && (computer === 'spock' || computer === 'paper')) ||
    (player === 'spock' && (computer === 'rock' || computer === 'scissors'))
  ) {
    return 'player';
  }
  return 'computer';
}

function runConfetti() {
  const confettiSettings = { target: 'confetti-canvas', size: 2, clock: 30 };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  setTimeout(() => {
    confetti.clear();
  }, 3000);  
}


buttons.forEach(button => {
  button.addEventListener('click', () => {
    playerChoice = button.getAttribute('data-choice');
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    const winner = determineWinner(playerChoice, computerChoice);
    
    if (winner === 'player') {
      resultText.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
      runConfetti();
    } else if (winner === 'computer') {
      resultText.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    } else {
      resultText.textContent = `It's a tie! You both chose ${playerChoice}`;
    }
  });
});


resetBtn.addEventListener('click', () => {
  resultText.textContent = 'Make your choice!';
});
