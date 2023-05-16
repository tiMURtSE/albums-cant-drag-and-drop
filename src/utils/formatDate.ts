const months: any = {
	"01": "янв.",
	"02": "фев.",
	"03": "мар.",
	"04": "апр.",
	"05": "мая",
	"06": "июн.",
	"07": "июл.",
	"08": "авг.",
	"09": "сен.",
	"10": "окт.",
	"11": "ноя.",
	"12": "дек.",
};

const formatDate = (date: string) => {
	const splittedDate = date.split(".");
	const day = splittedDate[0];
	const month = months[splittedDate[1]].slice(0, 4);
	const year = splittedDate[2];

	return `${day} ${month} ${year}`;
};

export default formatDate;
