import { Wrapper } from "./Image.styled";

type Props = {
	width: string;
	height: string;
	src: string;
	alt: string;
};

const Image = ({ src, width, height, alt }: Props) => {
	return (
		<Wrapper>
			<img src={src} width={width} height={height} alt={alt} />
		</Wrapper>
	);
};

export default Image;
