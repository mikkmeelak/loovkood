// Jorven Viilik
// EKA BGD2 2016 loovkood
// SCREENSAVER kellele?
 //UUS
var RISTKYLIK = new Path.Rectangle(10, 10, 600, 600);
RISTKYLIK.fillColor = new Color(0.6, 0.6, 0.6);

RISTKYLIK.onFrame = function(event){
    this.rotate(-0.1);

};

var path = new Path({
	// 80% black:
	strokeColor: [0.5],
	strokeWidth: 400,
	strokeCap: 'square'
});


var RISTKYLIK1 = new Path.Rectangle(50, 100, 400, 400);
RISTKYLIK1.fillColor = new Color(0.4, 0.4, 0.4);

RISTKYLIK1.onFrame = function(event){
    this.rotate(0.5);
    this.fillColor.hue = this.fillColor.hue + 2.6;
};




var RISTKYLIK3 = new Path.Rectangle(210, 10, 2000, 2000);
RISTKYLIK3.fillColor = new Color(0.1, 0.1, 0.1);

RISTKYLIK3.onFrame = function(event){
    this.rotate(-0.12);
    this.fillColor.hue = this.fillColor.hue + 3;
};



var RISTKYLIK2 = new Path.Rectangle(200, 200, -600, 600);
RISTKYLIK2.fillColor = new Color(0.2, 0.2, 0.2);

RISTKYLIK2.onFrame = function(event){
    this.rotate(0.3);
    this.fillColor.hue = this.fillColor.hue + 1;
};


var RISTKYLIK4 = new Path.Rectangle(210, 10, 700, 700);
RISTKYLIK4.fillColor = new Color(0, 0, 0);

RISTKYLIK4.onFrame = function(event){
    this.rotate(-0.1);
    this.fillColor.hue = this.fillColor.hue + 3;
};

// The amount of segment points we want to create:
var amount = 5;

// The maximum height of the wave:
var height = 60;

// Create a new path and style it:
var path = new Path({
	// 80% black:
	strokeColor: '   #99ccff',
	strokeWidth: 500,
	strokeCap: 'square'
});

// Add 5 segment points to the path spread out
// over the width of the view:
for (var i = 0; i <= amount; i++) {
	path.add(new Point(i / amount, 1) * view.size);
}


function onFrame(event) {
	// Loop through the segments of the path:
	for (var i = 0; i <= amount; i++) {
		var segment = path.segments[i];

		// A cylic value between -1 and 1
		var sinus = Math.sin(event.time * 3 + i);

		// Change the y position of the segment point:
		segment.point.y = sinus * height + 600;
	}
	// Uncomment the following line and run the script again
	// to smooth the path:
	// path.smooth();
}
