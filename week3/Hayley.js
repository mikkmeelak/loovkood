// measure screen size and save for later
var WIDTH = view.size.width;
var HEIGHT = view.size.height;
// console.log(WIDTH + ' and ' + HEIGHT);
 
// for background we draw a rectangle from top left corner
// and set its width and height the same as screens
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = 'lightyellow';


tool.minDistance = 50;
tool.maxDistance = 50;
 
var JOON;
 
function onMouseDown(event) {
    JOON = new Path();
    JOON.add(event.point);
     
    JOON.fillColor = 'blue';({
        hue: Math.random() * 360,
        saturation: 100,
        brightness: 1
    });
}
 
function onMouseDrag(event) {
    var vector = event.delta;
    vector.angle += 200;
 
    var top = event.middlePoint + vector;
    var bottom = event.middlePoint - vector;
 
    JOON.add(top);
    JOON.insert(0, bottom);
     
    JOON.smooth();
}
 
function onMouseUp(event) {
    JOON.closed = true;
    JOON.smooth();
}