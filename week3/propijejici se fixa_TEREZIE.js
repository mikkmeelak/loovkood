// measure screen size and save for later
var WIDTH = view.size.width;
var HEIGHT = view.size.height;
// console.log(WIDTH + ' and ' + HEIGHT);

// for background we draw a rectangle from top left corner
// and set its width and height the same as screens
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(1);

var path;

tool.minDistance = 10;



function onMouseDrag(event) {
	var radius = event.delta.length;
	var circle = new Path.Circle(event.middlePoint, radius);
	circle.fillColor = 'pink';
	
}