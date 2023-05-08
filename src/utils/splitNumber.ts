const splitNumber = (number: string) => {
	let result = "";

	for (let i = number.length - 1; i >= 0; i--) {
		result = number[i] + result;

		if ((number.length - i) % 3 === 0 && i !== 0) {
			result = " " + result;
		}
	}

	return result;
};

export default splitNumber;
