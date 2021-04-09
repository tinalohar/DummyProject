class Log{
    constructor(x,y,w,h,angle){
        var options={
            'density':1.0,
            'friction':1.0,
            'restitution':0.8,
            //'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        Matter.Body.setAngle(this.body, angle)
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("brown");
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
    }
}