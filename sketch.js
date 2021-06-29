var dog1Image , dog2Image , database, foodS, foodStock;

function preload()
{
   dog1Image = loadImage("dog1.png");
   dog2Image = loadImage("dog2.png");
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();
  
  dog1 = createSprite(250,250,10,50);
  dog1.addImage(dog1Image);
  dog1.scale = 0.2;

 foodStock = database.ref('Food');
 foodStock.on("value",readStock);
  


}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){

writeStock(foodS);

dog2.addImage(dog2Image);


}

  drawSprites();

  textSize(20);

  fill('white');

  text(" Food "+ "remaining"+ ":" + "19" ,150 , 150);


}

function readStock(data){
     foodS = data.val();
}

function writeStock(){
    
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }



  database.ref('/').update({
    Food:x
  })

}



