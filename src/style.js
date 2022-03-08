// @ts-nocheck
/*
 *   Copyright (c) 2021 DSAS Holdings LTD.
 *   All rights reserved.
 */

/**
 * Generic style used to define style for non-specialized components
 * @natura properties
 * @typedef HtmlStyle
 * @prop {Color} backgroundColor Set the background color of an element
 * @prop {ImageUrl} backgroundImage  Set the background image of an element
 * @prop {Color} borderColor Set the color of all borders
 * @prop {Color} borderTopColor Set the color of the top border
 * @prop {Color} borderRightColor Set the color of the right border
 * @prop {Color} borderLeftColor Set the color of the left border
 * @prop {Color} borderBottomColor Set the color of the bottom border
 * @prop {BorderStyle} borderStyle Set the style of all borders
 * @prop {BorderStyle} borderLeftStyle Set the style of the left border
 * @prop {BorderStyle} borderRightStyle Set the style of the right border
 * @prop {BorderStyle} borderTopStyle Set the style of the top border
 * @prop {BorderStyle} borderBottomStyle Set the style of the bottom border
 * @prop {LineWidth} borderWidth Set the width of all borders
 * @prop {LineWidth} borderTopWidth Set the width of the top border
 * @prop {LineWidth} borderBottomWidth Set the width of the bottom border
 * @prop {LineWidth} borderLeftWidth Set the width of the left border
 * @prop {LineWidth} borderRightWidth Set the width of the right border
 * @prop {Cursor} cursor Set the type of mouse cursor, if any, to show when the mouse pointer is over an element
 * @prop {Length} width Set the width of the element's content area
 * @prop {Length} height Set the height of the element's content area
 * @prop {Length} margin Set the margin area on all four sides of an element. Margins create extra space around an element,
 * @prop {Length} marginTop Set the margin area on the top side of an element. Margins create extra space around an element,
 * @prop {Length} marginBottom Set the margin area on the bottom side of an element. Margins create extra space around an element,
 * @prop {Length} marginLeft Set the margin area on the left side of an element. Margins create extra space around an element,
 * @prop {Length} marginRight Set the margin area on the right side of an element. Margins create extra space around an element,
 * @prop {Length} padding Set the padding area on all four sides of an element. Padding create extra space within an element.
 * @prop {Length} paddingLeft Set the padding area on the left side of an element. Padding create extra space within an element.
 * @prop {Length} paddingRight Set the padding area on the right side of an element. Padding create extra space within an element.
 * @prop {Length} paddingTop Set the padding area on the top side of an element. Padding create extra space within an element.
 * @prop {Length} paddingBottom Set the padding area on the bottom side of an element. Padding create extra space within an element.
 * @prop {Direction} direction Set the direction of text, table columns, and horizontal overflow. Use rtl for languages written from right to left (like Hebrew or Arabic), and ltr for those written from left to right (like English and most other languages).
 * @prop {FontSize} fontSize set the size of the font to wone of the predefined sizes. For custom sizing use custom css style
 * @prop {FontFamily[]} fontFamily 
 * @value fontBold set font weight to bold(font-weight:bold)
 * @value fontCapitalized (text-transform:capitalize)
 * @value fontUppercase (text-transform:uppercase)
 * @value leftAlignText (text-align:left)
 * @value rightAlignText (text-align:right)
 * @value centerAlignText (text-align:center)
 * @value justifyText (text-align:justify)
 * @value leftToRightDirection (direction:ltr)
 * @value rightToLeftDirection (direction:rtl)
 * @value textDeleted(text-decoration:line-through)
 * @value textLineThrough(text-decoration:line-through)
 * @value textUnderline(text-decoration:underline)
 */
export class GenericStyle{
}

/**
 * @enum {String} BorderStyle
 * @natura options
 */
