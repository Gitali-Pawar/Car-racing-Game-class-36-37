var gameState = 0;
var database;
var game;
var form;
var player;
var playerCount = 0;
var allPlayers;



function setup(){
createCanvas(400,400);
database = firebase.database();
 
game = new Game();



}

function draw(){
 if(playerCount === 4){
 game.update(1)
 }


}