import styled from "styled-components";

const Item = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;

	border-top: 2px solid ${({ theme }) => theme.colors.contrastText};

	&:last-child {
		border-bottom: 2px solid ${({ theme }) => theme.colors.contrastText};
	}

	& div:nth-child(2) {
		flex-basis: calc(100% - 17% * 3);
	}

	& div:not(:nth-child(2)) {
		flex-basis: 17%;
	}

	&:hover div:last-child div:first-child {
		display: block;
	}
`;

const Cover = styled.div`
	& div {
		width: 80px;
		height: 80px;
	}
`;

const Names = styled.div`
	& div:first-child {
		font-size: ${({ theme }) => theme.fonts.large};
		line-height: 1;
	}
`;

const CreatedAt = styled.div`
	position: relative;
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
	min-width: 250px;

	position: absolute;
	top: 30px;
	right: 24px;
	z-index: ${({ theme }) => theme.order.other};

	background-color: ${({ theme }) => theme.colors.background.default};
	border: 2px solid ${({ theme }) => theme.colors.contrastText};
	border-radius: ${({ theme }) => theme.sizes.borderRadius};

	& div {
		width: 100%;
		padding: 0 1rem;
		text-align: center;
		cursor: pointer;

		&:first-child {
			border-top-left-radius: ${({ theme }) => theme.sizes.borderRadius};
			border-top-right-radius: ${({ theme }) => theme.sizes.borderRadius};
		}

		&:last-child {
			border-bottom-left-radius: ${({ theme }) => theme.sizes.borderRadius};
			border-bottom-right-radius: ${({ theme }) => theme.sizes.borderRadius};
		}

		&:hover {
			background-color: ${({ theme }) => theme.colors.primary.neutral};
		}
	}
`;

export { Item, Cover, Names, CreatedAt, ContextMenuIconWrapper, ContextMenu };
