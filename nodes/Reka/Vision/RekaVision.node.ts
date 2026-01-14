import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { clipDescription } from './resources/clip';
import { videoManagementDescription } from './resources/videoManagement';
import { imageManagementDescription } from './resources/imageManagement';
import { videoQADescription } from './resources/qa';

export class RekaVision implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'Reka Vision',
		name: 'rekaVision',

		icon: {
			light: 'file:../../../icons/reka-stacked-black.svg',
			dark: 'file:../../../icons/reka-stacked-offwhite.svg',
		},

		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from Reka AI APIs',
		defaults: {
			name: 'Reka Vision',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'rekaApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://vision-agent.api.reka.ai/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		usableAsTool: true,
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Clip',
						value: 'clip',
					},
					{
						name: 'Video Management',
						value: 'videoManagement',
					},
					{
						name: 'Image Management',
						value: 'imageManagement',
					},
					{
						name: 'Video Question & Answer',
						value: 'videoQA',
					},
				],
				default: 'clip',
			},
			...clipDescription,
			...videoManagementDescription,
			...imageManagementDescription,
			...videoQADescription
		],
	};
}

