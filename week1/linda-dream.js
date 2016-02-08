//Linda Vainomäe
// EKA BGD2 2016 loovkood
console.log();

//ristkylik (x, y, width, height);
/*var RISTKYLIK2 = new Path();
var RISTKYLIK2 = new Path.Rectangle(0, 0, 600, 600);
RISTKYLIK2.fillColor = 'mistyrose'; 

RISTKYLIK2.onFrame = function(event) {
 this.fillColor.hue = this.fillColor.hue + 0.5;
}*/

//for loop
var COUNT = 100; 
for (var i = 0; i < COUNT; i++){
 console.log(i)
 
 var X = Math.random() * 600; 
 var Y = Math.random() * 600; 
}

var RING = new Path();

var RING = new Path.Circle({
    center: [80, 50],
    radius: 35,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 20,
    shadowOffset: new Point(7, 7)
});
var RING2 = new Path();
var RING2 = new Path.Circle({
    center: [90, 70],
    radius: 27,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 20,
    shadowOffset: new Point(7, 7)
});
var RING3 = new Path();
var RING3 = new Path.Circle({
    center: [130, 40],
    radius: 40,
    fillColor: 'white',
    // Set the shadow color of the circle to RGB black:
    shadowColor: new Color(0, 0, 0.5),
    // Set the shadow blur radius to 12:
    shadowBlur: 20,
    // Offset the shadow by { x: 5, y: 5 }
    shadowOffset: new Point(9, 16)
});
var RING4 = new Path();
var RING4 = new Path.Circle({
    center: [60, 100],
    radius: 20,
    fillColor: 'white',
    // Set the shadow color of the circle to RGB black:
    shadowColor: new Color(0, 0, 0.5),
    // Set the shadow blur radius to 12:
    shadowBlur: 20,
    // Offset the shadow by { x: 5, y: 5 }
    shadowOffset: new Point(5, 5)
    
});




var RING5 = new Path();
var RING5 = new Path.Circle({
    center: [100, 100],
    radius: 30,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 15,
    shadowOffset: new Point(6, 6)
    
    
});


var RING6 = new Path();
var RING6 = new Path.Circle({
    center: [120, 70],
    radius: 26,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 15,
    shadowOffset: new Point(6, 6)
    
    
});



var RING7 = new Path();
var RING7 = new Path.Circle({
    center: [170, 90],
    radius: 42,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 15,
    shadowOffset: new Point(6, 6)
    
    
});
RING7.opacity = 0.8;

var RING8 = new Path();
var RING8 = new Path.Circle({
    center: [180, 50],
    radius: 28,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 20,
    shadowOffset: new Point(7, 7)
    
    
});

var RING9 = new Path();
var RING9 = new Path.Circle({
    center: [210, 60],
    radius: 22,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 20,
    shadowOffset: new Point(7, 7)
    
    
});
RING9.opacity = 0.7;

var RING10 = new Path();
var RING10 = new Path.Circle({
    center: [35, 75],
    radius: 22,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 20,
    shadowOffset: new Point(-7, 7)
    
    
});



RING10.opacity = 0.9;
var RING12 = new Path();
var RING12 = new Path.Circle({
    center: [400, 400],
    radius: 30,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 20,
    shadowOffset: new Point(-7, 7)
    
    
});
var RING16 = new Path();
var RING16 = new Path.Circle({
    center: [300, 400],
    radius: 25,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 20,
    shadowOffset: new Point(-7, 7)
});


var RING15 = new Path();
var RING15 = new Path.Circle({
    center: [350, 470],
    radius: 55,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 20,
    shadowOffset: new Point(-7, 7)
});

RING15.opacity = 0.7;

var RING13 = new Path();
var RING13 = new Path.Circle({
    center: [450, 430],
    radius: 50,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 20,
    shadowOffset: new Point(-7, 7)
    
    
});
RING13.opacity = 0.9;

var RING14 = new Path();
var RING14 = new Path.Circle({
    center: [390, 420],
    radius: 35,
    fillColor: 'white',
    shadowColor: new Color(0, 0, 0.5),
    shadowBlur: 20,
    shadowOffset: new Point(-7, 7)
});
RING14.opacity = 0.8;





var count = 150;


var path = new Path.Circle({
	center: [0, 0],
	radius: 10,
	fillColor: 'mistyrose',
    strokeColor: 'lightsteelblue',
});

var symbol = new Symbol(path);


for (var i = 0; i < count; i++) {	// The center position is a random point in the view:
	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
}


function onFrame(event) {
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
		item.position.x += item.bounds.width / 20;

		if (item.position.x > 600) {
			item.position.x = 0;
			
		}
	}
}

var ROOSARING = new Path();
var ROOSARING = new Path.Circle({
    center: [400, 400],
    radius: 120,
    shadowColor: 'PaleVioletRed',
    shadowBlur: 40,
    shadowOffset: new Point(10, 10)

    
 
    
});

  
ROOSARING.fillColor = {
    gradient: {
        stops: [['white', 0.01], ['pink', 0.5], ['palevioletred', 1]],
        radial: true
    },
    origin: ROOSARING.position,
    destination: ROOSARING.bounds.rightCenter


};

var RISTKYLIK = new Path();
var RISTKYLIK= new Path.Rectangle(0, 0, 600, 600);
RISTKYLIK.strokeColor = 'black';


ROOSARING.onFrame = function(event) {
     
     var SUUND =2; 
     
     this.position.y = this.position.y + SUUND; 
     
     if(this.position.y > 500){
         this.position.y = 0;  
     }
    
     }
     
     var JOON = new Path();
JOON.strokeColor = 'springgreen'; 
JOON.strokeWidth = 10; 

//JOON.add(x, y);
JOON.add(500, 500); 
JOON.add(600, 600);
JOON.add(500, 500);
JOON.add(550, 300);
JOON.add(500, 500);


JOON.smooth();


//RUUT
var RUUT = new Path ();
var RUUT = new Path.Rectangle(new Point(200, 200), new Size(300, 300));
RUUT.strokeColor = new Color (0, 0, 0.5);
RUUT.fillColor ='white';
RUUT.opacity = 0.3;

RUUT.onFrame = function(event){
    this.rotate (1);
}

var RISTKYLIK3 = new Path();
var RISTKYLIK3 = new Path.Rectangle(new Point (600,0), new Size(200, 600))
RISTKYLIK3.fillColor = 'white';

var RISTKYLIK4 = new Path();
var RISTKYLIK4 = new Path.Rectangle(new Point (0,600), new Size(800, 200))
RISTKYLIK4.fillColor = 'white';




