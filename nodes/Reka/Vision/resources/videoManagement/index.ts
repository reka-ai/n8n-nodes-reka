import type { INodeProperties } from 'n8n-workflow';
import { getVideoParams } from './getVideo';
// import { createClipParams } from './createClip';


export const videoManagementDescription: INodeProperties[] = [
	// Operations for video Management
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['videoManagement'],
			},
		},
		options: [
			{
				name: 'LIST VIDEOS',
				value: 'listVideos',
				action: 'List videos',
				description: 'List videos in your Reka account library',
				routing: {
					request: {
						method: 'GET',
						url: '/videos',
					},
				},
			},
			{
				name: 'GET VIDEO',
				value: 'getVideo',
				action: 'Get video',
				description: 'Get a video details from your Reka account library',
				routing: {
					request: {
						method: 'GET',
					},
				},
			},
		],
		default: 'listVideos',
	},

	// Parameters for Get Video
	...getVideoParams,

	// Parameters for Create Clips
	// ...createClipParams,
];