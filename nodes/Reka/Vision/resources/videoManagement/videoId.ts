import type { INodeProperties } from 'n8n-workflow';


export const videoIdParams: INodeProperties[] = [
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
				resource: ['videoManagement'],
				operation: ['getVideo', 'deleteVideo'],
			},
		},
	},
];