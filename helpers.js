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
	const timeout = new Promise((_, reject) => {
		setTimeout(() => {
			reject(timeout); // TODO: Shouldn't this be timeoutError?
		}, ms);
	});

	// returns a race between timeout and the passed promise
	return Promise.race([promise, timeout]);
};
