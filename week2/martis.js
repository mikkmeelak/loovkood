//Martis Roosimaa
// EKA BGD2 2016 loovkood



var WIDTH = view.size.width;
var HEIGHT = view.size.height;
console.log(WIDTH + ' ja ' + HEIGHT);

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color('black');


//for loop
var DOTS = [];
var INDEX = 0;
var STEP = 20;

for (var x = STEP; x < WIDTH - STEP; x = x + STEP) {
   console.log(x); 
   
   INDEX = INDEX + 1;
}

view.onFrame = function(event) {
    for (var i = 0; i < DOTS.length; i = i + 1) {
        DOTS[i].position.y = DOTS[i].position.y + Math.sin(event.time/10 * i *60);
        
    }
}

var LAINED = [];
var COUNT = 300

for (var i = 0; i < COUNT; i++) {
    LAINED[i] = new Path.Line({
        from: [ 0, HEIGHT/3 + Math.tan(i) * HEIGHT/2 ],
        to: [ WIDTH, HEIGHT/2 + Math.cos(i) * 100],
        strokeWidth: 0.35,
        strokeColor: {
            hue: 20 + Math.sin(i) * 200,
            saturation: 1,
            brightness: 1
        }
    });
    
    LAINED[i].insert(1, WIDTH/1, HEIGHT/3 + i);
    LAINED[i].smooth();
}



view.onFrame = function(event) {
    for (var i = 0; i < LAINED.length; i++) {
        LAINED[i].position.y += Math.sin(event.time) / 50 * i;
        LAINED[i].rotate(1);
    }
}