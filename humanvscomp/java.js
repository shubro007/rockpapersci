const rock=document.getElementById("rock")
const paper=document.getElementById("paper")
const scissor=document.getElementById("scissors")
let humanscoreele=document.getElementById("humanscore");
let compscoreele=document.getElementById("compscore");
let humanscore=parseInt(humanscoreele.textContent);
let compscore=parseInt(compscoreele.textContent);
let resultele=document.getElementById("result");



function getComputerChoice(){
    let computerselection;
    let randomnum=Math.floor(Math.random()*3);
    if (randomnum===0){
        computerselection="rock";
    }
    else if (randomnum===1){
        computerselection="paper";
    }
    else{
        computerselection="scissors";
    }
    return computerselection;
}

function getPlayerChoice(){

    rock.addEventListener('click',function(){
        playerselection="rock";
        playgame(playerselection,getComputerChoice())
    
    })
    paper.addEventListener('click',function(){
        playerselection="paper";
        playgame(playerselection,getComputerChoice())

    })
    scissor.addEventListener('click',function(){
        playerselection="scissors";
        playgame(playerselection,getComputerChoice())

    })
    
}

function playgame(playerselection,computerselection){

    if (playerselection===computerselection){
        console.log("DRAW!!");
    }
    else if(playerselection==="rock"){
        if (computerselection==="paper"){
            resultele.textContent=("you lose, paper beats rock")
            compscore=compscore+1;
            compscoreele.textContent=compscore
        }
        else if (computerselection==="scissors"){
            resultele.textContent=("you win, rock beats scissors")
            humanscore=humanscore+1;
            humanscoreele.textContent=humanscore

        }
    }
    else if(playerselection==="paper"){
        if (computerselection==="rock"){
            resultele.textContent=("you win, paper beats rock")
            humanscore=humanscore+1;
            humanscoreele.textContent=humanscore
        }
        else if (computerselection==="scissors"){
            resultele.textContent=("you lose, scissors beat paper")
            compscore=compscore+1;
            compscoreele.textContent=compscore

        }
    }
    else if(playerselection==="scissors"){
        if (computerselection==="rock"){
            resultele.textContent=("you lose, rock beats scissors")
            compscore=compscore+1;
            compscoreele.textContent=compscore

        }
        else if (computerselection==="paper"){
            resultele.textContent=("you win, scissors beats paper")
            humanscore=humanscore+1;
            humanscoreele.textContent=humanscore


        }
    }
}


getPlayerChoice();


