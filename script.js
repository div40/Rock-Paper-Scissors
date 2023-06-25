const score=JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

updateScoreElement();


function playGame(playerMove){
        const computerMove= pickComputerMove();
    
    let result=('');
        if (playerMove==='scissors'){
                if(computerMove==='rock'){
                result='You LOSE!';
            }
            else if(computerMove==='paper'){
                result='You WIN!';
            }
            else if(computerMove==='scissors'){
                result='TIE';
            }
        }
        else if (playerMove==='paper'){
            if(computerMove==='rock'){
                    result='You WIN!'
                }
                else if(computerMove==='paper'){
                    result='TIE';
                }
                else if(computerMove==='scissors'){
                    result='You LOSE!';
                }
        }
        else if (playerMove==='rock'){
            if(computerMove==='rock'){
                        result='TIE'
                    }
                    else if(computerMove==='paper'){
                        result='You LOSE!';
                    }
                    else if(computerMove==='scissors'){
                        result='You WIN!';
                    }
        }

        if (result==='You WIN!'){
            score.wins+=1
        }
        else if(result==='You LOSE!'){
            score.losses+=1;
        }
        else if(result==='TIE'){
            score.ties+=1;
        }
        localStorage.setItem('score',JSON.stringify(score));

        updateScoreElement();
        document.querySelector('.js-result').innerHTML = result;

        document.querySelector('.js-moves').innerHTML = ` You 
    <img src="images/${playerMove}-emoji.png"  class="move-icon">
    <img src="images/${computerMove}-emoji.png"  class="move-icon">
    Computer`;

    

}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
    let computerMove=('');
    const randomNumber=Math.random();

if(randomNumber>=0 && randomNumber<1/3)
{
     computerMove='rock';
}
    else if(randomNumber>=1/3 && randomNumber<2/3)
    {
         computerMove='paper';
    }
        else{
             computerMove='scissors';
        }
        return computerMove;
}

/*function resetScore(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
}*/