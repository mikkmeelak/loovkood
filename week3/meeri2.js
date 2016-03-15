document.title = 'Meeri';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0.9, 0.1, 0.9);

tool.fixedDistance = 3;

var KASTID = [];
var INDEX = 0;

function onMouseDrag(event) {
    KASTID[INDEX] = new Path.RegularPolygon(event.middlePoint, 2, 20);
    KASTID[INDEX].strokeColor = 'Aquamarine';
    KASTID[INDEX].fillColor = 'Aquamarine';

    KASTID[INDEX].rotate(6);

    INDEX = INDEX + 1;
}

view.onFrame = function(event) {
     for (var i = 1; i < KASTID.length; i++) {
          KASTID[i].fillColor = new Color(Math.random());
         KASTID[i].rotate(Math.tan(event.time));
     }
 }
