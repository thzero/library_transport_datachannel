import LibraryTransportConstants from '@thzero/library_transport_datachannel/constants.js';

const parseMessage = (ev) => {
	let { data } = ev;
	if (!data) 
		data = ev;

	return { key: LibraryTransportConstants.Events.MESSAGE, data: data };
}

export { parseMessage };