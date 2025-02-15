const request = ( endpoint, data = {}, immediately = false, signal ) => {
	if ( Object.keys( data ).length ) {
		data.context = window.elementorAiCurrentContext;
	}

	return new Promise( ( resolve, reject ) => {
		const ajaxData = elementorCommon.ajax.addRequest(
			endpoint,
			{
				success: resolve,
				error: reject,
				data,
			},
			immediately,
		);

		if ( signal && ajaxData.jqXhr ) {
			signal.addEventListener( 'abort', ajaxData.jqXhr.abort );
		}
	} );
};

export const getUserInformation = () => request( 'ai_get_user_information' );

export const getCompletionText = ( prompt ) => request( 'ai_get_completion_text', { prompt } );

export const getEditText = ( input, instruction ) => request( 'ai_get_edit_text', { input, instruction } );

export const getCustomCode = ( prompt, language ) => request( 'ai_get_custom_code', { prompt, language } );

export const getCustomCSS = ( prompt, htmlMarkup, elementId ) => request( 'ai_get_custom_css', { prompt, html_markup: htmlMarkup, element_id: elementId } );

export const setGetStarted = () => request( 'ai_set_get_started' );

export const setStatusFeedback = ( responseId ) => request( 'ai_set_status_feedback', { response_id: responseId } );

export const getTextToImageGeneration = ( prompt, promptSettings ) => request( 'ai_get_text_to_image', { prompt, promptSettings } );

export const getImageToImageGeneration = ( prompt, promptSettings, image ) => request( 'ai_get_image_to_image', { prompt, promptSettings, image } );

export const getImageToImageMaskGeneration = ( prompt, promptSettings, image, mask ) => request( 'ai_get_image_to_image_mask', { prompt, promptSettings, image, mask } );

export const getImageToImageOutPainting = ( prompt, promptSettings, image, mask ) => request( 'ai_get_image_to_image_outpainting', { prompt, promptSettings, mask } );

export const getImageToImageUpscale = ( prompt, promptSettings, image ) => request( 'ai_get_image_to_image_upscale', { prompt, promptSettings, image } );

export const getImageToImageRemoveBackground = ( image ) => request( 'ai_get_image_to_image_remove_background', { image } );

export const getImageToImageReplaceBackground = ( prompt, image ) => request( 'ai_get_image_to_image_replace_background', { prompt, image } );

export const getImageToImageRemoveText = ( image ) => request( 'ai_get_image_to_image_remove_text', { image } );

export const getImagePromptEnhanced = ( prompt ) => request( 'ai_get_image_prompt_enhancer', { prompt } );

export const uploadImage = ( image ) => request( 'ai_upload_image', { ...image } );

/**
 * @typedef {Object} AttachmentPropType - See ./types/attachment.js
 * @typedef {Object} requestBody
 * @property {string}               prompt             - Prompt to generate the layout from.
 * @property {0|1|2}                [variationType]    - Type of the layout to generate (actually it's a position).
 * @property {string[]}             [prevGeneratedIds] - Previously generated ids for exclusion on regeneration.
 * @property {AttachmentPropType[]} [attachments]      - Attachments to use for the generation. currently only `json` type is supported - a container JSON to generate variations from.
 */

/**
 * @param {requestBody} requestBody
 * @param {AbortSignal} [signal]
 */
export const generateLayout = ( requestBody, signal ) => request( 'ai_generate_layout', requestBody, true, signal );

export const getLayoutPromptEnhanced = ( prompt, enhanceType ) => request( 'ai_get_layout_prompt_enhancer', { prompt, enhance_type: enhanceType } );

export const getHistory = ( type, page, limit ) => request( 'ai_get_history', { type, page, limit } );

export const deleteHistoryItem = ( id ) => request( 'ai_delete_history_item', { id } );

export const toggleFavoriteHistoryItem = ( id ) => request( 'ai_toggle_favorite_history_item', { id } );
