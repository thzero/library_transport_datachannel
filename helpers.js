const isBufferMessage = (data) => {
	return data instanceof ArrayBuffer || data instanceof ArrayBufferView;
};

const isJSONMessage = (data) => {
	try {
		// check if it is a string
		if (typeof data !== 'string') 
			return false;
		
		// check if it is a number as a string
		if (!isNaN(parseInt(data))) 
			return false;

		// check if it is a JSON object
		JSON.parse(data)
		return true;
	} 
	catch (error) {
		return false;
	}
};

// const isRawMessage = (dataChannel) => {
// 	 return typeof data === 'string' || isBufferMessage(data);
// }

const isStringMessage = (data) => {
	return typeof data === 'string';
};

/** make a small promise-based pause */
export const pause = (ms) => {
	ms = ms ?? 0;
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, ms);
	})
};

// https://dev.to/nikosanif/create-promises-with-timeout-error-in-typescript-fmm
/** create a promise with a timeout */
export const promiseWithTimeout = (
	promise,
	ms,
	timeoutError = Error('Promise timed out')
) => {
	// create a promise that rejects in milliseconds
	const timeout = new Promise<never>((_, reject) => {
		setTimeout(() => {
			reject(timeout); // TODO: Shouldn't this be timeoutError?
		}, ms);
	});

	// returns a race between timeout and the passed promise
	return Promise.race([promise, timeout]);
};

/** creates a new Task using setTimeout() */
export const task = (task) => setTimeout(task, 0);

/** creates a new Microtask using Promise() */
export const tick = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

export { isStringMessage, isBufferMessage, isJSONMessage };