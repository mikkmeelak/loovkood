// Liisi Lasn
// EKA BGD2 2016 loovkood
// Pixelart/joon

var WIDTH = view.size.width;
var HEIGHT = view.size.height;
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
    BACKGROUND.fillColor = new Color(0);

//paper.js conf
tool.fixedDistance = 15;
//tool.maxDistance = 100;

var TEKST =[];
var INDEX = 0;
//var TAHESTIK = 'ABCDEFGHIJKLMNOPQRSTUVWÕÄÖÜXYabcdefghijklmnopqrstuvwõäöüxy';
var TAHESTIK = '--__-';


function onMouseDrag(event) {

    TEKST[INDEX] = new PointText(event.middlePoint);
    TEKST[INDEX].justification = 'center';
    TEKST[INDEX].fillColor = new Color('firebrick');
    TEKST[INDEX].fontWeight = 'bold';
    TEKST[INDEX].fontSize = 60;

    TEKST[INDEX].content = Math.floor(Math.random() * TAHESTIK.length);
    var ASUKOHT = Math.floor(Math.random() * TAHESTIK.length);
    TEKST[INDEX].content = TAHESTIK[ASUKOHT];
    INDEX = INDEX + 1;

}

//    TEKST[INDEX].shadowColor =  new Color(1, 1, 1);
//    TEKST[INDEX].shadowOffset = new Point(5, 5);
//    TEKST[INDEX].shadowBlur = 12;

//function onMouseUp(event) {
//    console.log(event.pressure);
//}


view.onFrame = function(event) {
//    console.log(event.time);
    
    for (var i = 0; i < TEKST.length; i++) {
        TEKST[i].fillColor.hue += Math.random();
//        TEKST[i].rotate(Math.random()*3);
    }
}
