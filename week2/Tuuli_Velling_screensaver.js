var WIDTH = view.size.width;
var HEIGHT = view.size.height;
console.log(WIDTH + ' ja '+ HEIGHT)

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH,HEIGHT);
BACKGROUND.fillColor = 'pink';

//buiding waves (liikumatu)
var LAINED = [];
var COUNT = 5;
for (var i = 0; i < 600; i++) {
    console.log(i);
    LAINED[i] = new Path.Line({
        from: [-5, 500],
        to: [ WIDTH, i*7 ],
        strokeColor: {
            hue: 120 + Math.sin(i) * 60, // value 0-360
            saturation: 1, // value 0-1
            brightness: 1 // value 0-1
        }
    });

LAINED[i].insert(20, 0, 20 + i * 6);
LAINED[i].smooth();
    
}

view.onFrame = function(event) {
    for (var i =0; i< 16; i++) {
        LAINED[i].position.y += Math.tan(event.time) / 60 * i + 0.4;
    }
}

//buiding 2nd waves
var LAINED2 = [];
var COUNT = 1;
for (var i = 0; i < 80; i++) {
    console.log(i);
    LAINED2[i] = new Path.Line({
        from: [0, HEIGHT/7],
        to: [ WIDTH, i*5 ],
        strokeColor: {
            hue: 20 + Math.sin(i) * 60, // value 0-360
            saturation: 1, // value 0-1
            brightness: 1 // value 0-1
        }
    });

LAINED2[i].insert(50, 0, WIDTH + i * 6);
LAINED2[i].smooth();
    
}

view.onFrame = function(event) {
    for (var i =0; i< LAINED2.length; i++) {
        LAINED2[i].position.y += Math.tan(event.time) / 60 * i + 0.4;
    }
}