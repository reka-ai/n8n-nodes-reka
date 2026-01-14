import type { INodeProperties } from 'n8n-workflow';
import { videoChatParams } from './videoChat';
import { imageChatParams } from './imageChat';


export const QuestionAnswerDescription: INodeProperties[] = [
	// Operations for Q&A
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['QA'],
			},
		},
		options: [
			{
				name: 'ASK QUESTION ABOUT IMAGE',
				value: 'askImageQuestion',
				action: 'Ask question about image',
				description: 'Ask a questions about a specific image',
				routing: {
					request: {
						method: 'POST',
						baseURL: 'https://api.reka.ai/v1/chat',
					},
				},
			},
			{
				name: 'ASK QUESTION ABOUT VIDEO',
				value: 'askVideoQuestion',
				action: 'Ask question about video',
				description: 'Ask a questions about a specific video',
				routing: {
					request: {
						method: 'POST',
						url: '/qa/chat',
					},
				},
			},
		],
		default: 'askVideoQuestion',
	},

	// Parameters for video Q&A
	...videoChatParams,

	// Parameters for image Q&A
	...imageChatParams,
];