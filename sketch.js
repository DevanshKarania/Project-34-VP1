//Create variables here
var dog,happydog;
var database;
var food,foodstock;


function preload(){
dog1 = loadImage("images/dogImg.png");
dogHappy = loadImage("images/dogImg1.png");

}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500, 500);
  
  foodstock=database.ref('Food');
  foodstock.on("value",readStock);
  
  dog = createSprite(250,250,50,50);
  dog.addImage(dog1);
  dog.scale = 0.3
}


function draw() {  
  background(46,139,87);
  if(keyDown(UP_ARROW)){
    writeStock(foodstock);
    dog.addImage(dogHappy);
  }

  drawSprites();
  textSize(20);
  fill("blue");
  text("Press up arrow to feed the dog.",120,400);
  text("Food Remaining:" + foodstock, 200,100);


  //add styles here
  
}
function readStock(data){
    foodstock = data.val();
}
function writeStock(x){
 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }

 database.ref('/').update({
   Food:x
 })
}


