import { useLayoutEffect } from 'react';

const useBodyScrollLock = (isLocked: void): void => {
	useLayoutEffect(() => {
		var originStyle = window.getComputedStyle(document.body).overflow;

		{/** Appending hidden overflow */}
		document.body.style.overflow = 'hidden';

		{/** returning original style after layout is finished via a parenthesis func */}
		return () => {
			document.body.style.overflow = originStyle;
		};
	}, []);
}

export default useBodyScrollLock;
