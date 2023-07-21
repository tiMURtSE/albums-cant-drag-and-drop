import { HTMLAttributes, useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ModalWindowWrapper } from "./ModalWindow.styled";

interface Props extends HTMLAttributes<HTMLDialogElement> {}

function ModalWindow({ children, ...props }: Props) {
	const location = useLocation();
	const ref = useRef<HTMLDialogElement>(null);

	const unlockScroll = () => {
		document.body.style.scrollbarGutter = "auto";
		document.body.style.overflow = "visible";
	};

	useEffect(() => {
		const dialog = ref.current;

		if (dialog) dialog.close();
	}, [location]);

	return (
		<ModalWindowWrapper
			ref={ref}
			onClose={unlockScroll}
			{...props}
		>
			{children}
		</ModalWindowWrapper>
	);
}

export default ModalWindow;
