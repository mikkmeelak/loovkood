

var celestial = new Path({
    
    center: [0, 0],
    radius: 0,
    shadowColor: new Color("#003399"),
    shadowBlur: 40,
    shadowOffset: new Point(0, 0)
});
celestial.strokeColor = new Color(1, 1, 0);
celestial.strokeWidth = 2;


celestial.add(200, 100);
celestial.add(200, 200);
celestial.add(150, 200);
celestial.add(150, 100);

celestial.closed = true;
celestial.smooth()




var celestial1 = new Path({
    
    center: [0, 0],
    radius: 0,
    shadowColor: new Color("#003399"),
    shadowBlur: 40,
    shadowOffset: new Point(0, 0)
});
celestial1.strokeColor = new Color(1, 1, 0);
celestial1.strokeWidth = 2;


celestial1.add(200, 100);
celestial1.add(200, 200);
celestial1.add(150, 200);
celestial1.add(150, 100);

celestial1.closed = true;
celestial1.smooth()

celestial1.rotate(-45);


var celestial2 = new Path({
    
    center: [0, 0],
    radius: 0,
    shadowColor: new Color("#003399"),
    shadowBlur: 40,
    shadowOffset: new Point(0, 0)
});
celestial2.strokeColor = new Color(1, 1, 0);
celestial2.strokeWidth = 2;


celestial2.add(200, 100);
celestial2.add(200, 200);
celestial2.add(150, 200);
celestial2.add(150, 100);

celestial2.closed = true;
celestial2.smooth()

celestial2.rotate(45);


var celestial3 = new Path({
    
    center: [0, 0],
    radius: 0,
    shadowColor: new Color("#003399"),
    shadowBlur: 40,
    shadowOffset: new Point(0, 0)
});
celestial3.strokeColor = new Color(1, 1, 0);
celestial3.strokeWidth = 2;


celestial3.add(200, 100);
celestial3.add(200, 200);
celestial3.add(150, 200);
celestial3.add(150, 100);

celestial3.closed = true;
celestial3.smooth()

celestial3.rotate(90);


    
    

// teen joone
var line1 = new Path({
   
    center: [0, 0],
    radius: 0,
    // Set the shadow color of the circle to RGB black:
    shadowColor: new Color(0, 1, 0),
    // Set the shadow blur radius to 12:
    shadowBlur: 12,
    // Offset the shadow by { x: 5, y: 5 }
    shadowOffset: new Point(0, 0)
});
line1.strokeColor = new Color(0, 1, 0, 0.3);
line1.strokeWidth = 2;




// LINE.add(x, y);
line1.add(-6, 490);
line1.add(25, 379);
line1.add(50, 400);
line1.add(75, 490);
line1.add(100, 490);
line1.add(125, 379);
line1.add(150, 400);
line1.add(175, 490);
line1.add(200, 490);
line1.add(225, 379);
line1.add(250, 400);
line1.add(275, 490);
line1.add(300, 490);
line1.add(325, 379);
line1.add(350, 400);
line1.add(375, 490);
line1.add(400, 490);
line1.add(425, 379);
line1.add(450, 400);
line1.add(475, 490);
line1.add(500, 490);
line1.add(525, 379);
line1.add(550, 400);
line1.add(575, 490);
line1.add(600, 490);

line1.closed = false;
line1.smooth()





// teen joone
var line1 = new Path({
   
    center: [0, 0],
    radius: 0,
    // Set the shadow color of the circle to RGB black:
    shadowColor: new Color(0, 1, 0),
    // Set the shadow blur radius to 12:
    shadowBlur: 12,
    // Offset the shadow by { x: 5, y: 5 }
    shadowOffset: new Point(0, 0)
});
line1.strokeColor = new Color(0, 1, 0, 0.3);
line1.strokeWidth = 2;




// LINE.add(x, y);
line1.add(-6, 450);
line1.add(25, 410);
line1.add(50, 450);
line1.add(75, 410);
line1.add(100, 450);
line1.add(125, 410);
line1.add(150, 450);
line1.add(175, 410);
line1.add(200, 450);
line1.add(225, 410);
line1.add(250, 450);
line1.add(275, 410);
line1.add(300, 450);
line1.add(325, 410);
line1.add(350, 450);
line1.add(375, 410);
line1.add(400, 450);
line1.add(425, 410);
line1.add(450, 450);
line1.add(475, 410);
line1.add(500, 450);
line1.add(525, 410);
line1.add(550, 450);
line1.add(575, 410);
line1.add(600, 450);

line1.closed = false;
line1.smooth()









var line = new Path({
   
    center: [0, 0],
    radius: 0,
    // Set the shadow color of the circle to RGB black:
    shadowColor: new Color(1, 1, 1),
    // Set the shadow blur radius to 12:
    shadowBlur: 12,
    // Offset the shadow by { x: 5, y: 5 }
    shadowOffset: new Point(0, 0)
});
line.strokeColor = 'white';
line.strokeWidth = 1;
line.fillColor = 'white';




// LINE.add(x, y);

line.add(0, 360);
line.add(0, 520);
line.add(600,520);
line.add(600, 360);

line.onFrame = function(event) {
    // Every frame, rotate the path by 3 degrees:
        this.position.x = this.position.x + 1;
        
        if (this.position.x > 903) {
            // tee midagi, kui see on tõene console.log()
            this.position.x = 297;
        }
}

var line = new Path({
   
    center: [0, 0],
    radius: 0,
    // Set the shadow color of the circle to RGB black:
    shadowColor: new Color(1, 0, 0),
    // Set the shadow blur radius to 12:
    shadowBlur: 12,
    // Offset the shadow by { x: 5, y: 5 }
    shadowOffset: new Point(0, 0)
});
line.strokeColor = 'red';
line.strokeWidth = 1;



// LINE.add(x, y);

line.add(0, 360);
line.add(0, 520);

line.onFrame = function(event) {
    // Every frame, rotate the path by 3 degrees:
        this.position.x = this.position.x + 1;
        
        if (this.position.x > 603) {
            // tee midagi, kui see on tõene console.log()
            this.position.x = -3;
        }
}





var path = new Path.Circle(new Point(470, 50), 220);;

path.fillColor = {
    gradient: {
        stops: [
            /*['GhostWhite', 0.05],*/ 
            ['white', 0.25], 
            ['HoneyDew', 0.5],
            ['white', 1]
            ],
        radial: true
    },
    origin: path.position,
    destination: path.bounds.rightCenter
};


var line = new Path({
    center: [0, 0],
    radius: 0,
    shadowColor: new Color(0, 0.22, 0.68),
    shadowBlur: 30,
    shadowOffset: new Point(0, 0)
});
line.strokeColor = new Color(1, 1, 1)
line.strokeWidth = 1;

line.add(0, 200);
line.add(100, 500);
line.add(200, 520);
line.add(250, 340);
line.add(330, 420);
line.add(500, 200);
line.add(600, 220);

line.closed = false;
line.smooth()



var path = new Path.Rectangle(new Point(0, 0), new Size(600, 600));
path.strokeColor = 'black';

