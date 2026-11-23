//CACHED ELEMENTS
const cardElements = document.querySelectorAll('.game-card');
const messageElement = document.querySelector('#message');
const startButton = document.querySelector('#start');
const playAgainButton = document.querySelector('#again');

const timerElement = document.querySelector('#time');
const timerLabelElement = document.querySelector('#timer-label');

const wrongLabelElement = document.querySelector('#wrong-label');
const wrongCounterElement = document.querySelector('#wrong-counter');



//VARIABLES
const cardBack = "./assets/card-back.jpg"

let firstCard = null;
let secondCard = null;

let firstCardName = " ";
let secondCardName = " ";

let matchCounter = 0;
let wrongMovesCounter = 0;
let timer ;

wrongLabelElement.textContent = " ";


//FUNCTIONS

//function to set a timer ; when time is done, lose message is displayed
function countDown(){
    clearInterval(timer)
    let count = 25;
    timerElement.textContent = count;

    timer = setInterval(function(){
        count--;
        timerElement.textContent = count;

        if(matchCounter === 6)
        {
            messageElement.textContent = "you win!"
            clearInterval(timer);
            timerElement.textContent = " ";
            cardElements.forEach(element => {
                element.classList.add('time-up')
            });
            playAgainButton.disabled = false;
            timerLabelElement.textContent = " ";
            wrongCounterElement.textContent = " ";
            wrongLabelElement.textContent = " ";
        }
        if (wrongMovesCounter >= 3)
        {
            messageElement.textContent = "you lose!"
            
            clearInterval(timer);
            timerElement.textContent = " ";
            cardElements.forEach(element => {
                element.classList.add('time-up')
            });
            playAgainButton.disabled = false;
            timerLabelElement.textContent = " ";
            wrongCounterElement.textContent = " ";
            wrongLabelElement.textContent = " ";
        }

        if(count === 0){
            clearInterval(timer);
            messageElement.textContent = "time's up ! you lose";
             
    
            cardElements.forEach(element => {
                element.classList.add('time-up')
            });
            playAgainButton.disabled = false;
            
        }
    },1000);
}

//function to unflip a card and return it to its back state
function unflip(card){
    card.src = cardBack;
    
}


//function to check if the cards are a match and add them to matched cards array
function matchFound(){
    if(firstCardName === secondCardName){
        
        matchCounter ++ ;
        firstCard = null;
        secondCard = null;
        firstCardName = " ";
        secondCardName = " ";

        messageElement.textContent = "correct match!";

        
    }
    else{
        
        setTimeout(() =>{ 
        unflip(firstCard)
        unflip(secondCard)
    
        messageElement.textContent = "wrong match!";
        wrongMovesCounter ++ ;
        wrongLabelElement.textContent = "wrong moves: ";
        wrongCounterElement.textContent = wrongMovesCounter;
        firstCard.classList.remove('no-click')
        secondCard.classList.remove('no-click')

        
        firstCard = null;
        secondCard = null ;
        firstCardName = " ";
        secondCardName = " ";
        },700);
    }
}





//EVENT LISTENERS
cardElements[0].addEventListener('click',(event) =>{
    console.log(event.target)
        event.target.classList.add('no-click')
        cardElements[0].src = "./assets/star.jpg"
        cardElements[0].textContent = "star";

        

        if(firstCard === null){
            firstCard = cardElements[0];
            firstCardName = "star";
            
        }
        else{
            secondCard = cardElements[0];
            secondCardName = "star";

            
            matchFound();
        }
        
        
         console.log(firstCard, secondCard)

        }
        );
