const formatDate = (date: string) => {
	let formattedDate = new Date(date).toLocaleDateString("ru-RU", {
		day: "numeric",
		month: "short",
		year: "numeric",
	});

	formattedDate = formattedDate.replace(" г.", "");

	return formattedDate;
};

export default formatDate;
