import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { clipDescription } from './resources/clip';

export class Reka implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'Reka AI',
		name: 'reka',

		icon: {
			light: 'file:../../icons/reka-stacked-black.svg',
			dark: 'file:../../icons/reka-stacked-offwhite.svg',
		},

		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from Reka AI APIs',
		defaults: {
			name: 'Reka AI',
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
			// Resources and operations will go here
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Create Clip 3',
						value: 'createClips',
					},
					{
						name: 'Get Clip Status 3',
						value: 'getClipStatus',
					},
				],
				default: 'createClips',
			},
			...clipDescription

		],
	};
}

