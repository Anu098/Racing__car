class Form{
constructor(){


}
display(){
    console.log("entered");
var title=createElement("h3","Race to the First");
title.position(width/2-100,47);
    var input=createInput("Hehi Chicken")
    input.position(width/2-100,height/2-100);
    var button=createButton("Cappy")
    button.position(width/2-50,height/2-50);
    button.mousePressed( function(){
     //var name= input.value();
     //player= new Player();
     //player.getCount();
     pinkBush= pinkBush+1;
    player.name= input.value();

    player.id=pinkBush;
    player.updateCount(pinkBush);
    player.updatePlayer();
    input.hide();
    button.hide();
    var texty=createElement("h2","WELCOME   "+input.value());
    texty.position(width/2-100,height/2-100);

    })
} 
 
}