const BorderStyle = {
	none:'none',
	hidden:'hidden',
	dotted:'dotted',
	dashed:'dashed',
	solid:'solid',
	souble:'double',
	groove:'groove',
	ridge:'ridge',
	inset:'inset',
	outset:'outset'
};


	/**
	 * @enum {String}
	 * @natura options
	 * @isa color
	 */
	export const ColorName = {
		black:'black',
		silver:'silver',
		white:'white',
		maroon:'maroon',
		red:'red',
		purple:'purple',
		fuchsia:'fuchsia',
		green:'green',
		lime:'lime',
		olive:'olive',
		yellow:'yellow',
		navy:'navy',
		blue:'blue',
		teal:'teal',
		aqua:'aqua',
		orange:'orange',
		'alice blue':'aliceblue',
		'antique white':'antiquewhite',
		aquamarine:'aquamarine',
		azure:'azure',
		beige:'beige',
		bisque:'bisque',
		'blanched almond':'blanchedalmond',
		'blue violet':'blueviolet',
		brown:'brown',
		'burly wood':'burlywood',
		'cadetblue':'cadetblue',
		'chartreuse':'chartreuse',
		chocolate:'chocolate',
		coral:'coral',
		'cornflower blue':'cornflowerblue',
		'cornsilk':'cornsilk',
		crimson:'crimson',
		cyan:'cyan',
		'dark blue':'darkblue',
		'dark cyan':'darkcyan',
		'dark golden rod':'darkgoldenrod',
		'dark grey':'darkgray',
		'dark green':'darkgreen',
		'dark khaki':'darkkhaki',
		'dark magenta':'darkmagenta',
		'dark olivegreen':'darkolivegreen',
		'dark orange':'darkorange',
		'dark orchid':'darkorchid',
		'dark red':'darkred',
		'dark salmon':'darksalmon',
		'dark seagreen':'darkseagreen'
	}

 /**
	* @title width in pixels
	* @natura expression <<number>>px
	* @param {Number} number width defined as number of pixels
	* @returns {BorderWidth}
  */
	export function borderWidthInPixels(number){
		return number + 'px'
	}
 
	
	/**
	 * @enum {String}
	 * @natura options
	 * @isa font size
	 */
 export const FontSizeName = {
	 medium:'medium',
	 'xx small':'xx-small',
	 'x small':'x-small',
	 small:'small',
	 large:'large',
	 'x large':'x-large',
	 'xx large':'xx-large',
	 /**Sets the font-size to a smaller size than the parent element */
	 'smaller':'smaller',
	 /**Sets the font-size to a larger size than the parent element	 */
	 larger:'larger'
 }

	/**
	 * @typedef {String} Length
	 * @natura entity
	 */
 
	/**
	 * @typedef {String} LineWidth
	 * @natura entity
	 */
 
	/**
	 * @typedef {String} BorderWidth
	 * @natura entity
	 */
 /**
	* @natura entity
	* @typedef {String} Color 
	*/
/**
 * @typedef {String} FontFamily
 * @natura entity 
 */

/**
 * @typedef {String} FontSize
 * @natura entity 
 */

/**
	* Define a color in terms of its red, gree, blue, transparency components
	* @natura expression <<r>> <<g>> <<b>> <<a>>
	* @title custom rgba color
	* @isa color
	* @role artifact
	* @param {Number} r red - a number between 0 and 255(placeholder:red)
	* @param {Number} g green - a number between 0 and 255(placeholder:green)
	* @param {Number} b blue - a number between 0 and 255(placeholder:blue)
	* @param {Number} a transparency - a number between 0 and 1 where the number 1 corresponds to 100% (full opacity)(placeholder:opacity)
	* @returns {Color}
	*/
 export function rgbaColor(r,g,b,a){
	 return `rgba(${[r,g,b,a].join(',')})`
 }
/**
 * @natura type <<width>> <<style>> <<color>>
 * @typedef Border
 * @prop {BorderWidth} width
 * @prop {BorderStyle} style
 * @prop {Color} color
 */
 export function getBorder(width,style,color){
	return [width,style,color].join(' ');
}

 /**
	* @enum {String}
	* @natura options
	* @isa LineWidth
	*/
 export const LineWidthKeyword = {
	thin:'thin',
	medium:'medium',
	thick:'thick'
 }

  /**
	* Define a custom CSS property that does not appear in the style property options
	* @natura expression <<key>>: <<value>>
	* @role artifact
	* @title custom css property
	* @param {Text} key The property name (title:property name)
	* @param {Text} value The property value (title:property value)
	* @returns {HtmlStyle}
	*/
