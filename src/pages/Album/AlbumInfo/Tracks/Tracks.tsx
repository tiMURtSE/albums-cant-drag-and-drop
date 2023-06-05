import DropDownTriangle from "components/Icons/DropDownTriangle/DropDownTriangle";
import { Caption, Input, Label, Table, TableWrapper, Track, Wrapper } from "./Tracks.styled";

type Props = {
	tracks: Array<{
		"@attr": { rank: number };
		artist: string;
		duration: number;
		name: string;
		streamable: object;
		url: string;
	}>;
};

const Tracks = ({ tracks }: Props) => {
	if (!Array.isArray(tracks)) return null;

	return (
		<Wrapper numberOfTracks={(tracks.length + 1) * 74}>
			<Input type="checkbox" id="tracks" />

			<TableWrapper>
				<Table>
					<Caption>
						<Label htmlFor="tracks">
							<span>Показать треки</span>
							<span>Скрыть треки</span>
						</Label>
					</Caption>

					<tbody>
						{tracks.map((track) => (
							<Track key={track["@attr"].rank + track.name}>
								<td>{track["@attr"].rank}</td>
								<td>{track.name}</td>
							</Track>
						))}
					</tbody>
				</Table>
			</TableWrapper>
		</Wrapper>
	);
};

export default Tracks;
