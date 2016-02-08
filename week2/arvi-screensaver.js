// Arvi Piir
// EKA BGD2 2016 loovkood

var WIDTH = view.size.width;
var HEIGHT = view.size.height;
console.log(WIDTH + ' ja ' + HEIGHT);
 
var BACKGROUND = new Path.Rectangle(1, 1, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color (0);
 
// for loop
var DOTS = [];
var INDEX = 8;
var STEP = 16;
 

 


 
// building waves
var LAINED = [];
var COUNT = 99;
 
for (var i = 0; i < COUNT; i++) {
    LAINED[i] = new Path.Line({
        from: [0, HEIGHT/1 + Math.cos(i) / 50 * HEIGHT/50],
        to: [WIDTH, HEIGHT/1 + Math.cos(i+1) *100],
        strokeColor: {
          hue: 10 + Math.sin(i) * 333,     // value 0-360
             saturation: 99,                   // value 0-1
             brightness: 66                    // value 0-1
         },
         strokeWidth: 1,
    });
     
    //LAINED[i].insert(9, i * 10, HEIGHT/10 + i);
 
LAINED[i].insert(1, i * 30, HEIGHT/2 + i);
     LAINED[i].smooth();
}
 
view.onFrame = function (event) {
    for (var i = 1; i < LAINED.length; i++) {
        LAINED[i].position.y += Math.sin(event.time/10 * i + 5) * 10;
    }
}

view.onFrame = function(event) {
    for (var i = 0; i < LAINED.length; i++) {
        LAINED[i].position.y += Math.sin(event.time) / 50 * i;
        LAINED[i].rotate(1);
    }
}
 
     
    