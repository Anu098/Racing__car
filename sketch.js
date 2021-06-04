var covid;
var pinkBush;
var gaming;
var batterySaver, form, player;
var car95, car96, car100;
function setup(){
createCanvas(displayWidth,displayHeight)
covid=firebase.database();
batterySaver=new Game();
batterySaver.getGameState();
player=new Player();
//console.log(gaming);
//setTimeout(batterySaver.startGame(), 10000);
//batterySaver.startGame();


}
function draw(){
    player.getCount();
    if(pinkBush<4 && gaming===1){
        batterySaver.startGame();

    }
if(pinkBush===3){
batterySaver.updateGameState(2);
batterySaver.playGame();

}


}