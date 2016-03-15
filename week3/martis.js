//Martis Roosimaa
//Loovkood 2016 BGD2
//Kastid

document.title = 'Martis';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0);

tool.fixedDistance = 0;

var KASTID = [];
var INDEX = 0;

function onMouseDrag(event) {
    KASTID[INDEX] = new Path.Rectangle(event.middlePoint, Math.random() * 40);
	KASTID[INDEX].fillColor = new Color({
		hue: Math.random() * 300,
		saturation: 0.6,
		brightness: 1
	});

    KASTID[INDEX].rotate(90);

    INDEX = INDEX + 1;
}

function onMouseUp(event) {
    console.log(event.pressure);
}

