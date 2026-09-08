let level = 1;

function setLevel(){

level = document.getElementById("level").value;

addBot("Great! Your culinary level is now " + level);

}

function sendMessage(){

const input=document.getElementById("userInput");

const msg=input.value;

if(msg=="") return;

addUser(msg);

processQuestion(msg.toLowerCase());

input.value="";

}

function addUser(text){

document.getElementById("chatbox").innerHTML +=

`<div class="user">${text}</div>`;

}

function addBot(text){

document.getElementById("chatbox").innerHTML +=

`<div class="bot">${text}</div>`;

}

function processQuestion(question){

if(question.includes("recipe")){

recipe();

return;

}

if(question.includes("history")){

history();

return;

}

if(question.includes("tuna")){

tunaGuide();

return;

}

if(question.includes("popular")){

popularFoods();

return;

}

if(question.includes("restaurant")){

restaurants();

return;

}

if(question.includes("grocery")){

grocery();

return;

}

if(question.includes("fun fact")){

funFacts();

return;

}

addBot("Ask me anything about Japanese food!");

}

function recipe(){

if(level==1){

addBot("Beginner Recipe:\nCalifornia Roll with imitation crab and cucumber.");

}

else if(level==2){

addBot("Intermediate Recipe:\nSpicy Tuna Roll with sushi rice, nori, avocado and fresh tuna.");

}

else{

addBot("Expert Recipe:\nTraditional Edomae Nigiri with proper sushi rice seasoning, knife techniques and fish aging.");

}

}

function history(){

addBot("Japanese cuisine evolved over 2,000 years. Sushi originally began as fermented fish preserved in rice before becoming modern nigiri in the Edo period.");

}

function tunaGuide(){

addBot(

`For sushi:

• Buy sashimi-grade or sushi-grade tuna from a trusted fish market or specialty grocery.

Common varieties:

- Bluefin (Otoro, Chutoro, Akami)

- Yellowfin (Ahi)

- Bigeye

Avoid regular supermarket tuna intended for cooking.

Freeze according to food safety guidelines if required.`);

}

function popularFoods(){

addBot(

`Top 5 Japanese Foods

1. Sushi

2. Ramen

3. Tempura

4. Udon

5. Yakitori`

);

}

function funFacts(){

addBot(

`Fun Facts!

🍣 Japan has over 30,000 sushi restaurants.

🍜 Instant ramen was invented in Japan.

🍙 Rice is considered sacred in Japanese culture.

🐟 Bluefin tuna can sell for over $1 million.

🥢 Slurping noodles is considered polite.`);

}

function restaurants(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(position=>{

let lat=position.coords.latitude;

let lon=position.coords.longitude;

window.open(

`https://www.google.com/maps/search/Japanese+Restaurants/@${lat},${lon},15z`

);

});

}

}

function grocery(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(position=>{

let lat=position.coords.latitude;

let lon=position.coords.longitude;

window.open(

`https://www.google.com/maps/search/Japanese+Grocery/@${lat},${lon},15z`

);

});

}

}