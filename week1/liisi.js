//TEOORIA//

//KONSOOL:

//console.log(5+1);

//VARIATSIOONID: 

var BANAANID = 5;
var PIRNID = 7;
var SMS = 'yoyoy';

var PUUVILJAD = BANAANID + PIRNID;

//FUNKTSIOONID:

//function mitupuuviljaon(puuvili1, puuvili2) {
//    var PUUVILJAD = puuvili1 + puuvili2;
//    console.log('sul on ' + PUUVILJAD);
//}

//mitupuuviljaon(BANAANID, PIRNID);

//SPETSIIFILISEM//

//JOON, RISTKÜLIK

//var JOON = new Path();
//JOON.strokeColor = 'red';

//JOON.add(x, y);
//JOON.add(30, 30);
//JOON.add(30, 200);
//JOON.add(150, 200);
//JOON.add(150, 30);
//JOON.add(30, 30);
        //VIIMANE PUNKT ALGUSPUNKT!

//JOON.closed = true;
//JOON.dashArray = [3, 3];
//JOON.smooth();

var punkt1 = 1;
var punkt2 = 4;

//KOKKU VÕTMISEKS:
var massiiv = [ punkt1, punkt2 ];

//RING

//var RING = new Path.Circle(500, 500, 200);
//RING.strokeColor = new Color(0, 0, 0);
//RING.fillColor = new Color(0, 0, 0.3);
//RING.strokeWidth = 6;
//RING.dashArray = [1, 20];

//RING.onFrame = function(event) {
//    var HALL = Math.random();
//    this.fillColor = new Color(HALL);
//    this.strokeWidth = HALL * 100;
//}

    var topLeft = [180, 100];
    var bottomRight = [580, 480];

var TAUST = new Path.Rectangle({
   topLeft: topLeft,
    strokeWidth: 3,
    bottomRight: bottomRight,
    strokeColor: {
        gradient: {
            stops: ['lightpink', 'silver']
        },
        origin: topLeft,
        destination: bottomRight
    }
});

    TAUST.onFrame = function(event){
        this.position.y = this.position.y + 2;
        if (this.position.y > 400) {
   this.position.y = 0;
        }
    } 

    var topLeft = [150, 150];
    var bottomRight = [450, 450];


var RISTKYLIK = new Path.Rectangle({
    topLeft: topLeft,
    bottomRight: bottomRight,
    shadowColor: new Color('powderblue'),
    shadowBlur: 12,
    shadowOffset: new Point(5, 5),
    fillColor: {
        gradient: {
            stops: ['mistyrose', 'powderblue']
        },
        origin: topLeft,
        destination: bottomRight
    }

});
RISTKYLIK.onFrame = function(event) {
    this.rotate(1);
};

//css3 color names

// for loop
var COUNT = 20; 
for (var i = 0; i < 100; i++) {
    console.log(i);

    var X = Math.random() * 600;
    var Y = Math.random() * 200;

    var UUSRING = new Path.Circle(X, i * 5, 5);
    UUSRING.fillColor = 'white';
    UUSRING.opacity = 0.3;
};


//    UUSRING.onFrame = function(event) {
//    this.position = this.position + 2;
//}
 // if (this.position.x > 600) {
   // this.position.x = 0;
       // }


//UUSRING.onFrame = function(event) {
//this.position.y = this.position.y + 2 * SUUND;
        
        //if (this.position.y > 600) {
          //  SUUND = -1;
        //}

//}


// new Path.Rectangle(x, y, width, height);
var RISTKYLIK = new Path.Rectangle(230, 250, 250, 10);
//    RISTKYLIK.fillColor = 'slategray';
//    RISTKYLIK.dashArray = [10, 20];

var path = new Path.Rectangle(new Point(240, 240), new Size(200, 10));
path.style = {
	fillColor: 'slategray',
	opacity: 0.7,
};


var copy = path.clone();
var point = copy.bounds.bottomLeft;

function onFrame(event) {
	copy.rotate(3, point);
};

//RISTKYLIK.onFrame = function(event) {
//  this.rotate(3);
  //this.fillColor.hue = this.fillColor.hue + 0.5;
 
//};







//var children = project.activeLayer.children;
//function onFrame(event) {
//	for (var i = 0, l = children.length; i < l; i++) {
//		var item = children[i];

//		item.rotate(Math.random(event.count + i));

//}
//}


    
    




