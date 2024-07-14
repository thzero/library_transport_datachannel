const LibraryTransportConstants = {
	Errors: {
		BROWSER_NOT_SUPPORTED: 'BROWSER_NOT_SUPPORTED',
		COULD_NOT_PARSE_MESSAGE: 'COULD_NOT_PARSE_MESSAGE',
		DROPPED_FROM_BUFFERING: 'DROPPED_FROM_BUFFERING',
		MAX_MESSAGE_SIZE_EXCEEDED: 'MAX_MESSAGE_SIZE_EXCEEDED'
	},
	Events: {
		CONNECT: 'connect',
		CONNECTION: 'connection',
		DATA_CHANNEL_IS_OPEN: 'dataChannelIsOpen',
		DISCONNECT: 'disconnect',
		DISCONNECTED: 'disconnected',
		DROP: 'dropped',
		ERROR: 'error',
		MESSAGE: 'message',
		RECEIVED_FROM_DATA_CHANNEL: 'receiveFromDataChannel',
		SEND_OVER_DATA_CHANNEL: 'sendOverDataChannel'
	},
	Id: {
		Regex: '[0-9a-zA-Z-_]{21}'
	},
	Url: {
		Prefix: '/.wrtc/v2'
	}
  }
  
export default LibraryTransportConstants;