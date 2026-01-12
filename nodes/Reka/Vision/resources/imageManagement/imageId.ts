import type { INodeProperties } from 'n8n-workflow';


export const imageIdParams: INodeProperties[] = [
	{
		displayName: 'Image ID',
		description: 'Image ID to get the details for',
		required: true,
		name: 'image_id',
		type: 'string',
		routing: {
			request: {
				url: '=/images/{{$value}}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['imageManagement'],
				operation: ['getImage', 'deleteImage'],
			},
		},
	},
];
