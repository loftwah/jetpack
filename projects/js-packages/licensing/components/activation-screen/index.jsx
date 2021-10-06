/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import ActivationScreenControls from '../activation-screen-controls';
import ActivationScreenIllustration from '../activation-screen-illustration';

/**
 * Style dependencies
 */
import './style.scss';

/**
 * The Activation Screen component.
 *
 * @param {object} props -- The properties.
 * @param {string} props.assetBaseUrl -- The assets base URL.
 * @param {string} props.lockImage -- Image to display within the illustration.
 * @param {string} props.successImage -- Image to display within the illustration.
 * @param {string} props.siteRawUrl
 * @returns {React.Component} The `ActivationScreen` component.
 */
const ActivationScreen = props => {
	const { assetBaseUrl, lockImage, siteRawUrl } = props;

	return (
		<div className="jp-license-activation-screen">
			<ActivationScreenControls siteUrl={siteRawUrl} />
			<ActivationScreenIllustration imageUrl={assetBaseUrl + lockImage} />
		</div>
	);
};

ActivationScreen.propTypes = {
	assetBaseUrl: PropTypes.string,
};

export default ActivationScreen;