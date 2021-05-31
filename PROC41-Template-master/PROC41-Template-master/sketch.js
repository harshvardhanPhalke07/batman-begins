var thunderbolt1, thunderbolt2,thunderbolt3,thunderbolt4 ;
var walking1,walking2,walking3,walking4,walking5,walking6,walking7,walking8
var canvas, boy

function preload(){
thunderbolt1= loadImage("images/thunderbolt/1.png")
 thunderbolt2=loadImage("images/thunderbolt/2.png")
thunderbolt3=loadImage("images/thunderbolt/3.png")
thunderbolt4=loadImage("images/thunderbolt/4.png")
walking1=loadImage("images/Walking Frame/walking_1.png")
walking2=loadImage("images/Walking Frame/walking_2.png")
walking3=loadImage("images/Walking Frame/walking_3.png")
walking4=loadImage("images/Walking Frame/walking_4.png")
walking5=loadImage("images/Walking Frame/walking_5.png")
walking6=loadImage("images/Walking Frame/walking_6.png")
walking7=loadImage("images/Walking Frame/walking_7.png")
walking8=loadImage("images/Walking Frame/walking_8.png")
}

function setup(){
canvas=createCanvas(800,600)
    boy=new Umbrella(100,100)
}

function draw(){
   Umbrella.display();
   drops.update() 
}   

