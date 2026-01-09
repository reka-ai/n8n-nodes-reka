import type { INodeProperties } from 'n8n-workflow';

export const videoUploadParams: INodeProperties[] = [
	{
		displayName: 'Video URL',
		description: 'Video URL to upload',
		required: true,
		name: 'video_url',
		type: 'string',
		routing: {
			send: {
				type: 'body',
				property: 'video_url',
				value: '={{ $value }}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['videoManagement'],
				operation: ['uploadVideoFromUrl'],
			},
		},
	},
	// {
	// 	displayName: 'Video File',
	// 	description: 'Video file to upload',
	// 	required: true,
	// 	name: 'video_file',
	// 	type: 'string',
	// 	routing: {
	// 		send: {
	// 			type: 'body',
	// 			property: 'video_file',
	// 			value: '={{ $value }}',
	// 		},
	// 	},
	// 	default: '',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['videoManagement'],
	// 			operation: ['uploadVideoFromFile'],
	// 		},
	// 	},
	// },
	{
		displayName: 'Video Name',
		description: 'Name of the video',
		required: true,
		name: 'video_name',
		type: 'string',
		routing: {
			send: {
				type: 'body',
				property: 'video_name',
				value: '={{ $value }}',
			},
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['videoManagement'],
				operation: ['uploadVideoFromUrl'],
			},
		},
	},
	{
		displayName: 'Search Indexing',
		description: 'Whether to index the video for search and Q&A',
		required: true,
		name: 'index',
		type: 'boolean',
		routing: {
			send: {
				type: 'body',
				property: 'index',
				value: '={{ $value }}',
			},
		},
		default: true,
		displayOptions: {
			show: {
				resource: ['videoManagement'],
				operation: ['uploadVideoFromUrl'],
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
				resource: ['videoManagement'],
				operation: ['uploadVideoFromUrl'],
			},
		},
		options: [
			{
				displayName: 'Group ID',
				description:
					'Video group ID to attach the upload to. Defaults to default when omitted, and cannot be changed after upload.',
				name: 'group_id',
				type: 'string',
				routing: {
					send: {
						type: 'body',
						property: 'group_id',
					},
				},
				default: 'default',
			},
			{
				displayName: 'Video Absolute Start Timestamp',
				description: 'ISO 8601 timestamp',
				name: 'video_absolute_start_timestamp',
				type: 'string',
				routing: {
					send: {
						type: 'body',
						property: 'video_absolute_start_timestamp',
					},
				},
				default: '',
			},
		],
	},
];
