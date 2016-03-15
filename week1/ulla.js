{\rtf1\ansi\ansicpg1252\cocoartf1038\cocoasubrtf360
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww9000\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\ql\qnatural\pardirnatural

\f0\fs24 \cf0 //Ulla V\'e4ljaste\
// EKA BGD LOOVKOOD 2016\
//SEAVIEW\
\
\
var topLeft = [0, 0];\
var bottomRight = [600, 600];\
\
// Create a rectangle shaped path between\\\
// the topLeft and bottomRight points:\\\
var path = new Path.Rectangle(\{\
    topLeft: topLeft,\
    bottomRight: bottomRight,\
    // Fill the path with a gradient of three color stops\\\
    // that runs between the two points we defined earlier:\\\
    fillColor: \{\
        gradient: \{\
            stops: ['white', 'MediumAquamarine']\
        \},\
        origin: [300, 200],\
        destination: [300, 600]\
    \}\
\});\
\
var COUNT = 200\
for (var i = 0; i < COUNT; i++) \{\
    console.log(i);\
    \
    var X = Math.random() * 600;\
    var Y = Math.random() * 600;\
    \
    var UUSRING = new Path.Circle(X, Y, 7);\
    UUSRING.fillColor = 'white';\
  \
    UUSRING.opacity = 0.5;\
 \
    \
UUSRING.onFrame = function(event) \{\
        this.position = this.position + Math.random();\
        \
        if (this.position.y > 600) \{\
            // tee midagi, kui see on t\\'f5ene console.log()\\\
            this.position.y = 230;\
        \}\
        if (this.position.x > 600) \{\
            // tee midagi, kui see on t\\'f5ene console.log()\\\
            this.position.x = 0;\
        \}\
        \
    \}\
    \}\
\
\
\
var PAIKE = new Path.Circle(\{\
    center: 100,\
    radius: 70,\
    fillColor: 'DarkOrange'\
\});\
\
\
PAIKE.onFrame = function(event)\{\
   this.rotate(3); \
   this.fillColor.hue = this.fillColor.hue + 0.05;\
    \
\};\
\
\
\
\
var LAINE; \{// The amount of segment points we want to create:\\\
var amount = 5;\
\
// The maximum height of the wave:\\\
var height = 40;\
\
// Create a new path and style it:\\\
var path = new Path(\{\
    // 80% black:\\\
    strokeColor: 'lightBlue',\
    strokeWidth: 20,\
    strokeCap: 'round'\
\});\
\
// Add 5 segment points to the path spread out\\\
// over the width of the view:\\\
for (var i = 0; i <= amount; i++) \{\
    path.add(new Point(i / amount, 1) * 600);\
\}\
\
\
\
function onFrame(event) \{\
    // Loop through the segments of the path:\\\
    for (var i = 0; i <= amount; i++) \{\
        var segment = path.segments[i];\
\
        // A cylic value between -1 and 1\\\
        var sinus = Math.sin(event.time * 3 + i);\
        \
        // Change the y position of the segment point:\\\
        segment.point.y = sinus * height + 200;\
    \}\
    // Uncomment the following line and run the script again\\\
    // to smooth the path:\\\
path.smooth();\
\}\}\
}