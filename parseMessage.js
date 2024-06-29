import LibraryTransportConstants from '@thzero/library_client_transport_datachannel/common/constants.js';

import { isBufferMessage, isJSONMessage, isStringMessage } from '@thzero/library_client_transport_datachannel/common/helpers.js';

const ParseMessage = (ev) => {
	let { data } = ev;
	if (!data) 
		data = ev;

	const isBuffer = isBufferMessage(data);
	const isJson = isJSONMessage(data);
	const isString = isStringMessage(data);

	// if (!data && isRaw) return { key: LibraryTransportConstants.Events.RAW_MESSAGE, data }

	// // probably server-side
	// if (!data) {
	//	 if (isRawMessage(data)) {
	//		 return { key: LibraryTransportConstants.Events.RAW_MESSAGE, data: data }
	//	 } else {
	//		 const json = JSON.parse(data as any)
	//		 const key = Object.keys(json)[0]
	//		 const value = Object.values(json)[0]
	//		 return { key: key, data: value }
	//	 }
	// }

	if (isJson) {
		const object = JSON.parse(data);
		return { key: Object.keys(object)[0], data: object[key] };
	}

	if (isBuffer)
		return { key: LibraryTransportConstants.Events.RAW_MESSAGE, data: data };

	if (isString)
		return { key: LibraryTransportConstants.Events.RAW_MESSAGE, data: data };

	return { key: 'error', data: new Error(LibraryTransportConstants.Errors.COULD_NOT_PARSE_MESSAGE) };
}

export { ParseMessage }