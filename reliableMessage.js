import makeRandomId from '@thzero/library_client_transport_datachannel/common/makeRandomId.js';
import runInterval from '@thzero/library_client_transport_datachannel/common/runInterval.js';

const makeReliable = (options, cb) => {
	const { interval = 150, runs = 10 } = options
	const id = makeRandomId(24)
	runInterval(interval, runs, () => {
		cb(id);
	});
}

export default makeReliable;