// import makeRandomId from '@thzero/library_transport_datachannel/makeRandomId.js';
// // import runInterval from '@thzero/library_transport_datachannel/runInterval.js';

// const runInterval = (interval = 200, runs, cb) => {
// 	interval = interval ?? 200;
// 	runs = runs ?? 1;

// 	if (typeof cb !== 'function') {
// 		console.error('You have to define your callback function!');
// 		return;
// 	}

// 	let counter = 0;
// 	const i = setInterval(() => {
// 		cb();

// 		counter++;
// 		if (counter === runs - 1)
// 			clearInterval(i);
// 	}, interval);

// 	cb();
// }

// const makeReliable = (options, cb) => {
// 	const { interval = 150, runs = 10 } = options
// 	const id = makeRandomId(24)
// 	runInterval(interval, runs, () => {
// 		cb(id);
// 	});
// }

// export default makeReliable;