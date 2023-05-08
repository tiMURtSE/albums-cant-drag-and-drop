import { Name, Table, Track } from "./Tracks.styled";

type Props = {
	tracks: Record<string, any>;
};

const Tracks = ({ tracks }: Props) => {
	return (
		<Table>
			<tbody>
				{tracks.map((track: any) => (
					<Track>
						<td>{track["@attr"].rank}</td>
						<Name>{track.name}</Name>
					</Track>
				))}
			</tbody>
		</Table>
	);
};

export default Tracks;
