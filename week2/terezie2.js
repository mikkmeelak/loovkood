var WIDTH = view.size.width;
var HEIGHT = view.size.height;
console.log(WIDTH + ' ja ' + HEIGHT);

var BACKGROUND = new Path.Rectangle(1, 1, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color (0.0);

// for loop
var DOTS = [];
var INDEX = 8;
var STEP = 16;

// for (var x = STEP; x < WIDTH - STEP; x = x + STEP) {
   // console.log(x);

   // DOTS[INDEX] = new Path.Circle(x, HEIGHT / 2, 2);
   // DOTS[INDEX].fillColor = 'red';

   // DOTS[INDEX] = new PointText(x, HEIGHT / 2);
   // DOTS[INDEX].fillColor = 'black';
//    // DOTS[INDEX].justification = 'center';
//    // DOTS[INDEX].content = 'hello!';
    
//   INDEX = INDEX + 1;
//}

//view.onFrame = function(event) {
//   for (var i = 0; i < DOTS.length; i = i + 1) {
//       DOTS[i].position.y = HEIGHT/2 + Math.tan(event.time/10*i) * 30;
//   }
//}

var CENTERLINE = new Path.Line(1, HEIGHT/2, WIDTH, HEIGHT/2);
CENTERLINE.strokeColor = 'black'; CENTERLINE.strokeWidth = 17;

// DOTS[6].fillColor = 'green';

// building waves
var LAINED = [];
var COUNT = 100;

for (var i = 0; i < COUNT; i++) {
    LAINED[i] = new Path.Line({
        from: [0, HEIGHT/1 + Math.cos(i) / 50 * HEIGHT/50],
        to: [WIDTH, HEIGHT/1 + Math.cos(i+1) *100],
        strokeColor: {
          hue: 10 + Math.sin(i) * 10,     // value 0-360
             saturation: 1,                   // value 0-1
             brightness: 1                    // value 0-1
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
// Create a point-text item at {x: 30, y: 30}:
var text = new PointText(new Point(200, 400));
text.fillColor = 'white';
    fontSize = ' 90 ';

// Set the content of the text item:
text.content = 'Good job!' 

var text = new PointText(new Point(300, 500));
text.fillColor = 'white';
    fontSize = ' 90 ';

text.content = 'Well done!'

var text = new PointText(new Point(300, 300));
text.fillColor = 'white';
    fontSize = ' 90 ';
text.content = 'You are a very valuable human being!'

var text = new PointText(new Point(500, 200));
text.fillColor = 'white';
    fontSize = ' 90 ';
text.content = 'I love you!'

    
    







