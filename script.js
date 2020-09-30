const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');
const winner = document.getElementById('winner');

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const model = document.getElementById('model');

const choices = ['paper', 'rock', 'scissors'];

let score = 0;
let userChoice =undefined;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        
        checkWinner();
    });
});
reset.addEventListener('click', () => {
     //show the section || hide main
     main.style.display = 'flex';
     selection.style.display = 'none';
});
openBtn.addEventListener('click', () => {
    model.style.display = 'flex';
});
closeBtn.addEventListener('click', () => {
    model.style.display = 'none';
});

function checkWinner(){
    const computerChoice = pickRandomChoice();
    updateSelection(user_select, userChoice);
    updateSelection(computer_select, computerChoice)

    if(userChoice === computerChoice){
        //draw
        winner.innerText = 'draw';
    } else if((userChoice === 'paper' && computerChoice === 'rock') || 
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        //user won
        updateScore();
        winner.innerText = 'win';
    }else{
        //user lost
        winner.innerText = 'lost';
    }
    //show the section || hide main
    main.style.display = 'none';
    selection.style.display = 'flex';
}

function updateScore(value){
    score += 1;
    scoreEl.innerText = score;
}

function pickRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
function updateSelection(selectionEl, choice){
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');
    const img = selectionEl.querySelector('img');
    selectionEl.classList.add('btn-${choice}');
    if(choice==='rock') img.src = './images/icon-rock.svg';
    else if(choice==='scissors') img.src = './images/icon-scissors.svg';
    else img.src = './images/icon-paper.svg';
    img.alt = choice;
}