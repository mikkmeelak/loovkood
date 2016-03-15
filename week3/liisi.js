// Liisi Lasn
// EKA BGD2 2016 loovkood
// Pixelart/joon

document.title = 'Liisi';

var WIDTH = view.size.width;
var HEIGHT = view.size.height;
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
BACKGROUND.fillColor = new Color(0);

tool.fixedDistance = 15;

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

view.onFrame = function(event) {
    for (var i = 0; i < TEKST.length; i++) {
        TEKST[i].fillColor.hue += Math.random();
    }
}
