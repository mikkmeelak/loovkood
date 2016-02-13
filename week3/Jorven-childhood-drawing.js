// Jorven Viilik
// EKA BGD2 2016 loovkood
// childhood drawing

// measure screen size and save for later
var WIDTH = view.size.width;
var HEIGHT = view.size.height;
// console.log(WIDTH + ' and ' + HEIGHT);
 
// for background we draw a rectangle from top left corner
// and set its width and height the same as screens
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color('beige ');
 
// paper.js conf
tool.minDistance = 30;
tool.maxDistance = 35;
// tool.maxDistance = 100;
 
// define new path
var JOON;
var JOON1;
var JOON2;
var JOON3;
var JOON4;
 
function onMouseDown(event) {

    // start drawing the line
     JOON = new Path();
     JOON.strokeColor = 'green';
     JOON.fullySelected = true;
     
    // JOON.add(event.point);
     
    JOON1 = new Path();
    JOON1.strokeColor = 'gray';
    JOON1.strokeWidth = 7;
     
    JOON2 = new Path();
    JOON2.strokeColor = 'red';
    JOON2.strokeWidth = 5;
     
    JOON3 = new Path();
    JOON3.strokeColor = 'blue';
    JOON3.strokeWidth = 10;
    
    JOON4 = new Path();
    JOON4.strokeColor = 'Lightseagreen';
    JOON4.strokeWidth = 9;
}
 
function onMouseDrag(event) {
    var vector = event.delta;
    vector.angle = vector.angle + 180;
     
    JOON1.add(event.point + vector);
    JOON1.add(event.point + vector);
     
    JOON1.add(event.point + vector * Math.random() * 4);
    JOON2.add(event.point + vector * Math.random() * 5);
    JOON3.add(event.point - vector * Math.random() * 1);
    JOON4.add(event.point - vector * Math.random() * 3);
}
 
function onMouseUp(event) {
     
    // close the line
    // JOON.add(event.point);
    JOON.simplify(30);

    JOON1.smooth();
    JOON2.smooth();
    JOON3.smooth();
    JOON4.smooth();
     
    //JOON1.onFrame = function(event) {
         //this.strokeWidth = Math.random() * 16;
    //}
}