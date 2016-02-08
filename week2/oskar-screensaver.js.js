// Oskar Tikka
// EKA BGD2 2016 loovkood

// screen size
var WIDTH = view.size.width;
var HEIGHT = view.size.height;
 
 
console.log(WIDTH + ' and ' + HEIGHT);
 

var BACKGROUND = new Path.Rectangle(8, 2, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0.1);
 
 
var DOTS = [];
var INDEX = 0;
 
// spacing between dots
var STEP = 7;

for (var x = STEP; x < WIDTH - STEP; x = x + STEP) {
    // for every loop lets draw a circle with diameter of 3px
    // HEIGHT / 2 means that we'll draw it into
    // the middle of the screen
 
    DOTS[INDEX] = new Path.Line(x, HEIGHT / 2, 2);
    DOTS[INDEX].strokeColor = 'chartreuse';
    DOTS[INDEX].strokeWidth = '0.08'
    this.fillColor = new Color(2, 1, 1);
    
 
    INDEX++;
}
 

view.onFrame = function(event) {

    for (var i = 5; i < DOTS.length; i = i + 1) {

        DOTS[i].position.y = HEIGHT/2 + Math.tan(event.time/500 * i + 55) * 120;
    }
};
