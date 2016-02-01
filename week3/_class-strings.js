// measure screen size and save for later
var WIDTH = view.size.width;
var HEIGHT = view.size.height;
// console.log(WIDTH + ' and ' + HEIGHT);

// for background we draw a rectangle from top left corner
// and set its width and height the same as screens
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

function onMouseDown(event) {
    var RING = new Path.Circle(event.point, 10);
    RING.strokeColor = 'white';
    
    // start drawing the line
    // JOON = new Path();
    // JOON.strokeColor = 'white';
    // JOON.fullySelected = true;
    
    // JOON.add(event.point);
    
    JOON1 = new Path();
    JOON1.strokeColor = 'white';
    
    JOON2 = new Path();
    JOON2.strokeColor = 'red';
    JOON2.strokeWidth = 1;
    
    JOON3 = new Path();
    JOON3.strokeColor = 'blue';
    JOON3.strokeWidth = 1;
}

function onMouseDrag(event) {
    var vector = event.delta;
    vector.angle = vector.angle + 90;
    
    JOON1.add(event.point + vector);
    JOON1.add(event.point - vector);
    
    JOON1.add(event.point);
    // JOON2.add(event.point + vector * Math.random() * 2);
    // JOON3.add(event.point - vector * Math.random() * 2);
}

function onMouseUp(event) {
    var RING = new Path.Circle(event.point, 10);
    RING.fillColor = 'white';
    
    var KESKRING = new Path.Circle(event.middlePoint, 5);
    KESKRING.fillColor = 'white';
    
    // close the line
    // JOON.add(event.point);
    // JOON.simplify(30);
    
    JOON1.smooth();
    JOON2.smooth();
    JOON3.smooth();
    
    JOON1.onFrame = function(event) {
        // this.strokeWidth = Math.random() * 2;
    }
}

