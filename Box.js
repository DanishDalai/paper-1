class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
      }

        score(){
        if(this.Visiblity < 0 && this.Visiblity > -100){
          Score ++
        
        }
        
        
        }
      
      display(){
        var angle = this.body.angle;
        rectMode(CENTER);
        fill("blue")
        strokeWeight(3);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(this.body.position.x, this.body.position.y,this.width,this.height);
        //rect(this.image, 0, 0, this.width, this.height);
        rotate(angle); 
        pop();
      }
}
