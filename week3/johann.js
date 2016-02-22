// measure screen size and save for later
var WIDTH = view.size.width;
var HEIGHT = view.size.height;


// print screen size to console. note the empty spaces around 'and'
console.log(WIDTH + ' and ' + HEIGHT);

// for background we draw a rectangle from top left corner
// and set its width and height the same as screens
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0);

tool.minDistance = 2;

tool.maxDistance = 5;

var JOON;


function onMouseDown(event) {
   // var RING = new Path.Circle(event.point, 10);
   // RING.strokeColor = 'red';
    
JOON1 = new Path();
JOON1.strokeColor=new Color({
        hue: Math.random() * 360,
        saturation: 0.5,
        brightness: 1
  });
JOON1.strokeCap = 'round';


JOON2 = new Path();
JOON2.strokeColor=new Color({
        hue: Math.random() * 2,
        saturation: 1,
        brightness: 2
  });
}
    

    
   // JOON = new Path();
   // JOON.strokeColor= 'white';
    //JOON.fullySelected = true;
    
//    JOON.add(event.point);
  
    

function onMouseDrag(event){
    var vector = event.delta;
    
    vector.angle = vector.angle +40;
    
    JOON1.add(event.point);
 
    
    
    JOON1.onFrame = function(event){
 this.strokeWidth = Math.random() * 20;
    }



}

function onMouseUp(event){
   // var RING = new Path.Circle(event.point, 10);
   // RING.strokeColor = 'blue';
    
  //  var KESKRING = new Path.Circle(event.middlePoint, 5);
   // KESKRING.fillcolor = 'white';
    
    JOON1.add(event.point);
    JOON1.smooth(100);
    JOON2.smooth(100);

SILMAD1 = new Path.Circle(event.point-10,10, 5);
SILMAD1.strokeColor= 'red';
SILMAD1.strokeCap= 'round'
SILMAD1.fillColor = 'red';


SILMAD2 = new Path.Circle(event.point-30, 10,  5);
SILMAD2.strokeCap= 'round'
SILMAD2.fillColor = 'red';

//SILMAD3 = new Path.Ellipse(event.point-44, 20);
//SILMAD3.strokeColor= 'white';
//SILMAD3.strokeCap= 'round'
//SILMAD3.fillColor = 'white';

//        SILMAD2.onFrame = function(event){
// SILMAD2.fillColor = Math.random() * 3;
//    }

 JOON2.onFrame = function(event){
 this.strokeWidth = Math.random() * 3;
    }
}