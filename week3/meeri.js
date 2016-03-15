document.title = 'Meeri';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0);

tool.minDistance = 0;

var JOON;

function onMouseDown(event) {
    var RING = new Path.Circle(event.point, 10);
    RING.strokeColor = 'green';

    //start drawing the line
    JOON = new Path();
    JOON.strokeColor = 'green';
    JOON.selected = true;
    JOON.add(event.point);
}

function onMouseDrag(event) {
    var vector = event.delta;
    vector.angle = vector.angle + 0;

    JOON = new Path();
    JOON.strokeColor = 'green';
    JOON.strokeCap = 'round';
    JOON.strokeWidth = 50;

    JOON.add(event.point + vector);
    JOON.add(event.point - vector);
}

function onMouseUp(event) {
    var RING = new Path.Circle(event.point, 15);
    RING.fillColor = 'brown';

    var KESKRING = new Path.Circle(event.middlePoint, 5);
    KESKRING.fillColor = 'green';

	// close the line
    JOON.add(event.point);
    JOON.simplify(7);
}


