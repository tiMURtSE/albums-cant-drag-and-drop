import { IMetadata } from "types";

const formatMetadata = (info: Record<string, any>): IMetadata => {
	const { listeners, playcount, tags: tagsObj, tracks: tracksObj, wiki } = info.album;
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

export default formatMetadata;
