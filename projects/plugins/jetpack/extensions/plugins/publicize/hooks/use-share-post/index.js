/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import useSocialMediaMessage from '../use-social-media-message';
import useSocialMediaConnections from '../use-social-media-connections';

function getHumanReadableError( result ) {
	// Errors coming from the API.
	const errorCode = result?.code;

	/*
	 * Errors coming from the external services,
	 * through the REST API in dotcom.
	 * e.g. Tumblr, Facebook, Twitter, etc.
	 */
	const hasSharingErrors = result?.errors?.length;

	if ( ! errorCode && ! hasSharingErrors ) {
		return false;
	}

	let errorMessage = '';

	// @TO-DO: Improve error messages.
	if ( errorCode ) {
		switch ( errorCode ) {
			case 'http_request_failed':
				// Define error message when external service is down.
				errorMessage = __( 'Unable to share the Post', 'jetpack' );
				break;
			case 'rest_invalid_param':
				// Error when something is wrong with the request.
				errorMessage = __( 'Unable to share the Post', 'jetpack' );
				break;

			case 'rest_missing_callback_param':
				// Error when something is wrong with the request.
				errorMessage = __( 'Unable to share the Post', 'jetpack' );
				break;

			default:
				errorMessage = __( 'Unable to share the Post', 'jetpack' );
		}
	}

	// Im multiple requests, the response contains the errors array.
	if ( hasSharingErrors ) {
		errorMessage = __( 'Unable to share the Post', 'jetpack' );
	}

	return {
		message: errorMessage,
		result,
	};
}

export function useSharePost( callback ) {
	const { message } = useSocialMediaMessage();
	const { connections } = useSocialMediaConnections();
	const currentPostId = useSelect( select => select( editorStore ).getCurrentPostId(), [] );

	const skipConnectionIds = connections
		.filter( connection => ! connection.enabled )
		.map( connection => connection.id );

	return ( { postId } = {} ) => {
		postId = postId || currentPostId;

		apiFetch( {
			path: `/wpcom/v2/posts/${ postId }/publicize`,
			method: 'POST',
			data: {
				message,
				skipped_connections: skipConnectionIds,
			},
		} )
			.then( ( result = {} ) => {
				const hasError = getHumanReadableError( result );
				if ( hasError ) {
					return callback( hasError );
				}

				return callback( null, {
					shared: result?.results,
					postId,
				} );
			} )
			.catch( error => {
				callback( getHumanReadableError( error ) );
			} );
	};
}

export function useSharePostFeature() {
	return {
		isEnabled: useSelect( select => select( 'jetpack/publicize' ).isPostFeatureEnabled() ),
		toggleEnable: useDispatch( 'jetpack/publicize' ).toggleSharePostFeature,
	};
}