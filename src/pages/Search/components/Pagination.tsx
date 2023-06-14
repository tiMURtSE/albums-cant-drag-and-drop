import { ArrowButton, Content, Item, Wrapper } from "./Pagination.styled";
import ChevronLeftArrow from "components/Icons/ChevronArrow/ChevronLeftArrow";
import ChevronRightArrow from "components/Icons/ChevronArrow/ChavronRightArrow";
import { ALBUMS_PER_PAGE } from "consts";

type Props = {
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	total: number;
};

const Pagination = ({ page, setPage, total }: Props) => {
	const totalPages = Math.ceil(total / ALBUMS_PER_PAGE);

	const disabledButtons = {
		left: page === 1,
		right: page === totalPages,
	};

	const onPreviousPageClick = () => {
		setPage(page - 1);
	};
	const onNextPageClick = () => {
		setPage(page + 1);
	};

	return (
		<Wrapper>
			<Content>
				<ArrowButton disabled={disabledButtons.left} onClick={onPreviousPageClick}>
					<ChevronLeftArrow />
				</ArrowButton>

				<Item>{page}</Item>

				<ArrowButton disabled={disabledButtons.right} onClick={onNextPageClick}>
					<ChevronRightArrow />
				</ArrowButton>
			</Content>
		</Wrapper>
	);
};

export default Pagination;
