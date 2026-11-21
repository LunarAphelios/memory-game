//CACHED ELEMENTS
const cardElements = document.querySelectorAll('.game-card');
console.log(cardElements)
const cardBack = "./assets/card-back.jpg"




//VARIABLES
isCardFlipped = false;
let firstCard = null;
let secondCard = null;





//FUNCTIONS

//function to identify a card as flipped
function flip(card){
    card.src = "./assets/${card.id}.jpg"
    card.classList.add('flipped'); 
}

//function to unflip a card and return it to its back state
function unflip(card){
    card.src = cardBack;
    card.classList.remove('flipped');
}

//function to check if the cards are a match
function matchFound(){
    if(firstCard.id === secondCard.id){
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');

    }
}



//EVENT LISTENERS
cardElements[0].addEventListener('click',() =>{
    
        cardElements[0].src = "./assets/star.jpg"
        cardElements[0].textContent = "star";
        

        }
        );
cardElements[1].addEventListener('click',() =>{
    
        cardElements[1].src = "./assets/shield.jpg"
        cardElements[1].textContent = "shield";

       
            
    
});
cardElements[2].addEventListener('click',() =>{
    
        cardElements[2].src = "./assets/heart.jpg"
        cardElements[2].textContent = "heart";

      
    
});
cardElements[3].addEventListener('click',() =>{
    
        cardElements[3].src = "./assets/headset.jpg"
        cardElements[3].textContent = "headset";
    
       
    
});
cardElements[4].addEventListener('click',() =>{
    
        cardElements[4].src = "./assets/cloud.jpg"
        cardElements[4].textContent = "cloud";
    
      
    
});
cardElements[5].addEventListener('click',() =>{
    
        cardElements[5].src = "./assets/cherry.jpg"
        cardElements[5].textContent = "cherry";
    
      
    
});
cardElements[6].addEventListener('click',() =>{
    
        cardElements[6].src = "./assets/star.jpg"
        cardElements[6].textContent = "star";
    
     
});
cardElements[7].addEventListener('click',() =>{
    
        cardElements[7].src = "./assets/shield.jpg"
        cardElements[7].textContent = "shield";
    
      
});
cardElements[8].addEventListener('click',() =>{
    
        cardElements[8].src = "./assets/heart.jpg"
        cardElements[8].textContent = "heart";
    
    
});
cardElements[9].addEventListener('click',() =>{
    
        cardElements[9].src = "./assets/cloud.jpg"
        cardElements[9].textContent = "cloud";

    
});
cardElements[10].addEventListener('click',() =>{
    
        cardElements[10].src = "./assets/headset.jpg"
        cardElements[10].textContent = "headset";

      
    
});
cardElements[11].addEventListener('click',() =>{
    
        cardElements[11].src = "./assets/cherry.jpg"
        cardElements[11].textContent = "cherry";

});

