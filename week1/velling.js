// taust

document.body.style.backgroundColor = "black";

// teen pilve

var pathData = 'M202.635,82.868c21.175,6.13,68.541-11.702,51.823,15.603\
	c-16.718,27.305-39.564,22.29-14.489,32.877c25.077,10.587,25.203,7.327,26.559,12.317c6.496,23.903-41.794-13.374-40.122,21.732\
	c1.672,35.106,1.114,67.426-19.503,37.892c-20.618-29.534-42.73-50.151-70.035-26.748c-27.305,23.404-39.007,48.48-39.564,13.931\
	s12.259-38.45-3.901-32.877c-16.16,5.572-29.534,42.35-40.679,18.946c-11.145-23.404-1.114-26.706,6.687-36.479\
	c7.801-9.772,7.801-9.772,9.663-10.944c20.253-12.756-44.022-13.374-27.305-31.206s35.663-5.764,37.335-14.862\
	c1.672-9.099-33.992-40.305-1.114-29.16c32.877,11.145,55.087,11.145,62.092,0.557s69.824-34.435,60.88-10.587\
	C189.262,75.066,202.635,82.868,202.635,82.868z';
var path = new Path(pathData)
path.fillColor = '#ADD8E6';
path.shadowColor = '#A9D0F5';
path.shadowBlur = 66;
   path.onFrame = function(event) {
        this.position.x = this.position.x + 1;
        this.position.y = this.position.y + 1;
    }

// teen teise pilve

var pathData = 'M419.763,289.659c-21.099-6.39-68.68,10.857-51.627-16.239\
	s39.835-21.801,14.892-32.696c-24.944-10.895-25.11-7.637-26.405-12.644c-6.202-23.98,41.626,13.888,40.386-21.235\
	c-1.239-35.125-0.284-67.435,19.968-37.65c20.253,29.786,42.109,50.674,69.7,27.608c27.591-23.065,39.602-47.995,39.732-13.442\
	c0.132,34.553-12.731,38.296,3.496,32.923c16.228-5.373,30.054-41.983,40.909-18.444c10.856,23.54,0.785,26.718-7.136,36.394\
	c-7.92,9.675-7.92,9.675-9.797,10.824c-20.408,12.506,43.854,13.915,26.918,31.54c-16.935,17.625-35.731,5.325-37.515,14.401\
	c-1.784,9.077,33.493,40.72,0.755,29.172c-32.737-11.55-54.945-11.823-62.08-1.321c-7.135,10.501-70.243,33.572-61.006,9.836\
	C433.039,297.626,419.763,289.659,419.763,289.659z';
var path = new Path(pathData)
path.fillColor = '#ADD8E6';
path.shadowColor = '#A9D0F5';
path.shadowBlur = 66;
   path.onFrame = function(event) {
        this.position.x = this.position.x - 1;
        this.position.y = this.position.y - 1;
    }


// teen teksti

var text = new PointText(new Point(100, 400));
text.fillColor = 'white';

// Set the content of the text item:
text.content = 'Kas teie olete see mees, kellel on need rebitavate rihmadega pilved?';
 


// teen pandla

var pathData = 'M313.298,284.061l24,29.899l-33,24.102l-12-24.102L313.298,284.061z M328.298,313.96l-14-16.1l-11.7,14.77\
		l-4.3,5.431l8,12.001L328.298,313.96z';
var path = new Path(pathData)
path.fillColor = '#CD853F';

// teen mehe


var pathData = 'M56.806,158.926c-10.641-23.057,30.476-24.631,5.01-24.213\
	c-25.466,0.417,51.768-21.398,43,12.053s-2.505,37.209-17.117,33.452S74.34,169.78,73.088,176.46c-1.252,6.68-1.252,6.68-1.252,6.68\
	l52.603,15.447l-33.993,70.137c0,0,43.178,49.262,70.731,43.417c27.554-5.845,6.68,17.116,6.68,17.116l-75.146,53.021l-8.767-7.097\
	l41.748-44.254l-48.845-52.184c0,0,2.505,37.991-0.835,40.079c-3.34,2.086-29.641,55.107-29.641,55.107L28,371.842l27.554-58.865\
	l-6.68-46.34l10.854-8.767l-18.369-65.544l22.961-9.602l2.087-10.437C66.408,172.286,59.311,164.354,56.806,158.926z'
var path = new Path(pathData)
path.fillColor = 'black';

path.onFrame = function(event) {
    var HALL = Math.random(); // random tagastab 0-1
    this.fillColor = new Color(HALL);
    this.strokeWidth = HALL * 100;
    
}

