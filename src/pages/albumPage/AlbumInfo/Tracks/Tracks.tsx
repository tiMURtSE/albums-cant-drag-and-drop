import DropDownTriangle from "components/Icons/DropDownTriangle/DropDownTriangle";
import { Caption, Input, Table, Track, Wrapper } from "./Tracks.styled";

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
	if (!tracks) return null;

	return (
		<Wrapper>
			<Input type="checkbox" id="tracks" />

			<div>
				<Table>
					<Caption>
						<label htmlFor="tracks">
							Треки
							<DropDownTriangle />
						</label>
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
			</div>
		</Wrapper>
	);
};

export default Tracks;