cardElements[1].addEventListener('click',(event) =>{
         event.target.classList.add('no-click')
        cardElements[1].src = "./assets/shield.jpg"
        cardElements[1].textContent = "shield";

       
       if(firstCard === null){
            firstCard = cardElements[1];
            firstCardName = "shield";
            
        }
        else{
            secondCard = cardElements[1];
            secondCardName = "shield";

            
            matchFound();
        }
            
    
});
cardElements[2].addEventListener('click',(event) =>{
         event.target.classList.add('no-click')
        cardElements[2].src = "./assets/heart.jpg"
        cardElements[2].textContent = "heart";

      
      if(firstCard === null){
            firstCard = cardElements[2];
            firstCardName = "heart";
            
        }
        else{
            secondCard = cardElements[2];
            secondCardName = "heart";

            
            matchFound();
        }
    
});
cardElements[3].addEventListener('click',(event) =>{
         event.target.classList.add('no-click')
        cardElements[3].src = "./assets/headset.jpg"
        cardElements[3].textContent = "headset";
    
       
       if(firstCard === null){
            firstCard = cardElements[3];
            firstCardName = "headset";
            
        }
        else{
            secondCard = cardElements[3];
            secondCardName = "headset";

           
            matchFound();
            
        }
    
});
cardElements[4].addEventListener('click',(event) =>{
         event.target.classList.add('no-click')
        cardElements[4].src = "./assets/cloud.jpg"
        cardElements[4].textContent = "cloud";
    
      
      if(firstCard === null){
            firstCard = cardElements[4];
            firstCardName = "cloud";
            
        }
        else{
            secondCard = cardElements[4];
            secondCardName = "cloud";

           
            matchFound();
        }
    
});
cardElements[5].addEventListener('click',(event) =>{
         event.target.classList.add('no-click')
        cardElements[5].src = "./assets/cherry.jpg"
        cardElements[5].textContent = "cherry";
    
        
        if(firstCard === null){
            firstCard = cardElements[5];
            firstCardName = "cherry";
            
        }
        else{
            secondCard = cardElements[5];
            secondCardName = "cherry";

            matchFound();
        }
    
});
cardElements[6].addEventListener('click',(event) =>{
         event.target.classList.add('no-click')
        cardElements[6].src = "./assets/star.jpg"
        cardElements[6].textContent = "star";
    
        
        if(firstCard === null){
            firstCard = cardElements[6];
            firstCardName = "star";
            
        }
        else{
            secondCard = cardElements[6];
            secondCardName = "star";

            matchFound();
        }
     
});
cardElements[7].addEventListener('click',(event) =>{
         event.target.classList.add('no-click')
        cardElements[7].src = "./assets/shield.jpg"
        cardElements[7].textContent = "shield";
    
        
        if(firstCard === null){
            firstCard = cardElements[7];
            firstCardName = "shield";
            
        }
        else{
            secondCard = cardElements[7];
            secondCardName = "shield";

            matchFound();
        }
});
cardElements[8].addEventListener('click',(event) =>{
         event.target.classList.add('no-click')
        cardElements[8].src = "./assets/heart.jpg"
        cardElements[8].textContent = "heart";
    
        
        if(firstCard === null){
            firstCard = cardElements[8];
            firstCardName = "heart";
            
        }
        else{
            secondCard = cardElements[8];
            secondCardName = "heart";

            matchFound();
        }
});
cardElements[9].addEventListener('click',(event) =>{
         event.target.classList.add('no-click')
        cardElements[9].src = "./assets/cloud.jpg"
        cardElements[9].textContent = "cloud";

    
        
        if(firstCard === null){
            firstCard = cardElements[9];
            firstCardName = "cloud";
            
        }
        else{
            secondCard = cardElements[9];
            secondCardName = "cloud";

            matchFound();
        }
});
cardElements[10].addEventListener('click',(event) =>{
         event.target.classList.add('no-click')
        cardElements[10].src = "./assets/headset.jpg"
        cardElements[10].textContent = "headset";

      
      if(firstCard === null){
            firstCard = cardElements[10];
            firstCardName = "headset";
            
        }
        else{
            secondCard = cardElements[10];
            secondCardName = "headset";

            matchFound();
        }
    
});
cardElements[11].addEventListener('click',(event) =>{
        event.target.classList.add('no-click')
        cardElements[11].src = "./assets/cherry.jpg"
        cardElements[11].textContent = "cherry";

        
        if(firstCard === null){
            firstCard = cardElements[11];
            firstCardName = "cherry";
            
        }
        else{
            secondCard = cardElements[11];
            secondCardName = "cherry";

            matchFound();
        }
});

startButton.addEventListener('click',() =>{
    startButton.disabled = true;
    cardElements.forEach(element => {
        element.classList.remove('time-up')
    });
    matchCounter = 0;
    wrongMovesCounter = 0;

    countDown(25);
   
})

playAgainButton.addEventListener('click',() => {
    playAgainButton.disabled= true;
    cardElements.forEach(element => {
        unflip(element)
        element.classList.remove('time-up')
        element.classList.remove('no-click')
    });
    matchCounter = 0;
    wrongMovesCounter = 0;
    messageElement.textContent = " ";
    timerLabelElement.textContent = "Time remaining";


    countDown(25);

})
