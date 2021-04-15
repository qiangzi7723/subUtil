module.exports = {
	add(...params) {
		params.reduce((prev, current) => {
			return prev + current;
		});
	},
};
