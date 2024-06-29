const runInterval = (interval = 200, runs, cb) => {
	interval = interval ?? 200;
	runs = runs ?? 1;

	let counter = 0;

	if (typeof cb !== 'function') {
		console.error('You have to define your callback function!');
		return;
	}

	const i = setInterval(() => {
		cb();

		counter++;
		if (counter === runs - 1)
			clearInterval(i);
	}, interval);

	cb();
}
	
export default runInterval;