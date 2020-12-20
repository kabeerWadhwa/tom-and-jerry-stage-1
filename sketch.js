var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10
var maze11,maze12,maze13,maze14,maze15,maze16,maze17,maze18,maze19,maze20
var maze21,maze22,maze23,maze24,maze25,maze26,maze27,maze28,maze29,maze30
var maze31,maze32,maze33,maze34,maze35,maze36,maze37,maze38,maze39,maze40
var maze41,maze42,maze43,maze44,maze45,maze46,maze47,maze48,maze49,maze50
var tom, Jerry,Cheese

function preload(){
  tomIMG = loadImage("Images/TomCat.png")
  tomLeft = loadImage("Images/TomLeft.png")
  sadTom = loadImage("Images/Crying Tom.jpg")
  JerryIMG = loadImage("Images/jerry.png")
  CheeseIMG = loadImage("Images/cheese.jpeg")
}
function setup() {
  createCanvas(1000,800);
  tom = createSprite(50,200,20,20)
  tom.debug = true
  tom.setCollider("rectangle",0,0,40,40)
  tom.addImage(tomIMG)
  tom.scale = 0.04
  maze1 = createSprite(400,400,200,20)
  maze1.shapeColor = "green"
  maze2 = createSprite(400,600,20,200)
  maze2.shapeColor = "green"
  maze3 = createSprite(800,600,200,20)
  maze3.shapeColor = "green"
  maze4 = createSprite(600,1200,20,200)
  maze4.shapeColor = "green"
  maze5 = createSprite(900,900,200,20)
  maze5.shapeColor = "green"
  maze6 = createSprite(700,800,20,200)
  maze6.shapeColor = "green"
  maze7 = createSprite(800,600,200,20)
  maze7.shapeColor = "green"
  maze8 = createSprite(200,800,20,200)
  maze8.shapeColor = "green"
  maze9 = createSprite(300,500,200,20)
  maze9.shapeColor = "green"
  maze10 = createSprite(700,600,200,20)
  maze10.shapeColor = "green"
  maze11 = createSprite(500,200,20,200)
  maze11.shapeColor = "green"
  maze12 = createSprite(100,300,200,20)
  maze12.shapeColor = "green"
  maze13 = createSprite(1400,200,200,20)
  maze13.shapeColor = "green"
  maze14 = createSprite(100,200,20,200)
  maze14.shapeColor = "green"
  maze15 = createSprite(200,300,200,20)
  maze15.shapeColor = "green"
  maze16 = createSprite(600,800,200,20)
  maze16.shapeColor = "green"
  maze17 = createSprite(800,200,20,200)
  maze17.shapeColor = "green"
  maze18 = createSprite(400,300,200,20)
  maze18.shapeColor = "green"
  maze19 = createSprite(700,100,20,200)
  maze19.shapeColor = "green"
  maze20 = createSprite(600,200,20,200)
  maze20.shapeColor = "green"
  maze21 = createSprite(200,400,200,20)
  maze21.shapeColor = "green"
  maze22 = createSprite(500,800,200,20)
  maze22.shapeColor = "green"
  maze23 = createSprite(600,800,20,200)
  maze23.shapeColor = "green"
  maze24 = createSprite(100,600,200,200)
  maze24.shapeColor = "green"
  maze25 = createSprite(500,100,200,20)
  maze25.shapeColor = "green"
  maze26 = createSprite(800,100,200,20)
  maze26.shapeColor = "green"
  maze27 = createSprite(500,500,20,200)
  maze27.shapeColor = "green"
  maze28 = createSprite(200,200,200,20)
  maze28.shapeColor = "green"
  maze29 = createSprite(600,300,20,200)
  maze29.shapeColor = "green"
  maze30 = createSprite(1000,600,200,20)
  maze30.shapeColor = "green"
  maze31 = createSprite(900,800,20,200)
  maze31.shapeColor = "green"
  maze32 = createSprite(900,1000,200,20)
  maze32.shapeColor = "green"
  maze33 = createSprite(1000,900,20,200)
  maze33.shapeColor = "green"
  maze34 = createSprite(1000,700,200,20)
  maze34.shapeColor = "green"
  maze35 = createSprite(900,700,200,20)
  maze35.shapeColor = "green"
  maze36 = createSprite(800,1000,200,20)
  maze36.shapeColor = "green"
  maze37 = createSprite(600,1000,20,200)
  maze37.shapeColor = "green"
  maze38 = createSprite(900,1000,200,20)
  maze38.shapeColor = "green"
  maze39 = createSprite(1000,600,20,200)
  maze39.shapeColor = "green"
  maze40 = createSprite(800,900,200,20)
  maze40.shapeColor = "green"
  maze41 = createSprite(1000,800,20,200)
  maze41.shapeColor = "green"
  maze42 = createSprite(1000,800,200,20)
  maze42.shapeColor = "green"
  maze43 = createSprite(1000,600,20,200)
  maze43.shapeColor = "green"
  maze44 = createSprite(970,200,200,20)
  maze44.shapeColor = "green"
  maze45 = createSprite(999,400,20,200)
  maze45.shapeColor = "green"
  maze46 = createSprite(800,1000,200,20)
  maze46.shapeColor = "green"
  maze47 = createSprite(900,800,20,200)
  maze47.shapeColor = "green"
  maze48 = createSprite(1000,800,20,200)
  maze48.shapeColor = "green"
  maze49 = createSprite(1000,200,20,200)
  maze49.shapeColor = "green"
  maze50 = createSprite(900,200,200,20)
  maze50.shapeColor = "green"
}
function Tom(){
  if(keyDown("up")){
    tom.velocityY = -2
  }
  if(keyDown("down")){
    tom.velocityY = 2
  }
  if(keyDown("right")){
    tom.velocityX = 2
    tom.addImage(tomIMG)
    tom.scale = 0.04
  } 
  if(keyDown("left")){
    tom.velocityX = -2
    tom.addImage(tomLeft)
    tom.scale = 0.08
  }
}
function draw() {
  background(0); 
  Tom(); 
  if(tom.collide(maze1)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze2)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze3)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze4)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze5)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze6)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze7)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze8)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze9)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze10)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze11)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze12)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze13)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze14)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze15)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze16)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze17)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze18)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze19)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze20)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze21)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze22)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze23)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze24)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze25)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze26)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze27)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze28)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze29)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze30)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze31)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze32)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze33)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze34)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze35)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze36)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze37)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze38)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze39)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze40)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze41)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze42)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze43)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze44)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze45)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze46)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze47)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze48)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze49)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }if(tom.collide(maze50)){
    tom.x = 50
    tom.y = 200
    tom.addImage(sadTom)
    tom.scale = 0.09
  }
  drawSprites();
}