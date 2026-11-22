//CACHED ELEMENTS
const cardElements = document.querySelectorAll('.game-card');
console.log(cardElements)
const cardBack = "./assets/card-back.jpg"




//VARIABLES


let firstCard = null;
let secondCard = null;

let firstCardName = " ";
let secondCardName = " ";

matchedCards = [];



//FUNCTIONS


//function to unflip a card and return it to its back state
function unflip(card){
    card.src = cardBack;
    
}


//function to check if the cards are a match and add them to matched cards array
function matchFound(){
    if(firstCardName === secondCardName){
        matchedCards.push(firstCard);
        matchedCards.push(secondCard);

        firstCard = null;
        secondCard = null;
        firstCardName = " ";
        secondCardName = " ";

    }
    else{
        unflip(firstCard)
        unflip(secondCard)

        firstCard = null;
        secondCard = null ;
        firstCardName = " ";
        secondCardName = " ";
    }
}



//EVENT LISTENERS
cardElements[0].addEventListener('click',() =>{
    
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
        
         

        }
        );
cardElements[1].addEventListener('click',() =>{
    
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
cardElements[2].addEventListener('click',() =>{
    
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
cardElements[3].addEventListener('click',() =>{
    
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
cardElements[4].addEventListener('click',() =>{
    
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
cardElements[5].addEventListener('click',() =>{
    
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
cardElements[6].addEventListener('click',() =>{
    
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
cardElements[7].addEventListener('click',() =>{
    
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
cardElements[8].addEventListener('click',() =>{
    
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
cardElements[9].addEventListener('click',() =>{
    
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
cardElements[10].addEventListener('click',() =>{
    
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
cardElements[11].addEventListener('click',() =>{
    
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

