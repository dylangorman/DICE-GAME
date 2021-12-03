let Scores, RoundScores, PlayerActive, Playing;
start();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(Playing) {

        // 1. Random roll of dice
        let dice = Math.floor(Math.random() * 6) + 1;


        // DISPLAY RESULT 
        
        let pic = document.getElementById("dice-1");
        let diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-1' + dice + "dice1.png";
        if (dice == 1){
            pic.setAttribute("src", "dice1.png");
            nextPlayer();
            }
            if (dice == 2) {
            //Add score
            pic.setAttribute("src","dice2.png");
            RoundScores += dice;
            document.querySelector('#currentPlayer-' + PlayerActive).textContent = RoundScores;
        } 
        if (dice == 3) {
            //Add score
            pic.setAttribute("src", "dice3.png");
            RoundScores += dice;
            document.querySelector('#currentPlayer-' + PlayerActive).textContent = RoundScores;
        } 
        if (dice == 4) {
            //Add score
            pic.setAttribute("src", "dice4.png");
            RoundScores += dice;
            document.querySelector('#currentPlayer-' + PlayerActive).textContent = RoundScores;
        } 
        if (dice == 5) {
            //Add score
            pic.setAttribute("src", "dice5.png");
            RoundScores += dice;
            document.querySelector('#currentPlayer-' + PlayerActive).textContent = RoundScores;
        } 
        if (dice == 6) {
            //Add score
            pic.setAttribute("src", "dice6.png");
            RoundScores += dice;
            document.querySelector('#currentPlayer-' + PlayerActive).textContent = RoundScores;
        } 
    }    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (Playing) {
        // Add CURRENT score to TOTAL 
        Scores[PlayerActive] += RoundScores;
        // Update the UI
        document.querySelector('#s-' + PlayerActive).textContent = Scores[PlayerActive];
        let input = document.querySelector('.final-score').value;
        let winningScore;
    // ROLL 
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }
        
        // Check if player won the game
        if (Scores[PlayerActive] >= winningScore) {
            document.querySelector('#n-' + PlayerActive).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
           
        
            document.querySelector('.player-' + PlayerActive + '-box').classList.add('winner');
            document.querySelector('.player-' + PlayerActive + '-box').classList.remove('active');
            Playing = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});
document.querySelector('.btn-new').addEventListener('click', start);
function nextPlayer() {
    //Next player
    PlayerActive === 0 ? PlayerActive = 1 : PlayerActive = 0;
    RoundScores = 0;
    document.getElementById('currentPlayer-0').textContent = '0';
    document.getElementById('currentPlayer-1').textContent = '0';
    document.querySelector('.player-0-box').classList.toggle('active');
    document.querySelector('.player-1-box').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}
function start() {
    Scores = [0, 0];
    PlayerActive = 0;
    RoundScores = 0;
    Playing = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('s-0').textContent = '0';
    document.getElementById('s-1').textContent = '0';

    document.getElementById('currentPlayer-0').textContent = '0';
    document.getElementById('currentPlayer-1').textContent = '0';
    document.getElementById('n-0').textContent = 'Player 1';
    document.getElementById('n-1').textContent = 'Player 2';
    document.querySelector('.player-0-box').classList.remove('winner');
    document.querySelector('.player-1-box').classList.remove('winner');
    document.querySelector('.player-0-box').classList.remove('active');
    document.querySelector('.player-1-box').classList.remove('active');
    document.querySelector('.player-0-box').classList.add('active');
}
// DICE ROLL SOUND 
let dicey = document.getElementById("dicey");
diceRoll.addEventListener("click", () => {
    diceRoll.style.animation = "dice"
    dicey.pause()
    dicey.currentTime = 0
    dicey.play();
})
