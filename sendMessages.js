
const sendMessage = (dataChannel, maxMessageSize, data) => {
	if (!dataChannel)
		return;

	if (!(dataChannel.readyState === 'open' || dataChannel.isOpen?.()))
		return;

	try {
		const bytes = data.byteLength ?? data.length * 2 // (times 2 for characters that uses 2 bytes per char)
		if (typeof maxMessageSize === 'number' && bytes > maxMessageSize)
			throw new Error(`maxMessageSize of ${maxMessageSize} exceeded`);

		Promise.resolve()
			.then(() => {
				// server-side (send() does not exist on the server side)
				if (dataChannel.send) {
					dataChannel.send(data);
					return;
				}

				dataChannel.sendMessageBinary(Buffer.from(data));
			})
			.catch(err => {
				console.error('sendMessage.sendMessageBinary', err);
			});
	} 
	catch (err) {
		console.error('sendMessage', err);
		return err;
	}
}

export { sendMessage };