class Rain{
    constructor(x,y){
        var options={
            friction=0.1,
            isStatic=false
        }
        Matter.Bodies.circle(x,y.options);
        var maxDrops=100;
        update();{
            for(var i=0; i<maxDrops; i++){
                Rain.push(new createDrop (random(0,800),random(0,600)));
            }
     
        }
    
    } 
    
}