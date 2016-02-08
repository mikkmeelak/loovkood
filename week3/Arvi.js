// ARVI PIIR
// EKA BGD2 2016 loovkood
// childhood drawing


// measure screen size and save for later
var WIDTH = view.size.width;
var HEIGHT = view.size.height;
// console.log(WIDTH + ' and ' + HEIGHT);
 
// for background we draw a rectangle from top left corner
// and set its width and height the same as screens
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0);
 
tool.fixedDistance = 3;
 
var KASTID = [];
var INDEX = 0;
 
function onMouseDrag(event) {
     KASTID[INDEX] = new Path.Circle(event.middlePoint, 66);
   
    KASTID[INDEX].strokeColor = 'violet';
     
    KASTID[INDEX].rotate(90);
     
    INDEX = INDEX + 1;
}
 
function onMouseUp(event) {
    console.log(event.pressure);
}
 
// view.onFrame = function(event) {
//     // console.log(event.time);
     
//     for (var i = 0; i < KASTID.length; i++) {
//         // KASTID[i].fillColor = new Color(Math.random());
//         KASTID[i].rotate(Math.tan(event.time));
//     }
// }