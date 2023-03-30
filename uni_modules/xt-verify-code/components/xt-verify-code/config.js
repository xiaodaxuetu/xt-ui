export const propsMap = {
	value: {
		type: String,
		default: () => ''
	},
	type: {
		type: String,
		default: () => 'box'
	},
	inputType: {
		type: String,
		default: () => 'number'
	},
	size: {
		type: Number,
		default: () => 6
	},
	isFocus: {
		type: Boolean,
		default: () => true
	},
	isPassword: {
		type: Boolean,
		default: () => false
	},
	cursorColor: {
		type: String,
		default: () => '#cccccc'
	},
	boxNormalColor: {
		type: String,
		default: () => '#cccccc'
	},
	boxActiveColor: {
		type: String,
		default: () => '#000000'
	}
}