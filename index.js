export default {
	add(...params) {
		return params.reduce((prev, current) => {
			return prev + current;
		});
	},
};

export function log(...params) {
	console.log(...params);
}
