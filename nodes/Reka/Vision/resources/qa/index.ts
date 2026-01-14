import type { INodeProperties } from 'n8n-workflow';
import { videoChatParams } from './videoChat';


export const videoQADescription: INodeProperties[] = [
	// Operations for video Q&A
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['videoQA'],
			},
		},
		options: [
			{
				name: 'ASK QUESTION',
				value: 'askquestion',
				action: 'Ask question',
				description: 'Ask a questions about a specific video',
				routing: {
					request: {
						method: 'POST',
						url: '/qa/chat',
					},
				},
			},
		],
		default: 'askquestion',
	},

    // Parameters for video Q&A
    ...videoChatParams,
];