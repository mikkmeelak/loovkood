// measure screen size and save for later
var WIDTH = view.size.width;
var HEIGHT = view.size.height;
// console.log(WIDTH + ' and ' + HEIGHT);

// for background we draw a rectangle from top left corner
// and set its width and height the same as screens
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0.9, 0.1, 0.9);

tool.fixedDistance = 3;

var KASTID = [];
var INDEX = 0;

function onMouseDrag(event) {
    // KASTID[INDEX] = new Path.Circle(event.middlePoint, 10);
    KASTID[INDEX] = new Path.RegularPolygon(event.middlePoint, 2, 20);
    KASTID[INDEX].strokeColor = 'Aquamarine';
    KASTID[INDEX].fillColor = 'Aquamarine';

    KASTID[INDEX].rotate(6);

    INDEX = INDEX + 1;
}

function onMouseUp(event) {
    console.log(event.pressure);
}

view.onFrame = function(event) {
// console.log(event.time);

     for (var i = 1; i < KASTID.length; i++) {
          KASTID[i].fillColor = new Color(Math.random());
         KASTID[i].rotate(Math.tan(event.time));
     }
 }
