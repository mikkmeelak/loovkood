// ARVI PIIR
// EKA BGD2 2016 loovkood
// childhood drawing

document.title = 'Arvi';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0);

tool.fixedDistance = 3;

var KASTID = [];
var INDEX = 0;

function onMouseDrag(event) {
    KASTID[INDEX] = new Path.Circle(event.middlePoint, 66);
    KASTID[INDEX].strokeColor = 'violet';
    KASTID[INDEX].rotate(90);
    INDEX = INDEX + 1;
}

function onMouseUp(event) {
    console.log(event.pressure);
}
