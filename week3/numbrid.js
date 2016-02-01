// Liisi Lasn
// EKA BGD2 2016 loovkood

var WIDTH = view.size.width;
var HEIGHT = view.size.height;
console.log(WIDTH + ' ja ' + HEIGHT);

var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);
    BACKGROUND.fillColor = new Color(0);

//paper.js conf
tool.fixedDistance = 30;
//tool.maxDistance = 100;

var TEKST =[];
var INDEX = 0;

function onMouseDrag(event) {
//    KASTID[INDEX] = new Path.Star(event.middlePoint, 6, 5, 10);
//    KASTID[INDEX].strokeColor = 'powderblue';

    TEKST[INDEX] = new PointText(event.middlePoint);
    TEKST[INDEX].strokeColor = 'white';
    TEKST[INDEX].justification = 'center';
    TEKST[INDEX].fillColor = new Color(Math.random());
//    TEKST[INDEX].fontWeight = event.delta.length;
    TEKST[INDEX].fontSize = 60;
    TEKST[INDEX].content = INDEX;
    TEKST[INDEX].dashArray = [2, 10];
    
    INDEX = INDEX + 1;

}

//function onMouseUp(event) {
//    console.log(event.pressure);
//}

view.onFrame = function(event) {
//    console.log(event.time);
    
    for (var i = 0; i < KASTID.length; i++) {
        KASTID[i].fillColor = new Color(Math.random());
        KASTID[i].rotate(Math.random(event.time));
    }
}