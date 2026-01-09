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
				resource: ['listVideos'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'List videos',
				description: 'List videos in your Reka account library',
				routing: {
					request: {
						method: 'GET',
						url: '/videos',
					},
				},
			},
		],
		default: 'get',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['getVideo'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get video',
				description: 'Get a video details from your Reka account library',
				routing: {
					request: {
						method: 'GET'
					},
				},
			},
		],
		default: 'get',
	},

	// Parameters for Get Video
	...getVideoParams,

	// Parameters for Create Clips
	// ...createClipParams,
];