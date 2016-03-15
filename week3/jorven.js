// Jorven Viilik
// EKA BGD2 2016 loovkood
// Peotäis vildikaid

document.title = 'Jorven';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color('beige');

tool.minDistance = 30;
tool.maxDistance = 35;

var JOON;
var JOON1;
var JOON2;
var JOON3;
var JOON4;

function onMouseDown(event) {
	JOON = new Path();
	JOON.strokeColor = 'green';
	JOON.fullySelected = true;

    JOON1 = new Path();
    JOON1.strokeColor = 'gray';
    JOON1.strokeWidth = 7;

    JOON2 = new Path();
    JOON2.strokeColor = 'red';
    JOON2.strokeWidth = 5;

    JOON3 = new Path();
    JOON3.strokeColor = 'blue';
    JOON3.strokeWidth = 10;

    JOON4 = new Path();
    JOON4.strokeColor = 'Lightseagreen';
    JOON4.strokeWidth = 9;
}

function onMouseDrag(event) {
    var vector = event.delta;
    vector.angle = vector.angle + 180;

    JOON1.add(event.point + vector);
    JOON1.add(event.point + vector);

    JOON1.add(event.point + vector * Math.random() * 4);
    JOON2.add(event.point + vector * Math.random() * 5);
    JOON3.add(event.point - vector * Math.random() * 1);
    JOON4.add(event.point - vector * Math.random() * 3);
}

function onMouseUp(event) {
    JOON.simplify(30);

    JOON1.smooth();
    JOON2.smooth();
    JOON3.smooth();
    JOON4.smooth();
}