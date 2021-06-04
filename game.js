class Game{
constructor(){

}
    startGame(){
    console.log("startGame");
   // await this.getGameState();
    if(gaming===1){
        player= new Player();
        player.getCount();  
    form=new Form();
    form.display();

    }
    car95=createSprite(100,100,50,50);
    car96=createSprite(200,100,50,50);
    car100=createSprite(300,100,50,50);
}
playGame(){
console.log(playGame);


}
endGame(){



}
 async getGameState(){
var gamingref= await covid.ref("gameState")
gamingref.on("value",async function(data){
    gaming= await data.val();
   // this.startGame();
  console.log(gaming);  
});
}
updateGameState(count){
var gamingref=covid.ref("/");
gamingref.update({
    gameState: count
})

}
}

