let pointsForComp=0;
        let pointsForUser=0;
        function computerPlay(){
            let array = ["Rock", "Paper", "Scissors"];
            return array[Math.floor(Math.random() * array.length)].toLowerCase();
        }

        function playRound(playerSelection) {

            const computerSelection = computerPlay();
            console.log("Computer picked "+ computerSelection);
            if(computerSelection===playerSelection.toLowerCase())
            {
                return ("Draw! Play again \nPoints for computer: "+ pointsForComp + "\nPoints for You: "+ pointsForUser);
                
            }
            else if(playerSelection.toLowerCase()==="rock" && computerSelection==="paper")
            {
                pointsForComp++;
                return ("You Lose! Paper beats Rock \nPoints for computer: "+ pointsForComp+"\nPoints for You: "+ pointsForUser); 
            }
            else if(playerSelection.toLowerCase()==="rock" && computerSelection==="scissors"){
                pointsForUser++;
                return ("You Win! Rock beats Scissors \nPoints for computer: "+ pointsForComp+"\nPoints for You: "+ pointsForUser);
            }
            else if(playerSelection.toLowerCase()==="paper" && computerSelection==="scissors"){
                pointsForComp++;
                return ("You Lose! Scissors beats Paper \nPoints for computer: "+ pointsForComp+"\nPoints for You: "+ pointsForUser);
                
            }
            else if(playerSelection.toLowerCase()==="paper" && computerSelection==="rock"){
                pointsForUser++;
                return ("You Win! Paper beats Rock \nPoints for computer: "+ pointsForComp+"\nPoints for You: "+ pointsForUser);
            }
            else if(playerSelection.toLowerCase()==="scissors" && computerSelection==="paper"){
                pointsForUser++;
                console.log("You Win! Paper beats scissors \nPoints for computer: "+ pointsForComp+"\nPoints for You: "+ pointsForUser);
            }
            else if(playerSelection.toLowerCase()==="scissors" && computerSelection==="rock"){
                pointsForComp++;
                console.log("You Lose! Rock beats Scissors \nPoints for computer: "+ pointsForComp+"\nPoints for You: "+ pointsForUser);               
            }
            else{
                console.log("Error");
            }
        }

        function results(){
            if(pointsForComp===pointsForUser){
                return "Draw";
            }
            else if(pointsForComp>pointsForUser)
            {
                return "Computer won! Points for computer: "+pointsForComp;
            }
            else{
                return "You won! Points for User: "+pointsForUser;
            }
        }

        function game(){
            
                
                for(let i=0;i<=4;i++)
                {
                    const playerSelection = prompt ("Choose your weapon!");
                    console.log(playRound(playerSelection));
                    
                }
                console.log(results());
            
        }

        game();