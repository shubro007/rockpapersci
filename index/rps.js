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
    let playerselection=prompt("Enter your choice(rock/paper/scissors");
    playerselection=playerselection.toLowerCase();
    console.log((playerselection));
    if (playerselection!=="rock" && playerselection!=="paper" && playerselection!=="scissors"){
       alert("wrong input");
       getPlayerChoice();
    }
    else{
        return playerselection;
    }
}

function playgame(playerselection,computerselection){
    if (playerselection===computerselection){
        console.log("DRAW!!");
    }
    else if(playerselection==="rock"){
        if (computerselection==="paper"){
            console.log("you lose, paper beats rock")
        }
        else if (computerselection==="scissors"){
            console.log("you win, rock beats scissors")
        }
    }
    else if(playerselection==="paper"){
        if (computerselection==="rock"){
            console.log("you win, paper beats rock")
        }
        else if (computerselection==="scissors"){
            console.log("you lose, scissors beat paper")
        }
    }
    else if(playerselection==="scissors"){
        if (computerselection==="rock"){
            console.log("you lose, rock beats scissors")
        }
        else if (computerselection==="paper"){
            console.log("you win, scissors beats paper")
        }
    }
}

function game(){
    for (let i=1; i<=5; i++){
        playgame(getPlayerChoice(),getComputerChoice());
    }
}

//game();



