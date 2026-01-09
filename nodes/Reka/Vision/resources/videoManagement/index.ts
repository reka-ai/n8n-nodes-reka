import type { INodeProperties } from 'n8n-workflow';
import { videoIdParams } from './videoId';
import { videoUploadParams } from './videoUpload';


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
				name: 'DELETE VIDEO',
				value: 'deleteVideo',
				action: 'Delete video',
				description: 'Delete video from your Reka account library',
				routing: {
					request: {
						method: 'DELETE',
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
				name: 'UPLOAD VIDEO FROM URL',
				value: 'uploadVideoFromUrl',
				action: 'Upload video by URL',
				description: 'Upload a video to your Reka account library using a URL as source',
				routing: {
					request: {
						method: 'POST',
						url: '/videos/upload',
					},
				},
			},
		],
		default: 'listVideos',
	},

	// Parameters for Get Video
	...videoIdParams,

	// Parameters to upload video
	...videoUploadParams,
];