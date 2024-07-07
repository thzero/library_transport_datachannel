import makeRandomId from '@thzero/library_transport_datachannel/makeRandomId.js';
import runInterval from '@thzero/library_transport_datachannel/runInterval.js';

const makeReliable = (options, cb) => {
	const { interval = 150, runs = 10 } = options
	const id = makeRandomId(24)
	runInterval(interval, runs, () => {
		cb(id);
	});
}

export default makeReliable;