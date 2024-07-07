
import LibraryTransportConstants from '@thzero/library_transport_datachannel/constants.js';

import { isBufferMessage, isStringMessage } from '@thzero/library_transport_datachannel/helpers.js';

const sendMessage = (
	dataChannel, maxMessageSize, eventName, data
) => {
	const send = (data, isBuffer) => {
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
				
				if (!isBuffer) {
					dataChannel.sendMessage(data);
					return;
				}

				dataChannel.sendMessageBinary(Buffer.from(data));
			})
			.catch(error => {
				console.log('error', error);
			});
	}

	if (!dataChannel)
		return;

	if (dataChannel.readyState === 'open' || dataChannel.isOpen?.()) {
		try {
			if (eventName === LibraryTransportConstants.Events.RAW_MESSAGE && data !== null && (isStringMessage(data) || isBufferMessage(data))) {
				send(data, isBufferMessage(data));
				return;
			}
			
			send(JSON.stringify({ [eventName]: data }), false);
		} 
		catch (error) {
			console.error('Error in sendMessage.ts: ', error.message);
			return error;
		}
	}
}

export { sendMessage };