var COUNT = 100;
for (var i = 0; i < COUNT; i++) {
    console.log(i)
    
    var X = Math.random() * 600
    var Y = Math.random() * 600
    
    var UUSRING = new Path.Circle(X, Y, 10);
    UUSRING.fillColor = new Color(0,0,0.0)
    
    UUSRING.onFrame = function(event) {
        this.position.x = this.position.x + Math.random();
        
        if (this.position.x > 600) {
            this.position.x = 0;
            //console.log('jah')
        }
    }
}





//pea

var myBall = new Path.Circle(new Point(300, 290), 250);
myBall.strokeColor = 'black';
myBall.fillColor = 'white';
myBall.strokeWidth = 7;

//silmad

var RING = new Path.Circle(400, 240, 30);
RING.strokeColor = new Color(0,0,0);
RING.fillColor = new Color(0,6,4)
RING.strokeWidth = 7;

RING.onFrame = function(event) {
    var HALL = Math.random();
    this.fillColor = new Color(HALL);
    this.strokeWidth = HALL * 50;
};

var RING = new Path.Circle(200, 240, 30);
RING.strokeColor = new Color(0,0,0);
RING.fillColor = new Color(0,6,4)
RING.strokeWidth = 7;

RING.onFrame = function(event) {
    var HALL = Math.random();
    this.fillColor = new Color(HALL);
    this.strokeWidth = HALL * 50;
};


//suu

var path = new Path();
path.strokeColor = 'black';
path.strokeWidth = 1;

var firstPoint = new Point(380, 400);
path.add(firstPoint);

var throughPoint = new Point(250, 401);
var toPoint = new Point(220, 400);
path.arcTo(throughPoint, toPoint);

path.onFrame = function(event) {
    var HALL = Math.random();
    this.fillColor = new Color(HALL);
    this.strokeWidth = HALL * 100;
};

// juuksed

var path = new Path();
path.strokeColor = 'black';
path.strokeWidth = 30;

var firstPoint = new Point(135, 100);
path.add(firstPoint);

var throughPoint = new Point(300, 170);
var toPoint = new Point(465, 100);
path.arcTo(throughPoint, toPoint);

