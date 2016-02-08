// Liisi Lasn
// EKA BGD2 2016 loovkood
// screensaver Philippe Decrauzat'ile
 
var WIDTH = view.size.width;
var HEIGHT = view.size.height;
console.log(WIDTH + ' ja ' + HEIGHT);
 
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
    BACKGROUND.fillColor = new Color(0);

// for loop
//
var DOTS = [];
var INDEX = 0;
var STEP = 20;
 
var LAINED = [];
var COUNT = 300;
 
for (var i = 0; i < COUNT; i++) {
    LAINED[i] = new Path.Line({
        from: [ 0, HEIGHT + 500 * HEIGHT],
        to: [WIDTH, HEIGHT + 500 * HEIGHT],
        strokeWidth: 2,
    });
    LAINED[i].strokeColor = new Color ('powderblue');
     
    LAINED[i].insert(1, WIDTH/3, HEIGHT /3);
}
 
view.onFrame = function(event) {
    for (var i = 0; i < LAINED.length; i++) {
        LAINED[i].position.x += Math.cos(event.time) /5 * i; 
    }
}

