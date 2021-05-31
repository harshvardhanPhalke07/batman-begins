class Umbrella{
    constructor(x,y){
        var options={
            isStatic=true
        }
        Matter.Bodies.ellipse(x,y)
        Umbrella.addImage(walking1)
    }
}