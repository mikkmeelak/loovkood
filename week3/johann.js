// Johann Kabonen
// EKA BGD2 2016 loovkood
// Punaste silmadega tüübid lightsaberitega

document.title = 'Johann';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0);

tool.minDistance = 2;
tool.maxDistance = 5;

var JOON;

function onMouseDown(event) {
	JOON1 = new Path();

	JOON1.strokeColor = new Color({
        hue: Math.random() * 360,
        saturation: 0.5,
        brightness: 1
	});

	JOON1.strokeCap = 'round';


	JOON2 = new Path();

	JOON2.strokeColor = new Color({
		hue: Math.random() * 2,
		saturation: 1,
		brightness: 2
	});
}

function onMouseDrag(event){
    var vector = event.delta;

    vector.angle = vector.angle +40;
    JOON1.add(event.point);

    JOON1.onFrame = function(event){
 		this.strokeWidth = Math.random() * 20;
    }
}

function onMouseUp(event){
    JOON1.add(event.point);
    JOON1.smooth(100);
    JOON2.smooth(100);

	SILMAD1 = new Path.Circle(event.point-10,10, 5);
	SILMAD1.strokeColor= 'red';
	SILMAD1.strokeCap= 'round'
	SILMAD1.fillColor = 'red';

	SILMAD2 = new Path.Circle(event.point-30, 10,  5);
	SILMAD2.strokeCap= 'round'
	SILMAD2.fillColor = 'red';

	JOON2.onFrame = function(event) {
		this.strokeWidth = Math.random() * 3;
	}
}