document.title = 'Emile';

var color;
var myCircle;
var drawing;
var brush_size;
tool.minDistance = 0;
tool.maxDistance = 50;

function Init(){
    brush_size = 10
    Color_choosing();
}

// assigning color to the path
function Color_choosing(){
    color = prompt('Please enter the color you want to use :' + '\nblack, red, blue, green', 'black') ;

    while((color !== "black") && (color !== "red") && (color !== "blue") && (color !== "green")){
        color = prompt('this color is not in the list, try again :\nblack, red, blue, green', 'black');
    }

    console.log("you chose " + color) ;
};

// assigne a size
function Size_choosing(){
    brush_size = prompt("Choose your pen size :" + "\n1, 2, 5, 10, 20", brush_size);
    while((brush_size !== "1" ) && (brush_size !== "2") && (brush_size !== "5") && (brush_size !== "10") && (brush_size !== "20")){
        brush_size = prompt("this size is not in the list, try again :" + "\n1, 2, 5, 10, 20", brush_size);
    }
    console.log("your brush size is now on " + brush_size);
};

function onMouseDown(event) {
    drawing = 0
};

function onMouseDrag(event) {
	drawing = new Path.Circle({
		center: event.middlePoint,
		radius: parseInt(brush_size)
	});
	drawing.fillColor = color;
};


function onMouseUp(event) {
	myCircle = new Path.Circle({
		center: event.point,
		radius: 0
	});
};


function onKeyDown(event){
    if(event.key == 'c') {
        Color_choosing();
    }
    if(event.key == 's') {
      Size_choosing();
    };
};

Init();