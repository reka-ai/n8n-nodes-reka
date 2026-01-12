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
				resource: ['clip'],
			},
		},
		options: [
			{
				name: 'CREATE CLIP',
				value: 'createClip',
				action: 'Create a clip',
				description: 'Create a new clip job on Reka side',
				routing: {
					request: {
						method: 'POST',
						url: '/creator/reels',
					},
				},
			},
			{
				name: 'GET JOB STATUS',
				value: 'getJobtatus',
				action: 'Get clip status',
				description: 'Get the status of a clip job on Reka side',
				routing: {
					request: {
						method: 'GET',
					},
				},
			},
		],
		default: 'createClip',
	},

	// Parameters for Get Clip Status
	...clipStatusParams,

	// Parameters for Create Clips
	...createClipParams,
];