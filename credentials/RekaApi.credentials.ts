import {
	IAuthenticateGeneric,
	Icon,
	ICredentialType,
	INodeProperties,
	ICredentialTestRequest,
} from 'n8n-workflow';

export class RekaApi implements ICredentialType {
	name = 'rekaApi';

	displayName = 'Reka API';

	icon: Icon = {
		light: 'file:../icons/reka-stacked-black.svg',
		dark: 'file:../icons/reka-stacked-offwhite.svg',
	};

	documentationUrl =
		'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				api_key: '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.reka.ai/v1',
			url: '/models',
			method: 'GET',
		},
	};
}