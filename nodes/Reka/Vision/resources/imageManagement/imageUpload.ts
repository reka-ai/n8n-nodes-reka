import type { INodeProperties } from 'n8n-workflow';

export const imageUploadParams: INodeProperties[] = [
	{
		displayName: 'Image File',
		description: 'Image file to upload',
		required: true,
		name: 'image_file',
		type: 'string',
		routing: {
			send: {
				type: 'body',
				property: 'images',
				value: '={{ $value }}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['imageManagement'],
				operation: ['uploadImageFile'],
			},
		},
	},

	//Optional Fields
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['imageManagement'],
				operation: ['uploadImageFile'],
			},
		},
		options: [
			{
				displayName: 'Search Indexing',
				description: 'Whether to index the image for search and Q&A',
				name: 'index',
				type: 'boolean',
				routing: {
					send: {
						type: 'body',
						property: 'metadata.indexing_config.index',
						value: '={{ $value }}',
					},
				},
				default: true,
			},
		],
	},
];
