//CACHED ELEMENTS
const cardElements = document.querySelectorAll('.game-card');
const messageElement = document.querySelector('#message');
const startButton = document.querySelector('#start');
const helpButton = document.querySelector('#help');

const timerElement = document.querySelector('#time-label');





//VARIABLES
const cardBack = "./assets/card-back.jpg"

let firstCard = null;
let secondCard = null;

let firstCardName = " ";
let secondCardName = " ";

let movesCount = 0;
let timer ;



//FUNCTIONS

function countDown(){
    clearInterval(timer)
    let count = 25;
    timerElement.textContent = count;

    timer = setInterval(function(){
        count--;
        timerElement.textContent = count;

        if(count === 0){
            clearInterval(timer);
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
       
        firstCard = null;
        secondCard = null;
        firstCardName = " ";
        secondCardName = " ";

    }
    else{
        unflip(firstCard)
        unflip(secondCard)

        movesCount ++ ;
        firstCard = null;
        secondCard = null ;
        firstCardName = " ";
        secondCardName = " ";
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

            event.target.classList.remove('no-click')
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

            event.target.classList.remove('no-click')
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

            event.target.classList.remove('no-click')
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

            event.target.classList.remove('no-click')
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

            event.target.classList.remove('no-click')
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

            event.target.classList.event('no-click')
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

            event.target.classList.remove('no-click')
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

            event.target.classList.remove('no-click')
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

            event.target.classList.remove('no-click')
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

            event.target.classList.remove('no-click')
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

            event.target.classList.remove('no-click');
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

            event.target.classList.remove('no-click')
            matchFound();
        }
});

startButton.addEventListener('click',() =>{
    startButton.disabled = true;
    countDown(25);
})
