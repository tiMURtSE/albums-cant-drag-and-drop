import { ArrowWrapper, Content, Item, Wrapper } from "./Pagination.styled";
import ChevronLeftArrow from "components/Icons/ChevronArrow/ChevronLeftArrow";
import ChevronRightArrow from "components/Icons/ChevronArrow/ChavronRightArrow";

type Props = {
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	total: number;
};

const Pagination = ({ page, setPage, total }: Props) => {
	let totalPages = Math.ceil(total / 5);

	const onPrevious = () => {
		setPage(page - 1);
	};
	const onNext = () => {
		setPage(page + 1);
	};

	return (
		<Wrapper>
			<Content>
				<ArrowWrapper isHidden={page === 1} onClick={onPrevious}>
					<ChevronLeftArrow />
				</ArrowWrapper>

				<Item>{page}</Item>

				<ArrowWrapper isHidden={page === totalPages} onClick={onNext}>
					<ChevronRightArrow />
				</ArrowWrapper>
			</Content>
		</Wrapper>
	);
};

export default Pagination;
