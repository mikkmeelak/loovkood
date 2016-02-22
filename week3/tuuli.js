// Tuuli Velling
// EKA BGD2 2016 loovkood
// childhood drawing


// screen
var WIDTH = view.size.width;
var HEIGHT = view.size.height;
// console.log(WIDTH + ' and ' + HEIGHT);
 
// background
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0);
 
// paper.js conf
tool.minDistance = 10;
tool.maxDistance = 40;
// tool.maxDistance = 100;
 
// define new path
var JOON;
var JOON1;
var JOON2;
var JOON3;
     
    JOON1 = new Path();
    JOON1.strokeColor = 'white';
     
    JOON2 = new Path();
    JOON2.strokeColor = 'red';
    JOON2.strokeWidth = 1;
     
    JOON3 = new Path();
    JOON3.strokeColor = 'blue';
    JOON3.strokeWidth = 1;
 
function onMouseUp(event) {
    var RING = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
    RING.fillColor = new Color({
        hue: Math.random() * 360,
        saturation: 0.5,
        brightness: 1});
        RING1.strokeWidth = 3;
     
    JOON1.add(event.point + vector);
    JOON1.add(event.point - vector);
     
    JOON1.add(event.point);
    // JOON2.add(event.point + vector * Math.random() * 2);
    // JOON3.add(event.point - vector * Math.random() * 2);
}
 
function onMouseDrag(event) {
    var RING1 = new Path.Circle(event.point, 60);
    RING1.fillColor = '#E2A9F3';
    RING1.strokeWidth = 3;
    RING1.strokeColor = new Color({
        hue: Math.random() * 360,
        saturation: 0.5,
        brightness: 1});
        RING1.strokeWidth = 3;
     
    var RING2 = new Path.Circle(event.point, 50);
    RING2.fillColor = '#E1F5A9';
    
    var RING3 = new Path.Circle(event.point, 40);
    RING3.fillColor = '#A9BCF5';
    
    var RING4 = new Path.Circle(event.point, 30);
    RING4.fillColor = '#F5DA81';
     
    var RING5 = new Path.Circle(event.point, 20);
    RING5.fillColor = 'pink';
    
    var RING6 = new Path.Circle(event.point, 10);
    RING6.fillColor = 'gray';
 
     
    JOON1.smooth();
    JOON2.smooth();
    JOON3.smooth();
     
    RING1.onFrame = function(event) {
        this.strokeWidth = Math.random() * 236;
    }
}