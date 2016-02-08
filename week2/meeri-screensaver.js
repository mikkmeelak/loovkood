var WIDTH = view.size.width;
var HEIGHT = view.size.height;
console.log(WIDTH + ' ja ' + HEIGHT);
 
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
    BACKGROUND.fillColor = new Color('CornSilk');
 
// for loop
//
var DOTS = [];
var INDEX = 200;
var STEP = 1;
 
var LAINED = [];
var COUNT = 11;
 
for (var i = 0; i < COUNT; i++) {
    LAINED[i] = new Path.Line({
        from: [40, HEIGHT + 0 * HEIGHT],
        to: [WIDTH, HEIGHT + 10 * HEIGHT],
        strokeWidth: 2,
    });
    LAINED[i].strokeColor = new Color ('powderblue');
     
    LAINED[i].insert(1, WIDTH/1, HEIGHT /90);
}
 
view.onFrame = function(event) {
    for (var i = 0; i < LAINED.length; i++) {
        LAINED[i].position.x += Math.cos(event.time) /1 * i; 
    }
}



