import type { INodeProperties } from 'n8n-workflow';

export const videoChatParams: INodeProperties[] = [
	{
		displayName: 'Prompt',
		description: 'Prompt or question to ask about the video',
		required: true,
		name: 'prompt',
		type: 'string',
		placeholder: 'Ask a question about the video content',
		routing: {
			send: {
				type: 'body',
				property: 'messages[0].content',
				value: '={{ $value }}',
			},
		},
		default: 'What is happening in the video?',
		displayOptions: {
			show: {
				resource: ['QA'],
				operation: ['askVideoQuestion'],
			},
		},
	},
	{
		displayName: 'Role',
		description: 'Role of the message sender',
		required: true,
		name: 'role',
		type: 'string',
		placeholder: 'Keep it as user, unless you are sending a system message',
		routing: {
			send: {
				type: 'body',
				property: 'messages[0].role',
				value: '={{ $value }}',
			},
		},
		default: 'user',
		displayOptions: {
			show: {
				resource: ['QA'],
				operation: ['askVideoQuestion'],
			},
		},
	},
	{
		displayName: 'Video ID',
		description: 'Video ID to get the details for',
		required: true,
		name: 'video_id',
		type: 'string',
		routing: {
			send: {
				type: 'body',
				property: 'video_id',
				value: '={{ $value }}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['QA'],
				operation: ['askVideoQuestion'],
			},
		},
	},
];