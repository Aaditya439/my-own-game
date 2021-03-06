class Bub{
    constructor(x,y,r){
        var options = { isStatic:true }
        this.x=x;
		this.y=y;
		this.r=1

        this.body = Bodies.circle(this.x,this.y,this.r,options)

        World.add(world,this.body)
        
    }

display(){
var bubpos = this.body.position;
push()
translate(bubpos.x,bubpos.y);
ellipse(bubpos.x,bubpos.y,bubpos.r)
pop()
}
}