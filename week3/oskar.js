// joonistamisviis proovib mingil moel väljendada või võimaldada geomeetriliste lainete joonistamist

document.title = 'Oskar';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0.2, 0.2, 1);

tool.fixedDistance = 5;

var KASTID = [];
var INDEX = 3

function onMouseDrag(event) {
    KASTID[INDEX] = new Path.RegularPolygon(event.middlePoint, 2, 100);
    KASTID[INDEX].strokeColor = 'white';
    KASTID[INDEX].fillColor = 'white';

    KASTID[INDEX].rotate(115);

    INDEX = INDEX + 3;
}
