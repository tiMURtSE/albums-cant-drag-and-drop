import { IAdditionalInfo } from "types";

const formatAdditionalInfo = (info: Record<string, any>): IAdditionalInfo => {
	const {
		listeners,
		playcount,
		tags: tagsObj,
		tracks: tracksObj,
		wiki,
	} = info.album;
	const tags = tagsObj?.tag;
	const tracks = tracksObj?.track;
	const description = wiki?.content;

	return {
		listeners,
		playcount,
		tags,
		tracks,
		description,
	};
};

export default formatAdditionalInfo;
