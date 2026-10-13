import * as React from 'react';

/** 
 * @param element React.ReactElement
 * @returns React.Ref<any> | null
 */

export default function getReactElementRef(element: React.ReactElement): React.Ref<any> | null {
	if (parseInt(React.version, 10) >= 19) {
		return (element?.props as any)?.ref || null;
	}

	return element?.ref || null;
}
