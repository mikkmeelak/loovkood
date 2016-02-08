var WIDTH = view.size.width;
var HEIGHT = view.size.height;

console.log(WIDTH + '1680 and ' + HEIGHT);

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0.1);


var DOTS = [];
var INDEX = 0;

var STEP = 15;

for (var x = STEP; x < WIDTH - STEP; x = x + STEP) {
    DOTS[INDEX] = new Path.Circle(x, HEIGHT / 2, 3);
    DOTS[INDEX].fillColor = 'red';
     INDEX++;
}

view.onFrame = function(event) {
    for (var i = 0; i < DOTS.length; i = i + 1) {
        DOTS[i].position.y = HEIGHT/2 + Math.sin(event.time/10 * i + 10) * 5;
    }
};


console.log(WIDTH + ' and ' + HEIGHT);

var text = new PointText(view.center);
text.content = '-----------------------------------------------------------------------';
text.style = {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 40,
    fillColor: 'white',
    justification: 'right'
};


console.log(WIDTH + ' and ' + HEIGHT);

var text = new PointText(view.center);
text.content = '-----------------------------------------------------------------------';
text.style = {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 40,
    fillColor: 'white',
    justification: 'left'
};

for (var x = STEP; x < WIDTH - STEP; x = x + STEP) {
    DOTS[INDEX] = new Path.Circle(x, HEIGHT / 4, 3);
    DOTS[INDEX].fillColor = 'blue';
     INDEX++;
}

view.onFrame = function(event) {
    for (var i = 0; i < DOTS.length; i = i + 1) {
        DOTS[i].position.y = HEIGHT/2 + Math.sin(event.time/10 * i + 5) * 10;
    }
};



//DOTS[28].fillColor = 'green'

 var CENTERLINE = new Path.Line(0, HEIGHT/2, WIDTH/1, HEIGHT/2);
CENTERLINE.strokeColor = 'white';
 
 

var circle = new Path.Circle({
    center: [200, 375],
    radius: 20
});
circle.style = {
    fillColor: 'red',
    strokeColor: 'red',
    strokeWidth: 6
};

var circle = new Path.Circle({
    center: [400, 375],
    radius: 20
});
circle.style = {
    fillColor: 'blue',
    strokeColor: 'blue',
    strokeWidth: 6
};

var circle = new Path.Circle({
    center: [600, 375],
    radius: 20
});
circle.style = {
    fillColor: 'red',
    strokeColor: 'red',
    strokeWidth: 6
};

var circle = new Path.Circle({
    center: [800, 375],
    radius: 20
});
circle.style = {
    fillColor: 'blue',
    strokeColor: 'blue',
    strokeWidth: 6
};


