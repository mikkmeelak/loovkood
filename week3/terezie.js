document.title = 'smeared marker';



var WIDTH = view.size.width;
var HEIGHT = view.size.height;

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(1);

var path;

tool.minDistance = 10;

function onMouseDrag(event) {
	var radius = event.delta.length;
	var circle = new Path.Circle(event.middlePoint, radius);
	circle.fillColor = 'pink';
}