document.title = 'Anita';

var line;

var startColor = '#37FDFC';
var endColor = '#4F2F4F';

var startPoint;
var stopPoint;

function onMouseDown(event) {
    startColor = "#"+Math.floor(Math.random()*16777215).toString(16);
	line = new Path();
	line.add(event.point);
    line.strokeColor = 'White';
    startPoint = event.point;
}

function onMouseDrag(event) {
	var vector = event.delta/4;
	vector.angle += 90;

	var top = event.middlePoint + vector;
	var bottom = event.middlePoint - vector;

	line.add(top);
	line.insert(0, bottom);

	line.smooth();
}

function onMouseUp(event) {
    endPoint = event.point;
    endColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    line.fillColor = {
	    gradient: {
	        stops: [startColor, endColor]

	    },
	    origin: startPoint,
	    destination: endPoint
	};
    line.closed = true;
    line.smooth();
}