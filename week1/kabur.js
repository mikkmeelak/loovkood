


var rectangle = new Rectangle(new Point(200, 400), new Size(60, 20));
var path = new Path.Rectangle(rectangle);
path.strokeColor = 'SlateGray';
path.fillColor = 'SlateGray';
var rectangle = new Rectangle(new Point(205, 420), new Size(50, 30));
var path = new Path.Rectangle(rectangle);
path.strokeColor = 'SlateGray';
path.fillColor = 'SlateGray';

var kuu = new Path.Circle({
    center: [540, 350],
    radius: 160,
    fillColor: 'LemonChiffon'
});

kuu.onFrame = function(event) {
    this.rotate(3);
    this.fillColor.hue = this.fillColor.hue + 2;
};



var path = new Path.Star({
    center: [150, 250],
    points: 5,
    radius1: 6,
    radius2: 20,
    fillColor: 'LemonChiffon'
    
});
   








///korstnad ja värv
var rectangle = new Rectangle(new Point(400, 400), new Size(60, 20));
var path = new Path.Rectangle(rectangle);
path.strokeColor = 'SlateGray';
path.fillColor = 'SlateGray';
var rectangle = new Rectangle(new Point(405, 420), new Size(50, 30));
var path = new Path.Rectangle(rectangle);
path.strokeColor = 'SlateGray';
path.fillColor = 'SlateGray';



//puntktide otsing
var path = new Path.Line({
    from: [540, 450],
    to: [120, 450],
    strokeColor: 'Salmon'
    
});
var path = new Path.Line({
    from: [620, 550],
    to: [40, 550],
    strokeColor: 'Salmon'
});

var path = new Path.Line({
    from: [120, 450],
    to: [40, 550],
    strokeColor: 'Salmon'
});

var path = new Path.Line({
    from: [540, 450],
    to: [620, 550],
    strokeColor: 'Salmon'
});


var katus = new Path();
katus.strokeColor = 'Salmon';
katus.add(new Point(120, 450));
katus.add(new Point(40, 550));
katus.add(new Point(620, 550));
katus.add(new Point(540, 450));
katus.fillColor = 'Salmon'


// sulgen jooned
katus.closed = true;

//ESIMENE TÄHT

var path = new Path.Star({
	center: [150, 250],
    points: 5,
    radius1: 6,
    radius2: 20,
    fillColor: 'LemonChiffon'
});

function onFrame(event) {
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	path.fillColor.hue += 3;
}


var RISTKYLIK = new Path.Star({
	center: [150, 250],
    points: 5,
    radius1: 6,
    radius2: 20,
    fillColor: 'LemonChiffon'
});

RISTKYLIK.onFrame = function(event) {
    this.rotate(3);
    this.fillColor.hue = this.fillColor.hue + 0.5;
};

var path = new Path.Star({
	center: [150, 50],
    points: 5,
    radius1: 6,
    radius2: 20,
    fillColor: 'LemonChiffon'
});

function onFrame(event) {
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	path.fillColor.hue += 3;
}


var RISTKYLIK = new Path.Star({
	center: [150, 50],
    points: 5,
    radius1: 6,
    radius2: 20,
    fillColor: 'LemonChiffon'
});

RISTKYLIK.onFrame = function(event) {
    this.rotate(3);
    this.fillColor.hue = this.fillColor.hue + 0.5;
};

//KOLMAS TÄHT
var path = new Path.Star({
	center: [500, 50],
    points: 5,
    radius1: 6,
    radius2: 20,
    fillColor: 'LemonChiffon'
});

function onFrame(event) {
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	path.fillColor.hue += 3;
}


var RISTKYLIK = new Path.Star({
	center: [500, 50],
    points: 5,
    radius1: 6,
    radius2: 20,
    fillColor: 'LemonChiffon'
});

RISTKYLIK.onFrame = function(event) {
    this.rotate(3);
    this.fillColor.hue = this.fillColor.hue + 0.5;
};


//NELJAS TÄHT
var path = new Path.Star({
	center: [100, 300],
    points: 5,
    radius1: 6,
    radius2: 20,
    fillColor: 'LemonChiffon'
});

function onFrame(event) {
	// Each frame, change the fill color of the path slightly by
	// adding 1 to its hue:
	path.fillColor.hue += 3;
}


var RISTKYLIK = new Path.Star({
	center: [400, 100],
    points: 5,
    radius1: 6,
    radius2: 20,
    fillColor: 'LemonChiffon'
});

RISTKYLIK.onFrame = function(event) {
    this.rotate(3);
    this.fillColor.hue = this.fillColor.hue + 0.5;
};

var auk = new Path.Circle({
    center: [428, 250],
    radius: 20,
    fillColor: 'AntiqueWhite'
});

var auk = new Path.Circle({
    center: [230, 300],
    radius: 20,
    fillColor: 'AntiqueWhite'
});


//KEHAD
var keha = new Path();
keha.strokeColor = 'Lavender';
keha.add(new Point(230, 320));
keha.add(new Point(195, 390));
keha.add(new Point(270, 390));

keha.fillColor = 'Lavender'

// sulgen jooned
keha.closed = true;

//vasak keha

var keha = new Path();
keha.strokeColor = 'Lavender';
keha.add(new Point(428, 270));
keha.add(new Point(395, 350));
keha.add(new Point(468, 350));

keha.fillColor = 'Lavender'

// sulgen jooned
keha.closed = true;


var keha = new Path();
keha.strokeColor = 'LightCyan';
keha.add(new Point(352, 250));
keha.add(new Point(409, 300));
keha.add(new Point(366, 300));

keha.fillColor = 'LightCyan'

var keha = new Path();
keha.strokeColor = 'LightCyan';
keha.add(new Point(155, 290));
keha.add(new Point(213, 340));
keha.add(new Point(168, 340));

keha.fillColor = 'LightCyan'

var keha = new Path();
keha.strokeColor = 'LightCyan';
keha.add(new Point(300, 290));
keha.add(new Point(293, 340));
keha.add(new Point(248, 340));

keha.fillColor = 'LightCyan'


var keha = new Path();
keha.strokeColor = 'LightCyan';
keha.add(new Point(500, 250));
keha.add(new Point(493, 300));
keha.add(new Point(448, 300));

keha.fillColor = 'LightCyan'
 
 
 /// HALOD
 // VASAK
var keha = new Path();
keha.strokeColor = 'gold';
keha.add(new Point(230, 275)); // neljas
keha.add(new Point(210, 265));//esimene
keha.add(new Point(230, 255));//teine
keha.add(new Point(250, 265));//kolmas

keha.fillColor = 'gold'

keha.closed = true
keha.smooth ();

//PAREM

var keha = new Path();
keha.strokeColor = 'gold';
keha.add(new Point(427, 226)); // neljas
keha.add(new Point(407, 216));//esimene
keha.add(new Point(427, 206));//teine
keha.add(new Point(447, 216));//kolmas

keha.fillColor = 'gold'

keha.closed = true
keha.smooth ();

















