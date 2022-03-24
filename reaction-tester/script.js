var start = new Date().getTime()


function getRandomColor() {
var letters = '0123456789ABCDEF'.split('');
var code = '#';
for (var i=0;i<6;i++) {
	code += letters[Math.floor(Math.random()*16)];
};
return code;
}

function makeShapeAppear() {

var top = Math.random()*400;
var left = Math.random()*400;
var width = Math.random()*200 + 100;
var height = Math.random()*400;

if (Math.random()>0.5) {
	document.getElementById('shape').style.borderRadius = '50%';
}
else {document.getElementById('shape').style.borderRadius = 0;
}

document.getElementById('shape').style.top = top + 'px';

document.getElementById('shape').style.left = left + 'px';
document.getElementById('shape').style.width = width + 'px';
document.getElementById('shape').style.height = height + 'px';
document.getElementById('shape').style.backgroundColor = getRandomColor();

//adjust the shape to show again
document.getElementById('shape').style.display = 'block';


start = new Date().getTime();


};

function appearAfterPause() {
setTimeout(makeShapeAppear,Math.random()*2000);				
};

function clickToGone() {

document.getElementById('shape').onclick = function() {document.getElementById('shape').style.display = 'none';

var end = new Date().getTime();

var duration = (end - start)/1000;

document.getElementById('timer').innerHTML = duration + 's';

appearAfterPause();				

}

};

appearAfterPause();
clickToGone();


