class Box {
  constructor(x,y,width,height) {
    var options = {
        'restitution': 0.4,
        'friction' : 0.0
        
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("block.png");
    this.visibilty = 255;
    World.add(world, this.body);
  }
  display(){
  //console.log(this.body.speed)
    var pos =this.body.position;
    var angle = this.body.angle;
    if(this.body.speed<3){
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.width,this.height)

    }
    else{

      World.remove(world, this.body);
      push();
      this.visibilty = this.visibilty -5;
      tint(255,this.visibilty);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();

    }
    
  }
};