import { IAlbum, IMetadata } from "types";
import {
	Table,
	SpecialFont,
	Tag,
	FirstTableData,
	SecondTableData,
	TableRow,
} from "./Metadata.styled";
import formatLargeNumber from "utils/formatLargeNumber";

type Props = {
	album: IAlbum;
	metadata: IMetadata;
};

const Metadata = ({ album, metadata }: Props) => {
	return (
		<Table>
			<tbody>
				<TableRow>
					<FirstTableData>Год</FirstTableData>
					<SecondTableData>
						<SpecialFont>{album.year}</SpecialFont>
					</SecondTableData>
				</TableRow>

				<TableRow>
					<FirstTableData>Слушателей</FirstTableData>
					<SecondTableData>
						<SpecialFont>{formatLargeNumber(metadata.listeners)}</SpecialFont>
					</SecondTableData>
				</TableRow>

				<TableRow>
					<FirstTableData>Проигрышей</FirstTableData>
					<SecondTableData>
						<SpecialFont>{formatLargeNumber(metadata.playcount)}</SpecialFont>
					</SecondTableData>
				</TableRow>

				<TableRow>
					<FirstTableData>Теги</FirstTableData>
					<SecondTableData>
						{metadata.tags &&
							metadata.tags.map((tag) => <Tag key={tag.name}>{tag.name}</Tag>)}
					</SecondTableData>
				</TableRow>
			</tbody>
		</Table>
	);
};

export default Metadata;
