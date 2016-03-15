// Martis Roosimaa
// EKA BGD2 2016 loovkood




//see on pildiraam

var JOON = new Path();
JOON.strokeColor = 'Black';
JOON.add(40, 620)
JOON.add(640, 620)
JOON.add(640, 20)
JOON.add(40, 20)
JOON.add(40,620)

var circle2 = [];
for(i=0; i<9; i++){
    circle2[i] = new Path.Circle({
        center: [340, 320],
        radius: 30*(i+1)-15,
        strokeWidth: 18,
        strokeColor: Color.random(),
        dashArray: [Math.random()*100,Math.random()*100],
        speedValue: Math.random()*3-2.5
    });
}

var circle = [];
for(i=0; i<circle2.length; i++){
    circle[i] = new Path.Circle({
        center: [340, 320],
        radius: 30*(i+1),
        strokeWidth: 15,
        strokeColor: Color.random(),
    });
}

function onFrame(event) {
    for(i=0; i<circle2.length; i++){
        circle2[i].rotate(circle2[i].speedValue);
    }
}