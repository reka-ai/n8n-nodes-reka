import type { INodeProperties } from 'n8n-workflow';


export const getVideoParams: INodeProperties[] = [
	{
		displayName: 'Video ID',
		description: 'Video ID to get the details for',
		required: true,
		name: 'video_id',
		type: 'string',
		routing: {
			request: {
				url: '=/videos/{{$value}}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['getVideo'],
			},
		},
	},
];