export function CustomCssProperty(key,value){
	return {key,value}
}

 /**
	* @enum {String}
	* @natura options
	*/
 export const Cursor = {
	/**The UA will determine the cursor to display based on the current context. E.g., equivalent to text when hovering text.
 */ 
	auto:'auto',
	/**The platform-dependent default cursor. Typically an arrow.*/
	 default:'default',
	 /**No cursor is rendered. */
	 none:'none',
	 /**A context menu is available. */
	 'context menu':'context-menu',
	 /**Help information is available. */
	 help:'help',
	 /**The cursor is a pointer that indicates a link. Typically an image of a pointing hand. */
	 pointer:'pointer',
	 /**The program is busy in the background, but the user can still interact with the interface (in contrast to wait). */
	 progress:'progress',
	 /**The program is busy, and the user can't interact with the interface (in contrast to progress). Sometimes an image of an hourglass or a watch. */
	 wait:'wait',
	 /**The table cell or set of cells can be selected. */
	 cell:'cell',
	 /**Cross cursor, often used to indicate selection in a bitmap. */
	 crosshair:'crosshair',
	 /**The text can be selected. Typically the shape of an I-beam. */
	 text:'text',
	 /**The vertical text can be selected. Typically the shape of a sideways I-beam. */
	 'vertical text':'vertical-text',
	 /**An alias or shortcut is to be created. */
	 alias:'alias',
	 /**Something is to be copied. */
	 copy:'copy',
	 /**Something is to be moved. */
	 move:'move',
	 /**An item may not be dropped at the current location. */
	 'no drop':'no-drop',
	 /**The requested action will not be carried out. */
	 'not allowed':'not-allowed',
	 /**Something can be grabbed (dragged to be moved). */
	 grab:'grab',
	 /**Something is being grabbed (dragged to be moved). */
	 grabbing:'grabbing',
	 /**Something can be scrolled in any direction (panned). */
	 'all scroll':'all-scroll',
	 /**The item/column can be resized horizontally. Often rendered as arrows pointing left and right with a vertical bar separating them. */
	 'column resize':'col-resize',
	 /**The item/row can be resized vertically. Often rendered as arrows pointing up and down with a horizontal bar separating them. */
	 'row resize':'row-resize',
	 'north resize':'n-resize',
	 'east resize':'e-resize',
	 'south resize':'s-resize',
	 'west resize':'w-resize',
	 'north-east resize':'ne-resize',
	 'north-west resize':'nw-resize',
	 'south-east resize':'se-resize',
	 'south-west resize':'sw-resize',
	 'east-west resize':'ew-resize',
	 'north-south resize':'nw-resize',
	 'north-east south-west resize':'nesw-resize',
	 'north-west south-east resize':'nwse-resize',
	 /**Something can be zoomed (magnified) in */
	 'zoom in':'zoom-in',
	 /**Something can be zoomed out. */
	 'zoom out':'zoom-out'
 }

 /**
	* Set the text direction.
	* @enum {String}
	* @natura options
	*/
 export const Direction = {
	 /**left to right text direction */
	 'left to right':'ltr',
	 /**right to left text direction for languages such as Hebrew and Arabic */
	 'right to left':'rtl'
 }

 /**
	* @enum {String}
	* @natura options
	* @isa font family
	*/
 export const FontFamilyName = {
	 serif:'serif',
	 'sans-serif':'sans-serif',
	 'monospace':'monospace',
	 cursive:'cursive',
	 fantasy:'fantasy'	 
 }

 /**
	* @natura expression
	* @param {String} key 
	* @param {String} value 
	* @returns {StyleEntryObject}
	*/
 export function styleEntry(key,value){
	 return {key,value}
 }