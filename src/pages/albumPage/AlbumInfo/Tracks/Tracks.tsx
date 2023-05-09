import DropDownTriangle from "components/Icons/DropDownTriangle/DropDownTriangle";
import { Caption, Input, Table, Track, Wrapper } from "./Tracks.styled";

type Props = {
	tracks: Array<{ duration: number; url: string; name: string }>;
};

const Tracks = ({ tracks }: Props) => {
	return (
		<Wrapper>
			<Input type="checkbox" id="input" />

			<Table>
				<Caption>
					<label htmlFor="input">Треки</label>

					<DropDownTriangle />
				</Caption>

				<tbody>
					{tracks.map((track: any) => (
						<Track>
							<td>{track["@attr"].rank}</td>
							<td>{track.name}</td>
						</Track>
					))}
				</tbody>
			</Table>
		</Wrapper>
	);
};

export default Tracks;
