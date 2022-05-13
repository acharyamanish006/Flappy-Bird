// let deathBlock1 = document.getElementById("block1");
let deathBlock2 = document.getElementById("block2");
let deathBlock3 = document.getElementById("block3");
// let safeBlock1 = document.getElementById("block4");
let safeBlock2 = document.getElementById("block5");
let safeBlock3 = document.getElementById("block6");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
let score = document.getElementById("scr");
let pip1 =document.getElementById("pip1");
let pip2 =document.getElementById("pip2");
let pip3 =document.getElementById("pip3");
let pip4 =document.getElementById("pip4");
let velocity = 3;
let gravity = velocity;
let movement = 20;
let speed = movement;
let scoreNum = 0;
let difficult = 0;
let diffVlue = 1500;
var flyAudio = new Audio('..//audio/sfx_wing.wav');
var dieAudio = new Audio('..//audio/sfx_die.wav');
var pointAudio = new Audio('..//audio/sfx_point.wav');
var swoshAudio = new Audio('..//audio/sfx_swooshing.wav');






window.addEventListener('load', () => {
    bird1.style.position = 'absolute';
    bird1.style.top = 0;
    
});

window.addEventListener("keypress", function(){
    
    flyAudio.play();
    
    bird1.style.backgroundImage = "url('..//img/flappy1.22.png')";
    bird1.style.backgroundSize= "contain";
    bird1.style.backgroundRepeat= "no-repeat";
    bird1.style.top = parseInt(bird1.style.top) - speed + 'px';
    
})



function anim(){

    bird1.style.backgroundImage = "url('..//img/flappy1.2.png')";
    
}
setInterval(anim,1000/2);


function Gravity(){



    let birdPosY =parseInt( bird1.getBoundingClientRect("top").y);
    if(birdPosY > 300 )
    {
        gravity = 0;
        return
        
    }
    gravity = velocity;
    bird1.style.top = parseInt(bird1.style.top) + gravity + 'px';

    if(birdPosY<65){
        speed = 0;
        return
    }
    speed = movement;


}
setInterval(Gravity,1000/25);

function isAlive(){
    
let blockPosX = parseInt(deathBlock2.getBoundingClientRect("right").x);
let blockPos2X = parseInt(deathBlock3.getBoundingClientRect("right").x);
// let safeBlockY = safeBlock2.style.top;
let safeBlockBY = parseInt(safeBlock2.getBoundingClientRect("buttom").y);
let safeBlock2Y = parseInt(safeBlock3.getBoundingClientRect("top").y);
// let safeBlockB2Y = parseInt(safeBlock3.getBoundingClientRect("buttom").y);
let birdPosY =parseInt( bird1.getBoundingClientRect("top").y);
 

// }
if((blockPosX < 440 && blockPosX > 420 && (birdPosY < 150 ||birdPosY > 280 )) || (blockPos2X < 440 && blockPos2X > 420 && (birdPosY < 100 || birdPosY > 200))){
    dieAudio.play();
    diffVlue = 1500;
    alert("Game Over" + " " + "Your Score" + " " +scoreNum);
    scoreNum = 0;
    
    }


// console.log(blockPosX);
// console.log(blockPos2X);
// console.log(safeBlockBY);
// console.log(safeBlockY);
// console.log(safeBlock2Y);
// console.log(safeBlockB2Y);
// console.log(birdPosY);
}

setInterval(isAlive,1000/60);

function myScore(){
    score.innerText = scoreNum;
    scoreNum +=1;
}
setInterval(myScore,1000/3);


function hardMode(){
    difficult = diffVlue;
   deathBlock2.style.animationDuration  = difficult + "ms";
   deathBlock3.style.animationDuration  = difficult+ "ms";
    safeBlock2.style.animationDuration  = difficult + "ms";
    safeBlock3.style.animationDuration  = difficult + "ms";
    pip1.style.animationDuration  = difficult + "ms";
    pip2.style.animationDuration  = difficult+ "ms";
    pip3.style.animationDuration  = difficult + "ms";
    pip4.style.animationDuration  = difficult + "ms";

diffVlue -= 0.02 ;
   console.log(difficult);
}
setInterval(hardMode,1000/60);

function point(){
      
    pointAudio.play();   
    pointAudio.volume = 0.5;  
}
setInterval(point,3000)