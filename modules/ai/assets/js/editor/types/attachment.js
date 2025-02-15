import PropTypes from 'prop-types';

export const AttachmentPropType = PropTypes.shape( {
	type: PropTypes.string,
	previewHTML: PropTypes.string,
	content: PropTypes.string,
	label: PropTypes.string,
} );

export const AttachmentsTypesPropType = PropTypes.shape( {
	type: PropTypes.shape( {
		promptSuggestions: PropTypes.arrayOf( PropTypes.shape( {
			text: PropTypes.string.isRequired,
		} ) ),
		previewGenerator: PropTypes.func,
	} ),
} );
