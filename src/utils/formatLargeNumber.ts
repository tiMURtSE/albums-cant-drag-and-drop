const formatLargeNumber = (number: string) => {
	if (+number >= 1000000) {
		return (+number / 1000000).toFixed(1) + " млн.";
	} else if (+number >= 1000) {
		return (+number / 1000).toFixed(1) + " тыс.";
	} else {
		return number;
	}
};

export default formatLargeNumber;
