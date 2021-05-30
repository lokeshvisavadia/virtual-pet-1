var dogImg,hdogImg,food,foodStock;
var dog,happyDog,foodS;
function preload()
{
	dogImg=loadImage("images/dogImg.png");
  hdogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(600, 600);
  dog=createSprite(300,300,20,20);
dog.addImage(dogImg);
  database = firebase.database();
foodStock = database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(hdogImg);
}
}


function readStock(x){
food=data.val();
}
function writestock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
}
  database.ref('/').update({
    Food:x
  })
}