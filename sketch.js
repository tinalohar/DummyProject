const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var array3;
var engine, world;
var box1,pig1,ground,log1,box2,pig2,box3,box4,log2;
var box5,log3,log4,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);

    //number type
    var number=10;
    console.log(number);

//string type
    var str="this is a String";
    console.log(str);

//boolean type
    var bool=true;
    console.log(bool);

    var obj;
    console.log("not assigned value to obj "+obj);

    obj=null;
    console.log(obj);

    //object type variable
    obj= new Bird(200,300,30,30);
    console.log(obj);

//array type variable
    var data1=[12,34,56,68];
    console.log(data1[1]);
    data1.push(57);
    console.log(data1);
    data1.pop();
    console.log(data1);

    var data2=[34,"string",false,obj];

    array3=[[1,2],[3,4],[6,7]];
    console.log(array3[0][0] + "    "+ array3[0][1]);
    console.log(array3[1]);
    console.log(array3[2]); 
    










    
    box1 = new Box(400,320,50,50);
    box2 = new Box(600,320,50,50);
   
    pig1=new Pigs(500,350,40,40);
    log1=new Log(500,300,20,300,PI/2);

    box3 = new Box(400,290,50,50);
    box4 = new Box(600,290,50,50);
   
    pig2=new Pigs(500,250,40,40);
    log2=new Log(500,220,20,300,PI/2);

    box5 = new Box(500,190,50,50);
    log3=new Log(430,150,20,100,PI/7);
    log4=new Log(570,150,20,100,-PI/7);

    bird=new Bird(200,100,50,50);
    var options={
        bodyA:bird.body,
        pointB:{x:100,y:200},
        length:12,
        stiffness:0.2

    }

    chain=Matter.Constraint.create(options);
    World.add(world,chain);
    console.log(chain);
}

function draw(){
    background(0);
    Engine.update(engine);
    /*console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    for(var i=0;i<3;i=i+1){
        console.log(array3[i][0] +"  "+array3[i][1]);
    } 
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
   
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    bird.display();
    push()
    var pointa=chain.bodyA.position
    var pointB=chain.pointB;
    strokeWeight(4);
    stroke("red")
    line(pointa.x,pointa.y,pointB.x,pointB.y);
pop()
}