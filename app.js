//CACHED ELEMENTS
const cardElements = document.querySelectorAll('.game-card');
console.log(cardElements)




//VARIABLES
isCardFlipped = false;
let firstCard = " ";
let secondCard = " ";
let matchFound = false;




//FUNCTIONS


//EVENT LISTENERS
cardElements[0].addEventListener('click',() =>{
    
        cardElements[0].src = "./assets/star.jpg"
        cardElements[0].textContent = "star";
        if(firstCard === " "){
            firstCard = cardElements[0].textContent;
            console.log(firstCard)
        }
        else if (secondCard=== " ")
        {
            secondCard = cardElements[0].textContent;
            console.log(secondCard)
        }

        if(firstCard === secondCard){
            matchFound = true;
            console.log(matchFound);
            firstCard = " ";
            secondCard = " ";
        }
            
    
});
cardElements[1].addEventListener('click',() =>{
    
        cardElements[1].src = "./assets/shield.jpg"
        cardElements[1].textContent = "shield";

        if(firstCard === " "){
            firstCard = cardElements[1].textContent;
            console.log(firstCard)
        }
        else if (secondCard === " ")
            secondCard = cardElements[1].textContent;

        if(firstCard === secondCard){
            matchFound = true;
            console.log(matchFound);
            firstCard = " ";
            secondCard = " ";
        }
            
    
});
cardElements[2].addEventListener('click',() =>{
    
        cardElements[2].src = "./assets/heart.jpg"
        cardElements[2].textContent = "heart";

        if(firstCard === " "){
            firstCard = cardElements[2].textContent;
        }
        else if(secondCard === " ")
        {
            secondCard = cardElements[2].textContent;
        }

        if(firstCard === secondCard){
            matchFound= true;
            console.log(matchFound);
             firstCard = " ";
            secondCard = " ";
        }
    
});
cardElements[3].addEventListener('click',() =>{
    
        cardElements[3].src = "./assets/headset.jpg"
        cardElements[3].textContent = "headset";
    
        if(firstCard === " "){
            firstCard = cardElements[3].textContent;
        }
        else if(secondCard === " ")
        {
            secondCard = cardElements[3].textContent;
        }

        if(firstCard === secondCard){
            matchFound= true;
            console.log(matchFound);
             firstCard = " ";
            secondCard = " ";
        }
    
});
cardElements[4].addEventListener('click',() =>{
    
        cardElements[4].src = "./assets/cloud.jpg"
        cardElements[4].textContent = "cloud";
    
        if(firstCard === " "){
            firstCard = cardElements[4].textContent;
        }
        else if(secondCard === " ")
        {
            secondCard = cardElements[4].textContent;
        }

        if(firstCard === secondCard){
            matchFound= true;
            console.log(matchFound);
             firstCard = " ";
            secondCard = " ";
        }
    
});
cardElements[5].addEventListener('click',() =>{
    
        cardElements[5].src = "./assets/cherry.jpg"
        cardElements[5].textContent = "cherry";
    
        if(firstCard === " "){
            firstCard = cardElements[5].textContent;
        }
        else if(secondCard === " ")
        {
            secondCard = cardElements[5].textContent;
        }

        if(firstCard === secondCard){
            matchFound= true;
            console.log(matchFound);
             firstCard = " ";
            secondCard = " ";
        }
    
});
cardElements[6].addEventListener('click',() =>{
    
        cardElements[6].src = "./assets/star.jpg"
        cardElements[6].textContent = "star";
    
        if(firstCard === " "){
            firstCard = cardElements[6].textContent;
        }
        else if(secondCard === " ")
        {
            secondCard = cardElements[6].textContent;
        }

        if(firstCard === secondCard){
            matchFound= true;
            console.log(matchFound);
             firstCard = " ";
            secondCard = " ";
        }
    
});
cardElements[7].addEventListener('click',() =>{
    
        cardElements[7].src = "./assets/shield.jpg"
        cardElements[7].textContent = "shield";
    
        if(firstCard === " "){
            firstCard = cardElements[7].textContent;
        }
        else if(secondCard === " ")
        {
            secondCard = cardElements[7].textContent;
        }

        if(firstCard === secondCard){
            matchFound= true;
            console.log(matchFound);
             firstCard = " ";
            secondCard = " ";
        }
    
});
cardElements[8].addEventListener('click',() =>{
    
        cardElements[8].src = "./assets/heart.jpg"
        cardElements[8].textContent = "heart";
    
        if(firstCard === " "){
            firstCard = cardElements[8].textContent;
        }
        else if(secondCard === " ")
        {
            secondCard = cardElements[8].textContent;
        }

        if(firstCard === secondCard){
            matchFound= true;
            console.log(matchFound);
             firstCard = " ";
            secondCard = " ";
        }
    
});
cardElements[9].addEventListener('click',() =>{
    
        cardElements[9].src = "./assets/cloud.jpg"
        cardElements[9].textContent = "cloud";

        if(firstCard === " "){
            firstCard = cardElements[9].textContent;
        }
        else if(secondCard === " ")
        {
            secondCard = cardElements[9].textContent;
        }

        if(firstCard === secondCard){
            matchFound= true;
            console.log(matchFound);
             firstCard = " ";
            secondCard = " ";
        }
    
});
cardElements[10].addEventListener('click',() =>{
    
        cardElements[10].src = "./assets/headset.jpg"
        cardElements[10].textContent = "headset";

        if(firstCard === " "){
            firstCard = cardElements[10].textContent;
        }
        else if(secondCard === " ")
        {
            secondCard = cardElements[10].textContent;
        }

        if(firstCard === secondCard){
            matchFound= true;
            console.log(matchFound);
             firstCard = " ";
            secondCard = " ";
        }
    
});
cardElements[11].addEventListener('click',() =>{
    
        cardElements[11].src = "./assets/cherry.jpg"
        cardElements[11].textContent = "cherry";

        if(firstCard === " "){
            firstCard = cardElements[11].textContent;
        }
        else if(secondCard === " ")
        {
            secondCard = cardElements[11].textContent;
        }

        if(firstCard === secondCard){
            matchFound= true;
            console.log(matchFound);
             firstCard = " ";
            secondCard = " ";
        }
    
});

