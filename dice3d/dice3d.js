function rollCube(cube) {
	
	let xRand = getRandom(-8, 8) * 90.1;
	let yRand = getRandom(-8, 8) * 89.9;
	let zRand = getRandom(-8, 8) * 90.1;
	cube.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg) rotateZ(${zRand}deg)`;
}

function getRandom(min,max) {
	return min + Math.floor(Math.random()*((max+1)-min));
	// need to implement...
}

function posMod(n, m) {
	// need to implement...
	return (Math.abs(n)%Math.abs(m));
	// return((n%m) + m) %m;
}

function getResult(rotX, rotY) {
	let countX = posMod(rotX / 90, 4);
	if (countX === 1) return 6; // bottom
	if (countX === 3) return 5; // top

	let countY = posMod(rotY / 90 + countX, 4);
	
	return [1, 4, 2, 3][countY];
}


