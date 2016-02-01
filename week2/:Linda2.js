//Linda Vainomäe
//EKA BGD2 loovkood 2016

var WIDTH = view.size.width;
var HEIGHT = view.size.height;
console.log(WIDTH + ' ja '+ HEIGHT)

var BACKGROUND = new Path.Rectangle (0, 0, WIDTH, HEIGHT)
BACKGROUND.fillColor = 'lightpink';
// for loop
var DOTS = [];
var INDEX = 0;
var STEP = 2;


//buiding waves
var LAINED = [];
var COUNT = 50;
for (var i =0; i < 100; i++){
    LAINED[i] = new Path.Line({
        from: [0, HEIGHT/ + Math.sin(i)*10, 0],
        to: [WIDTH, HEIGHT/2 + Math.tan(i)*Math.tan(i), 0],
        strokeColor: {
        hue: 100 + Math.sin(i)*Math.cos(i),
        saturation: -8,
        brightness: 1
        
        
    },
    strokewidth: 100,
});

LAINED[i].insert(50, WIDTH*i, HEIGHT*i)*i;
LAINED[i].smooth();
    
}

view.onFrame = function(event) {
    for (var i =0; i< LAINED.length; i++) {
        LAINED[i].position.y += Math.sin(event.time*i*0.01)*60;
        
    }
}