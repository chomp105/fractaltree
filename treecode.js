let ctx = document.getElementById("gc").getContext("2d");
ctx.strokeStyle = "white";

function recursion(x, y, length, count, anglechange, angle) {
	if (count > 9) return;

	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(length * Math.cos((angle) * (3.14 / 180)) + x, length * Math.sin((angle) * (3.14 / 180)) + y)
	ctx.stroke();
	recursion(length * Math.cos((angle) * (3.14 / 180)) + x, length * Math.sin((angle) * (3.14 / 180)) + y, length * 0.67, count + 1, anglechange, angle - anglechange);

	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(length * Math.cos((angle) * (3.14 / 180)) + x, length * Math.sin((angle) * (3.14 / 180)) + y)
	ctx.stroke();
	recursion(length * Math.cos((angle) * (3.14 / 180)) + x, length * Math.sin((angle) * (3.14 / 180)) + y, length * 0.67, count + 1, anglechange, angle + anglechange);
}

recursion(250, 400, 100, 0, 60, 270);

let count = 0;

function redo() {
	if (count > 360) count = -1;
	ctx.clearRect(0, 0, 500, 500);
	ctx.beginPath();
	ctx.moveTo(250, 400);
	ctx.lineTo(250, 300)
	ctx.stroke();
	recursion(250, 400, 100, 0, count, 270);
	count++;
}

setInterval(redo, 1000/60);

//parseInt(document.getElementById("mySlider").value)