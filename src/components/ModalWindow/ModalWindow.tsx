import { HTMLAttributes, useEffect, useRef } from "react";
import { ModalWindowWrapper } from "./ModalWindow.styled";
import { useLocation, useParams } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDialogElement> {}

function ModalWindow({ ...props }: Props) {
	const location = useLocation();
	const ref = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialog = ref.current;

		if (dialog) dialog.close();
	}, [location]);
	return (
		<ModalWindowWrapper
			ref={ref}
			{...props}
		></ModalWindowWrapper>
	);
}

export default ModalWindow;
