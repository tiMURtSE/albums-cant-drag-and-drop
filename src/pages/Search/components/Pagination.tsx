import ChevronRightArrow from "components/Icons/ChevronArrow/ChavronRightArrow";
import ChevronLeftArrow from "components/Icons/ChevronArrow/ChevronLeftArrow";
import { ALBUMS_PER_PAGE } from "consts";
import { ArrowButton, Content, Item, Wrapper } from "./Pagination.styled";

type Props = {
	page: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	total: number;
	getFoundAlbums: (newPage?: number) => Promise<void>;
};

const Pagination = ({ page, setPage, total, getFoundAlbums }: Props) => {
	const totalPages = Math.ceil(total / ALBUMS_PER_PAGE);

	const disabledButtons = {
		left: page === 1,
		right: page === totalPages,
	};

	const onPreviousPageClick = () => {
		setPage(page - 1);
		getFoundAlbums(page - 1);
		console.log("page");
	};
	const onNextPageClick = () => {
		setPage(page + 1);
		getFoundAlbums(page + 1);
		console.log("page");
	};

	return (
		<Wrapper>
			<Content>
				<ArrowButton
					disabled={disabledButtons.left}
					onClick={onPreviousPageClick}
				>
					<ChevronLeftArrow />
				</ArrowButton>

				<Item>{page}</Item>

				<ArrowButton
					disabled={disabledButtons.right}
					onClick={onNextPageClick}
				>
					<ChevronRightArrow />
				</ArrowButton>
			</Content>
		</Wrapper>
	);
};

export default Pagination;
