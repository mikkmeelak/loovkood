//Linda Vainomäe loovkood
//EKA BGD2 2016 joon
//pilvede joonistamise abivahend

document.title = 'Linda';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;
console.log(WIDTH + ' ja '+ HEIGHT)

var BACKGROUND = new Path.Rectangle (0, 0, WIDTH, HEIGHT)
BACKGROUND.fillColor = 'beige';

tool.minDistance = 30;

var JOON;

function onMouseDown(event) {
    JOON = new Path({
		fillColor: 'white',
		shadowColor: 'blue',
		shadowBlur: 50,
		shadowOffset: new Point(20, 10)
	});
    JOON.strokeColor = 'blue';
}

function onMouseDrag(event) {
    JOON.add(event.point);
    var vector = event.delta;
    vector.angle = vector.angle + 110;
    JOON.add(event.point + vector);
    JOON.add(event.point - vector)
}

function onMouseUp(event) {
    JOON.add(event.point);
    JOON.smooth();
}