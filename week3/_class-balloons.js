tool.minDistance = 1;
tool.maxDistance = 90;

var JOON;

function onMouseDown(event) {
	JOON = new Path();
	JOON.add(event.point);
	
	JOON.fillColor = new Color({
        hue: Math.random() * 360,
        saturation: 0.5,
        brightness: 1
    });
}

function onMouseDrag(event) {
	var vector = event.delta;
	vector.angle += 90;

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