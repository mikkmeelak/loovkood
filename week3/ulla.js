// EKA BGD2 2016 loovkood
// Undefined ehk algajale sobiv t'f6'f6riist, mis
// ajab t'e4iega n'e4rvi ka

document.title = 'Ulla';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = 'mediumseagreen';

tool.minDistance = 20;
tool.maxDistance = 30;

var PUNKT = [];
var INDEX = 0;
var DT = '';

function onMouseDrag(event) {
	PUNKT[INDEX] = new PointText(event.middlePoint);
	PUNKT[INDEX].fillColor = 'beige';
	PUNKT[INDEX].fontSize = 15;
	PUNKT[INDEX].shadowColor = 'tomato';
	PUNKT[INDEX].shadowBlur = 5;
	PUNKT[INDEX].shadowOffset = new Point(10, 5);
	PUNKT[INDEX].justification = 'left';

	var POSITSIOON = Math.floor(Math.random() * DT.length * 10);

	PUNKT[INDEX].content = DT[POSITSIOON];
	PUNKT[INDEX].dashArray = [50, 10];

	INDEX = INDEX + 1;
}

view.onFrame = function(event) {
    for (var i = 0; i < PUNKT.length; i++) {
       PUNKT[i].rotate(3);
    }
}

function onMouseUp(event) {
    PUNKT.closed = true;
    PUNKT.smooth;
}
