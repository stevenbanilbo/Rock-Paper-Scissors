let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const board = document.querySelector(".box");
const result = document.querySelector(".result > p");
const rock = document.getElementById("selectRock");
const paper = document.getElementById("selectPaper");
const scissors = document.getElementById("selectScissors");





function selected(){


    rock.addEventListener('click', () => {

        game("Rock");

    })

    paper.addEventListener('click', () => {

        game("Paper");

    })

    scissors.addEventListener('click', () => {

        game("Scissors");

    })

    
}
selected();


function game(choice) {

    const computerChoice = getComputerChoice();
    

   // console.log('user choice:' + choice)
   // console.log('computer choice:' + computerChoice);


   switch(choice+computerChoice){

    case 'RockScissors':
    case 'PaperRock':
    case 'ScissorsPaper':
        userWin(choice, computerChoice);
    break;
    case 'RockPaper':
    case 'PaperScissors':
    case 'ScissorsRock':
        userLose(choice, computerChoice);
    break;
    case 'RockRock':
    case 'ScissorsScissors':
    case 'PaperPaer':
        draw(choice,computerChoice);

}


}


const getComputerChoice = () =>{
 
    const choices = ['Rock','Paper','Scissors']

    const value = Math.floor(Math.random() * 3)

    return choices[value];

}

//console.log(getComputerChoice());

function userWin(x, y){

    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUser = '(user)'.fontsize(1).sup();
    const compUser = '(cpu)'.fontsize(1).sup();
    result.innerHTML = `${(x)}${(smallUser)} wins over ${(y)} ${(compUser)}<br> YOU WIN!!`;
    

}

function userLose(x,y){
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUser = '(user)'.fontsize(1).sup();
    const compUser = '(cpu)'.fontsize(1).sup();
    result.innerHTML = `${(x)}${(smallUser)} loses over ${(y)} ${(compUser)}<br> YOU LOSE.`;
   

}

function draw(x,y){

    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUser = '(user)'.fontsize(1).sup();
    const compUser = '(cpu)'.fontsize(1).sup();
    result.innerHTML = `${(x)}${(smallUser)} draws with ${(y)} ${(compUser)}<br> WE HAVE A DRAW.`;

}