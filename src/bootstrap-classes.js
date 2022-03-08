/*
 *   Copyright (c) 2021 DSAS Holdings LTD.
 *   All rights reserved.
 */

/**
 * @typedef {String} HtmlClass
 */
/**
 * Classes for Bootstrap
 * @enum {String} XYZWhatever
 * @isa HtmlClass
 * @natura options
 */
const TextClass = {
	/**Grey text color	 */
	'Mute text':'text-muted',
	/**Prevents the text from wrapping - making it overflow	 */
	'Prevent text wrapping':'text-nowrap',
	/**Blue text color	 */
	'Text color primary':'text-primary',
	'Text color secondary':'text-secondary',
	/**Green text color. Indicates success	 */
	'Text color success':'text-success',
	'Text color danger':'text-danger',
	'Text color warning':'text-warning',
	/**Light-blue text color. Indicates information	 */
	'Text color information':'text-info',
	'Text color light':'text-light',
	'Text color dark':'text-dark',
	'Text color white':'text-white',
	/**Hides text (helps replace an element's text content with a background image) */
	/**Makes text uppercase	 */
	'Uppercase text':'text-uppercase',
	'text heading 1':'h1',
	'text heading 2':'h2',
	'text heading 3':'h3',
	'text heading 4':'h4',
	'text heading 5':'h5',
	'text heading 6':'h6',
	/** makes a text stand out */
	'text lead':'lead',
	/** highlight text */
	'highlight text (mark)':'mark',
	'small text':'small',
	'Background primary variant': 'bg-primary',
	'Background secondary variant': 'bg-secondary',
	'Background success variant': 'bg-success',
	'Background danger variant': 'bg-danger',
	'Background warning variant': 'bg-warning',
	'Background information variant': 'bg-info',
	'Background light variant':'bg-light',
	'Background dark variant':'bg-dark',
	'Background white variant':'bt-white'
};

/**
 * 
 * @natura expression <<text>>
 * @title custom class
 * @param {String} text name of class to use(placeholder:name of class)
 * @role artifact
 * @returns {HtmlClass}
 */
export function CustomClass(text){
	return text;
}

export {TextClass}