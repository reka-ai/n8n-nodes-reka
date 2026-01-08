import type { INodeProperties } from 'n8n-workflow';


export const createClipParams: INodeProperties[] = [
	{
		displayName: 'Video URL',
		description: 'URL of input video',
		required: true,
		name: 'video_urls',
		type: 'string',
		routing: {
			send: {
				type: 'body',
				property: 'video_urls',
				value: '={{ [$value] }}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['createClips'],
			},
		},
	},
	{
		displayName: 'Prompt',
		description: 'Description of the reel to generate',
		required: true,
		name: 'prompt',
		type: 'string',
		routing: {
			send: {
				type: 'body',
				property: 'prompt',
			},
		},
		default: 'Create an engaging short video highlighting the best moments',
		displayOptions: {
			show: {
				resource: ['createClips'],
			},
		},
	},
];