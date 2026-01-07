import { INodeType, INodeTypeDescription } from 'n8n-workflow';

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
			baseURL: 'https://api.reka.ai/v1',
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
						name: 'Create Clip',
						value: 'createClips',
					},
					{
						name: 'Get Clip Status',
						value: 'getClipStatus',
					},
				],
				default: 'createClips',
			},
			// Operations will go here
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
			{
				displayName: 'Job ID',
				description: 'With Job to get the status for',
				required: true,
				name: 'jobId',
				type: 'string',
				routing: {
					request: {
						qs: {
							id: '/{{$value}}'
						}
					}
				},
				default: '',
				displayOptions: {
					show: {
						resource: ['getClipStatus'],
					},
				},
			},
			// {
			// 	displayName: 'Date',
			// 	description: 'Earth date',
			// 	required: true,
			// 	name: 'marsRoverDate',
			// 	type: 'dateTime',
			// 	default: '',
			// 	displayOptions: {
			// 		show: {
			// 			resource: ['marsRoverPhotos'],
			// 		},
			// 	},
			// 	routing: {
			// 		request: {
			// 			// You've already set up the URL. qs appends the value of the field as a query string
			// 			qs: {
			// 				earth_date: '={{ new Date($value).toISOString().substr(0,10) }}',
			// 			},
			// 		},
			// 	},
			// },
			// Optional/additional fields will go here
			// {
			// 	displayName: 'Additional Fields',
			// 	name: 'additionalFields',
			// 	type: 'collection',
			// 	default: {},
			// 	placeholder: 'Add Field',
			// 	displayOptions: {
			// 		show: {
			// 			resource: ['astronomyPictureOfTheDay'],
			// 			operation: ['get'],
			// 		},
			// 	},
			// 	options: [
			// 		{
			// 			displayName: 'Date',
			// 			name: 'apodDate',
			// 			type: 'dateTime',
			// 			default: '',
			// 			routing: {
			// 				request: {
			// 					// You've already set up the URL. qs appends the value of the field as a query string
			// 					qs: {
			// 						date: '={{ new Date($value).toISOString().substr(0,10) }}',
			// 					},
			// 				},
			// 			},
			// 		},
			// 	],
			// },
		],
	};
}

