import type { INodeProperties } from 'n8n-workflow';
import { clipStatusParams } from './getClipStatus';
import { createClipParams } from './createClip';


export const clipDescription: INodeProperties[] = [
	// Operations for Clip
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['createClips'],
			},
		},
		options: [
			{
				name: 'POST',
				value: 'post',
				action: 'Create a clip',
				description: 'Create a new clip job on Reka side',
				routing: {
					request: {
						method: 'POST',
						url: '/creator/reels',
					},
				},
			},
		],
		default: 'post',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['getClipStatus'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get clip status',
				description: 'Get the status of a clip job on Reka side',
				routing: {
					request: {
						method: 'GET',
					},
				},
			},
		],
		default: 'get',
	},

	// Parameters for Get Clip Status
	...clipStatusParams,

	// Parameters for Create Clips
	...createClipParams,
];