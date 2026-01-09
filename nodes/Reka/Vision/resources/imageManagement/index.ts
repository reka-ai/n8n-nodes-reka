import type { INodeProperties } from 'n8n-workflow';
import { imageIdParams } from './imageId';
import { imageUploadParams } from './imageUpload';


export const imageManagementDescription: INodeProperties[] = [
	// Operations for image Management
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['imageManagement'],
			},
		},
		options: [
			{
				name: 'DELETE IMAGE',
				value: 'deleteImage',
				action: 'Delete image',
				description: 'Delete image from your Reka account library',
				routing: {
					request: {
						method: 'DELETE',
					},
				},
			},
			{
				name: 'GET IMAGE',
				value: 'getImage',
				action: 'Get image',
				description: 'Get an image details from your Reka account library',
				routing: {
					request: {
						method: 'GET',
					},
				},
			},
			{
				name: 'LIST IMAGES',
				value: 'listImages',
				action: 'List images',
				description: 'List images in your Reka account library',
				routing: {
					request: {
						method: 'GET',
						url: '/images',
					},
				},
			},
			{
				name: 'UPLOAD IMAGE FILE',
				value: 'uploadImageFile',
				action: 'Upload image file',
				description: 'Upload an image to your Reka account library using a file as source',
				routing: {
					request: {
						method: 'POST',
						url: '/images/upload',
					},
				},
			},
		],
		default: 'listImages',
	},

	// Parameters for Get Image, Delete Image
	...imageIdParams,

	// Parameters to upload image
	...imageUploadParams,
];
