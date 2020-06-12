class Bob {
    constructor(x,y,radius) {
      var options = {
        restitution : 1.0,
  density : 1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
      fill('violet')
    }
    display(){
      
      var pos=this.body.position;
      if(keyCode===32){
    
      pos.x = mouseX;
        pos.y = mouseY;
        }

        else if (keyCode === ENTER){
         pos.x = 400;
          
          }
          
      ellipseMode(RADIUS);
      fill("blue");
ellipse(pos.x,pos.y,40);

    }
  };