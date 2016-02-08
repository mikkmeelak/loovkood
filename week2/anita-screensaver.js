var WIDTH = view.size.width;
var HEIGHT = view.size.height;
console.log(WIDTH + 'ja' + HEIGHT);


var BACKGROUND = new Path.Rectangle(0, 0, WIDTH,HEIGHT);
BACKGROUND.fillColor = 'Lavender';



//for loop
var DOTS = [];
var INDEX = 0;
var STEP = 120;

 /*
for (var x = STEP; x < WIDTH - STEP; x = x + STEP)   {
    console.log(x);
    
// DOTS[INDEX] = new Path.Circle(x, HEIGHT / 2, 3);
 //   DOTS[INDEX].fillColor = 'red';
 
      DOTS[INDEX] = new PointText(x, HEIGHT / 2);
      DOTS[INDEX].fillColor = 'black';
      DOTS[INDEX].justification = 'center';
      DOTS[INDEX].content = INDEX;
    
    INDEX = INDEX + 1;
}

view.onFrame = function(event){
    for (var i = 0; i < DOTS.length; i = i + 1) {
        DOTS[i].position.y = HEIGHT/2 + Math.sin(event.time/10 * i) * 100;
    }
}


var CENTERLINE = new Path.Line (0, HEIGHT/2, WIDTH, HEIGHT/2);
CENTERLINE.strokeColor = 'grey'; */

//DOTS[6].fillColor = 'green';



//building waves
var LAINED = [];
var COUNT = 80;

for (var i = 0; i < COUNT; i++){
    LAINED[i] = new Path.Line({
        from: [ 0, HEIGHT/2 + Math.sin(i) / 2 * HEIGHT/ 2],
        to: [ WIDTH, HEIGHT/2 + Math.tan(i + 160) * HEIGHT/2 ],
        strokeColor: {
            hue: Math.tan(i) * 100,  //value 0-360
            saturation: 1,  //value 0-1
            brightness: 0   //value 0-1
        },
        strokeWidth: 8,
       // fillColor: new Color (255, 0, 40, 0.05)   //rgba
        dashArray: [2, 6]
    });
    
    LAINED[i].insert(40, i * 100, HEIGHT/20 + i);
    LAINED[i].smooth();
}
    
    
view.onFrame = function(event) {
    for (var i = 0; i < LAINED.length; i++) {
        LAINED[i].position.y += Math.sin(event.time) / 10 * i;
    }
}
