class Box{
    constructor(x,y,w,h){
        var options={
            friction:0,
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.image=loadImage("thanos.png");
        World.add(world, this.body);
        this.width=w;
        this.height=h;
    }
    display(){
        push ();
        rotate (this.body.angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width, this.height);
        pop(); 
    }
}