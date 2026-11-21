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
    isCardFlipped = true;
    card.classList.add('flipped'); 
}

//function to unflip a card and return it to its back state
function unflip(card){
    card.src = cardBack;
    card.classList.remove('flipped');
    isCardFlipped = false;
}

//function to check if the cards are a match
function matchFound(){
    if(firstCard.id === secondCard.id){
        firstCard.classList.add('match');
        secondCard.classList.add('match');

        firstCard = null;
        secondCard = null ;

    }
}



//EVENT LISTENERS
cardElements[0].addEventListener('click',() =>{
    
        cardElements[0].src = "./assets/star.jpg"
        cardElements[0].textContent = "star";
        
         flip(cardElements[0])

        }
        );
cardElements[1].addEventListener('click',() =>{
    
        cardElements[1].src = "./assets/shield.jpg"
        cardElements[1].textContent = "shield";

       flip(cardElements[1])
            
    
});
cardElements[2].addEventListener('click',() =>{
    
        cardElements[2].src = "./assets/heart.jpg"
        cardElements[2].textContent = "heart";

      flip(cardElements[2])
    
});
cardElements[3].addEventListener('click',() =>{
    
        cardElements[3].src = "./assets/headset.jpg"
        cardElements[3].textContent = "headset";
    
       flip(cardElements[3])
    
});
cardElements[4].addEventListener('click',() =>{
    
        cardElements[4].src = "./assets/cloud.jpg"
        cardElements[4].textContent = "cloud";
    
      flip(cardElements[4])
    
});
cardElements[5].addEventListener('click',() =>{
    
        cardElements[5].src = "./assets/cherry.jpg"
        cardElements[5].textContent = "cherry";
    
        flip(cardElements[5])
    
});
cardElements[6].addEventListener('click',() =>{
    
        cardElements[6].src = "./assets/star.jpg"
        cardElements[6].textContent = "star";
    
        flip(cardElements[6])
     
});
cardElements[7].addEventListener('click',() =>{
    
        cardElements[7].src = "./assets/shield.jpg"
        cardElements[7].textContent = "shield";
    
        flip(cardElements[7])
});
cardElements[8].addEventListener('click',() =>{
    
        cardElements[8].src = "./assets/heart.jpg"
        cardElements[8].textContent = "heart";
    
        flip(cardElements[8])
});
cardElements[9].addEventListener('click',() =>{
    
        cardElements[9].src = "./assets/cloud.jpg"
        cardElements[9].textContent = "cloud";

    
        flip(cardElements[9])
});
cardElements[10].addEventListener('click',() =>{
    
        cardElements[10].src = "./assets/headset.jpg"
        cardElements[10].textContent = "headset";

      flip(cardElements[10])
    
});
cardElements[11].addEventListener('click',() =>{
    
        cardElements[11].src = "./assets/cherry.jpg"
        cardElements[11].textContent = "cherry";

        flip(cardElements[11])
});

