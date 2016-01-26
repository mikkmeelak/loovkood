
// new Path.Rectangle(x, y, width, height);

    var HOUSE = new Path.Rectangle(300, 230, 320, 250);
    HOUSE.fillColor = 'MistyRose';
    HOUSE.strokeColor = 'MistyRose';



// SNOWMAN
    var SNOWMAN1 = new Path.Circle({
    center: [140, 550],
    radius: 60,
    fillColor: 'PaleGreen'
});

    SNOWMAN1.onFrame = function(event) {
    this.fillColor.hue = this.fillColor.hue + 8;
};



    var SNOWMAN2 = new Path.Circle({
    center: [140, 460],
    radius: 40,
    fillColor: 'PaleGreen'
});

    SNOWMAN2.onFrame = function(event) {
    this.fillColor.hue = this.fillColor.hue + 6;
};



    var SNOWMAN3 = new Path.Circle({
    center: [140, 395],
    radius: 30,
    fillColor: 'PaleGreen'
});

    SNOWMAN3.onFrame = function(event) {
    this.fillColor.hue = this.fillColor.hue + 4;
};

//SNOWMAN HANDS
    var hand1 = new Path.Circle({
    center: [185, 455],
    radius: 12,
    fillColor: 'PaleVioletRed'
});

    hand1.onFrame = function(event) {
    this.fillColor.hue = this.fillColor.hue + 4;
};


    var hand2 = new Path.Circle({
    center: [95, 455],
    radius: 12,
    fillColor: 'PaleVioletRed'
});

    hand2.onFrame = function(event) {
    this.fillColor.hue = this.fillColor.hue + 4;
};



//ROOF
    var ROOF = new Path();
    ROOF.strokeColor = 'PowderBlue';
    ROOF.add(new Point(460, 120));
    ROOF.add(new Point(245, 260));
    ROOF.add(new Point(680, 260));

    ROOF.fillColor = 'PowderBlue';




//WINDOWS
    var WINDOW1 = new Path.Rectangle(460, 300, 80, 70);
    WINDOW1.fillColor = 'CornSilk';
    WINDOW1.strokeColor = 'Coral';
    WINDOW1.strokeWidth = 4;

    WINDOW1.onFrame = function(event) {
    this.fillColor.hue = this.fillColor.hue + 0.9;
};


    var WINDOW2 = new Path.Rectangle(460, 370, 80, 70);
    WINDOW2.fillColor = 'CornSilk';
    WINDOW2.strokeColor = 'Coral';
    WINDOW2.strokeWidth = 4;

    WINDOW2.onFrame = function(event) {
    this.fillColor.hue = this.fillColor.hue + 0.9;
};


    var WINDOW3 = new Path.Rectangle(380, 300, 80, 70);
    WINDOW3.fillColor = 'CornSilk';
    WINDOW3.strokeColor = 'Coral';
    WINDOW3.strokeWidth = 4;

    WINDOW3.onFrame = function(event) {
    this.fillColor.hue = this.fillColor.hue + 0.9;
};


    var WINDOW4 = new Path.Rectangle(380, 370, 80, 70);
    WINDOW4.fillColor = 'CornSilk';
    WINDOW4.strokeColor = 'Coral';
    WINDOW4.strokeWidth = 4;

    WINDOW4.onFrame = function(event) {
    this.fillColor.hue = this.fillColor.hue + 0.9;
};



//snowing

var COUNT = 100
for (var i = 0; i< COUNT; i++){
    console.log(i);


    var X = Math.random() * 600;
    var Y = Math.random() * 600;

    var UUSRING = new Path.Circle(i * 6, Y, 5);
    UUSRING.fillColor = 'LightCyan';

    UUSRING.onFrame = function(event) {
       this.position.y = this.position.y + Math.random();

      if (this.position.y > 600){
            this.position.y = 0;
     }
    }
}  






