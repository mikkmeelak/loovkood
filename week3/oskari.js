
// measure screen size and save for later
var WIDTH = view.size.width;
var HEIGHT = view.size.height;
// console.log(WIDTH + ' and ' + HEIGHT);
  
// for background we draw a rectangle from top left corner
// and set its width and height the same as screens
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0.2, 0.2, 1);
  
tool.fixedDistance = 5;
  
var KASTID = [];
var INDEX = 3
  
function onMouseDrag(event) {
    // KASTID[INDEX] = new Path.Circle(event.middlePoint, 10);
    KASTID[INDEX] = new Path.RegularPolygon(event.middlePoint, 2, 100);
    KASTID[INDEX].strokeColor = 'white';
    KASTID[INDEX].fillColor = 'white';
      
    KASTID[INDEX].rotate(115);
      
    INDEX = INDEX + 3;
}
  
function onMouseUp(event) {
    console.log(event.pressure);
}
  
view.onFrame = function(event) {
console.log(event.time);
      

     }