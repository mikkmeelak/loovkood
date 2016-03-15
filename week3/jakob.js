//Jakob Tulve
//EKA GD 2016
//Joonistustööriist lapsepõlvest

document.title = 'Jakob';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color('GhostWhite');

tool.minDistance = 30;
tool.maxDistance = 35;

var JOON;
var JOON1;
var JOON2;
var JOON3;
var JOON4;

function onMouseDown(event) {
	JOON = new Path();
	JOON.strokeColor = 'navajoWhite';
	JOON.fullySelected = true;

    JOON1 = new Path({
		center: [0, 0],
		radius: 0,
		shadowColor: new Color("navajoWhite"),
		shadowBlur: 30,
		shadowOffset: new Point(0, 0)
	});

    JOON1.strokeColor = 'navajoWhite';
    JOON1.strokeWidth = 10;

    JOON2 = new Path();
    JOON2.strokeColor = 'navajoWhite';
    JOON2.strokeWidth = 5;

    JOON3 = new Path();
    JOON3.strokeColor = 'navajoWhite';
    JOON3.strokeWidth = 7;

    JOON4 = new Path();
    JOON4.strokeColor = 'navajoWhite';
    JOON4.strokeWidth = 9;
}

function onMouseDrag(event) {
    var vector = event.delta;
    vector.angle = vector.angle + 180;

    JOON1.add(event.point + vector);
    JOON1.add(event.point + vector);

    JOON1.add(event.point + vector * Math.random() * 1);
    JOON2.add(event.point + vector * Math.random() * 1);
    JOON3.add(event.point + vector * Math.random() * 1);
    JOON4.add(event.point + vector * Math.random() * 1);
}

function onMouseUp(event) {
    JOON2.simplify(400);
}