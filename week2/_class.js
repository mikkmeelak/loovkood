// measure screen size and save for later
var WIDTH = view.size.width;
var HEIGHT = view.size.height;

// print screen size to console. note the empty spaces around 'and'
console.log(WIDTH + ' and ' + HEIGHT);

// for background we draw a rectangle from top left corner
// and set its width and height the same as screens
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0.95);

// DOTS is an array for all our dots. helps us to find them later
var DOTS = [];
var INDEX = 0;

// this sets the spacing between dots
var STEP = 6;

// hello, this is for loop. it's going to be one of your best friends
// in coding. it works like this
// first we set an value we start our loop. here we have var x = STEP;
// then we say for how long we want this for-loop to loop
// read it as 'let's loop until this statement (x < WIDTH) is true'
// on every loop add something to previus value
// here we add STEP to x until our screen width allows
for (var x = STEP; x < WIDTH - STEP; x = x + STEP) {
	// for every loop lets draw a circle with diameter of 3px
	// HEIGHT / 2 means that we'll draw it into
	// the middle of the screen

    // DOTS[INDEX] = new Path.Circle(x, HEIGHT / 2, 3);
    // DOTS[INDEX].fillColor = 'red';

	// to see how an array DOTS works let's write INDEX number instead
    DOTS[INDEX] = new PointText(x, HEIGHT / 2);
    DOTS[INDEX].fillColor = 'black';
    DOTS[INDEX].justification = 'center';
    DOTS[INDEX].content = INDEX;

	// on every loop add one to INDEX
	// it's shorthand for INDEX = INDEX + 1;
    INDEX++;
}

// do something on every frame. probably your monitor is 60 frames per second
view.onFrame = function(event) {
	// we are using the DOTS array we defined and filles with DOTs before
	// let's loop it
    for (var i = 0; i < DOTS.length; i = i + 1) {
		// DOTS[] means get be a DOT from DOTS array from the position i
		// remember that array's count starts from 0
		// so DOTS[0] gets you the first dot from the array
        DOTS[i].position.y = HEIGHT/2 + Math.sin(event.time/5 * i + 5) * 600.0;
    }
};

// get seventh dot from DOTS and paint it green
// DOTS[6].fillColor = 'green';

// draw a line to the center of the screen
// var CENTERLINE = new Path.Line(0, HEIGHT/2, WIDTH, HEIGHT/2);
// CENTERLINE.strokeColor = 'gray';

// building waves
// var LAINED = [];
// var COUNT = 240;

// for (var i = 0; i < COUNT; i++) {
//     LAINED[i] = new Path.Line({
//         from: [ 0, HEIGHT/2 + Math.tan(i) / 2 * HEIGHT/2 ],
//         to: [ WIDTH, HEIGHT/2 + Math.tan(i + 60) * HEIGHT/2 ],
//         strokeColor: {
//             hue: 30 + Math.sin(i) * 360,     // value 0-360
//             saturation: 1,          			// value 0-1
//             brightness: 1           			// value 0-1
//         },
//         strokeWidth: 1,
//         // fillColor: new Color(255, 0, 40, 0.05)       // rgba
//         // dashArray: [2, 6]
//     });

//		// insert a point between start end endpoint of line
//     LAINED[i].insert(1, i * 10, HEIGHT/2 + i);
//     LAINED[i].smooth();
// }

// view.onFrame = function(event) {
//     for (var i = 0; i < LAINED.length; i++) {
//			// note that y += 55 is the same as y = y + 55
//         LAINED[i].position.y += Math.sin(event.time) / 20 * i;
//     }
// }
