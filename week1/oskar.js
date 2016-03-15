
// VEELRINGID

var COUNT = 4;
for (var i = 0; i < COUNT; i++) {
    console.log(i);
    
    var X = Math.random () * 600;
    var Y = Math.random () * 600;
    
    var VEELRING = new Path.Circle(X, Y, 100);
    VEELRING.fillColor = new Color(1, 1, 1);
    
VEELRING.onFrame = function(event) {
    this.fillColor.hue = this.fillColor.hue - 0.3;
    
    this.strokeColor = new Color(0, 1, 0)
    this.strokeWidth = (300)
    this.dashArray = [1, 3];


this.onFrame = function(event) {
    this.strokeColor.hue = this.strokeColor.hue + 0.8;
    this.rotate(-1.5)
}
}
}

// RINGID

var COUNT = 4;
for (var i = 0; i < COUNT; i++) {
    console.log(i);
    
    var X = Math.random () * 600;
    var Y = Math.random () * 600;
    
    var RING = new Path.Circle(X, Y, 100);
    RING.fillColor = new Color(1, 1, 1);
    
RING.onFrame = function(event) {
    this.fillColor.hue = this.fillColor.hue - 0.3;
    
    this.strokeColor = new Color(0, 1, 0)
    this.strokeWidth = (300)
    this.dashArray = [1, 3];


this.onFrame = function(event) {
    this.strokeColor.hue = this.strokeColor.hue - 0.8;
    this.rotate(1.5)
}
}
}

