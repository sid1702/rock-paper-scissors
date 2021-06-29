        const userChoiceDiv=document.getElementById('yourChoice');
        const compChoiceDiv=document.getElementById('machineChoice');

        const resultDiv=document.getElementById('resultDiv');
        const reloadDiv=document.getElementById('reloadDiv');

        const compScoreDiv=document.getElementById('machineScore');
        const userScoreDiv=document.getElementById('yourScore');
        
        let pointsForComp=0;
        let pointsForUser=0;

        compScoreDiv.innerHTML=pointsForComp;
        userScoreDiv.innerHTML=pointsForUser;

        function computerPlay(){
            let array = ["Rock", "Paper", "Scissors"];
            return array[Math.floor(Math.random() * array.length)].toLowerCase();
        }

        function playRound(playerSelection) {

            const computerSelection = computerPlay();
            
            console.log("Computer picked "+ computerSelection);
            compChoiceDiv.innerHTML=computerSelection;
            userChoiceDiv.innerHTML=playerSelection;

            if(computerSelection===playerSelection.toLowerCase())
            {
                resultDiv.innerHTML= "Draw! Play again";
                compScoreDiv.innerHTML=pointsForComp;
                userScoreDiv.innerHTML=pointsForUser;
                
            }
            else if(playerSelection.toLowerCase()==="rock" && computerSelection==="paper")
            {
                pointsForComp++;
                resultDiv.innerHTML= "You Lose! Paper beats Rock";
                compScoreDiv.innerHTML=pointsForComp;
                userScoreDiv.innerHTML=pointsForUser; 
            }
            else if(playerSelection.toLowerCase()==="rock" && computerSelection==="scissors"){
                pointsForUser++;
                resultDiv.innerHTML= "You Win! Rock beats Scissors";
                compScoreDiv.innerHTML=pointsForComp;
                userScoreDiv.innerHTML=pointsForUser; 
            }
            else if(playerSelection.toLowerCase()==="paper" && computerSelection==="scissors"){
                pointsForComp++;
                resultDiv.innerHTML= "You Lose! Scissors beats Paper";
                compScoreDiv.innerHTML=pointsForComp;
                userScoreDiv.innerHTML=pointsForUser; 
                
            }
            else if(playerSelection.toLowerCase()==="paper" && computerSelection==="rock"){
                pointsForUser++;
                resultDiv.innerHTML= "You Win! Paper beats Rock";
                compScoreDiv.innerHTML=pointsForComp;
                userScoreDiv.innerHTML=pointsForUser; 
            }
            else if(playerSelection.toLowerCase()==="scissors" && computerSelection==="paper"){
                pointsForUser++;
                resultDiv.innerHTML= "You Win! Paper beats scissors";
                compScoreDiv.innerHTML=pointsForComp;
                userScoreDiv.innerHTML=pointsForUser;
            }
            else if(playerSelection.toLowerCase()==="scissors" && computerSelection==="rock"){
                pointsForComp++;
                resultDiv.innerHTML= "You Lose! Rock beats Scissors";
                compScoreDiv.innerHTML=pointsForComp;
                userScoreDiv.innerHTML=pointsForUser;             
            }
            else{
                console.log("Error");
            }

            compScoreDiv.innerHTML=pointsForComp;
            userScoreDiv.innerHTML=pointsForUser;

            if(pointsForComp===5 || pointsForUser===5)
            {
                results();
                disableButtons();
                reloadDiv.innerHTML="Reload the page to play again!!!";
            }
        }
        const buttons = document.querySelectorAll('button');
        function disableButtons() {
            buttons.forEach(elem => {
                elem.disabled = true
            })
        }

        function results(){
            if(pointsForComp===pointsForUser){
                resultDiv.innerHTML= "Draw";
            }
            else if(pointsForComp>pointsForUser)
            {
                resultDiv.innerHTML= "Computer won! Points for computer: "+pointsForComp;
            }
            else{
                resultDiv.innerHTML= "You won! Points for User: "+pointsForUser;
            }
        }