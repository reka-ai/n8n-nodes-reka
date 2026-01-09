import type { INodeProperties } from 'n8n-workflow';


export const clipStatusParams: INodeProperties[] = [
	{
		displayName: 'Job ID',
		description: 'Job ID to get the status for',
		required: true,
		name: 'jobId',
		type: 'string',
		routing: {
			request: {
				url: '=/creator/reels/{{$value}}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['clip'],
				operation: ['getJobtatus'],
			},
		},
	},
];