{\rtf1\ansi\ansicpg1252\cocoartf1038\cocoasubrtf360
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww9000\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\ql\qnatural\pardirnatural

\f0\fs24 \cf0 var WIDTH = view.size.width;\
var HEIGHT = view.size.height;\
console.log(WIDTH + ' ja ' + HEIGHT);\
\
//taust\
var BACKGROUND = new Path.Rectangle(0, 0, WIDTH, HEIGHT);\
BACKGROUND.fillColor = 'MediumAquaMarine';\
BACKGROUND.onFrame = function(event)\{\
 \
   this.fillColor.hue = this.fillColor.hue + 0.5;\
\}\
\
//liaanid\
var LAINED = [];\
\
for (var i = 0; i < 120; i++) \{\
    LAINED[i] = new Path.Rectangle(\{\
        from: [0, HEIGHT/2 + Math.cos(i) / 2 * HEIGHT * 40],\
        to: [WIDTH, HEIGHT/10 + Math.cos(i) / HEIGHT * 60],\
        strokeColor: \{\
            hue: 20 + Math.cos(i) * 360,     //value 0-360\
            saturation: 0.3, //value 0-1\
            brightness: 1 //value 0-1\
        \},\
        strokeWidth: 3,\
        fillColor: 'tomato',  //rgb alfa: rgba\
      // dashArray: [6, 6]\
    \
    \});\
    \
LAINED[i].onFrame = function(event)\{\
 \
   this.fillColor.hue = this.fillColor.hue + 0.5;\
\}\
    \
    LAINED[i].insert(1, WIDTH, HEIGHT/2 + i);\
    LAINED[i].smooth();\
    \
    view.onFrame = function(event) \{\
        for (var i = 0; i < LAINED.length; i++) \{\
            LAINED[i].position.y += Math.sin(event.time) * i ;\
            LAINED[i].position.x += Math.cos(event.time / i ) * i *2 ;\
        \}\
    \}\
\}\
\
\
}