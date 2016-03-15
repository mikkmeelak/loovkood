// Kristjan Kesküla, Loovkood
// EKA graafiline disain 2016
// Tilkuv marker

document.title = 'Kristjan';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;

var BACKGROUND = new Path.Rectangle (0, 0, WIDTH, HEIGHT)
BACKGROUND.fillColor = 'lightgrey';

tool.minDistance = 30;

var JOON;

function onMouseDown(event) {
    JOON = new Path({
		shadowColor: 'white',
		shadowBlur: 5,
		shadowOffset: new Point(20, 10)
	});

    JOON.strokeColor = 'orange';
    JOON.strokeWidth = '50';
}

function onMouseDrag(event) {
    var vector = event.delta*40;
    JOON.add(event.point);
    var vector = event.delta;
    vector.angle += 1;
    JOON.add(event.point + vector);

	JOON.onFrame = function(event){
    	this.shadowOffset = Math.random(5) * 20;
    }
}

function onMouseUp(event) {
    JOON.add(event.point);
    JOON.smooth(200);
	DRIP1 = new Path.Rectangle(event.point, 10, 150);
	DRIP1.fillColor = 'orange';

	DRIP2 = new Path.Rectangle(event.point+15, 10, 75);
	DRIP2.fillColor = 'orange';
}