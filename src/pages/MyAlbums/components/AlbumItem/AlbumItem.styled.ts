import styled from "styled-components";

const Item = styled.li`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;

	border-top: 2px solid ${({ theme }) => theme.colors.contrastText};

	&:last-child {
		border-bottom: 2px solid ${({ theme }) => theme.colors.contrastText};
	}

	&:hover div:last-child div:nth-child(2) {
		display: block;
	}
`;

const CoverWrapper = styled.div`
	flex-basis: 17%;

	& div {
		width: 80px;
		height: 80px;
	}
`;

const Names = styled.div`
	flex-basis: calc(100% - 17% * 3);
`;

const Title = styled.div`
	font-size: ${({ theme }) => theme.fonts.large};
	font-weight: 500;
	line-height: 1;
`;

const Artist = styled.div`
	font-weight: 500;
`;

const Year = styled.div`
	flex-basis: 17%;
`;

const CreatedAt = styled.div`
	position: relative;
	flex-basis: 17%;
`;

const ContextMenuIconWrapper = styled.div`
	display: none;

	position: absolute;
	top: 50%;
	right: 12px;
	z-index: ${({ theme }) => theme.order.other};
	transform: translateY(-50%);

	& svg {
		fill: ${({ theme }) => theme.colors.contrastText};
	}
`;

const ContextMenu = styled.div`
	display: none;
	padding: 0.5rem 0;
	min-width: max-content;

	position: absolute;
	top: 30px;
	right: 24px;
	z-index: 20;

	background-color: ${({ theme }) => theme.colors.background.default};
	border: 2px solid ${({ theme }) => theme.colors.contrastText};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	& div {
		width: 100%;
		padding: 0.5rem 1rem;
		text-align: start;
		cursor: pointer;

		&:first-child {
			/* border-top-left-radius: ${({ theme }) => theme.sizes.borderRadius};
			border-top-right-radius: ${({ theme }) => theme.sizes.borderRadius}; */
		}

		&:last-child {
			/* border-bottom-left-radius: ${({ theme }) => theme.sizes.borderRadius};
			border-bottom-right-radius: ${({ theme }) => theme.sizes.borderRadius}; */
		}

		&:hover {
			background-color: ${({ theme }) => theme.colors.primary.neutral};
		}
	}
`;

export {
	Item,
	CoverWrapper,
	Names,
	Title,
	Artist,
	Year,
	CreatedAt,
	ContextMenuIconWrapper,
	ContextMenu,
};
