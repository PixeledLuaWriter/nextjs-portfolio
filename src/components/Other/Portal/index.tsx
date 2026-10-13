"use client";
import * as React from "react";
import * as ReactDOM from "react-dom";
import PropTypes from "prop-types";
import useEnhancedEffect from "@/utils/useEnhancedEffect";
import useForkRef from "@/utils/useForkRef";
import setRef from "@/utils/setRef";
import getReactElementRef from "@/utils/getReactElementRef";
import exactProp from "@/utils/exactProp";
import HTMLElementType from "@/utils/HTMLElementType/HTMLElementType";
import { PortalProps } from "./index.types";

// getContainer reference from MUI-Material/src/Portal
function getContainer(container: PortalProps["container"]) {
	return typeof container === 'function' ? container() : container;
}


const Portal = React.forwardRef(function Portal(
	props: PortalProps,
	forwardRef: React.ForwardRef<Element>,
) {
	const { children, container, disablePortal = false } = props;
	const [mountNode, setMountNode] = React.useState<ReturnType<typeof getContainer>>(null);

	const handleRef = useForkRef(
		// @ts-ignore
		React.isValidElement(children) ? getReactElementRef(children) : null,
		forwardRef,
	);

	useEnhancedEffect(() => {
		if (!disablePortal) {
			setMountNode(getContainer(container) || document.body);
		}
	}, [container, disablePortal]);

	useEnhancedEffect(() => {
		if (mountNode && !disablePortal) {
			setRef(forwardRef, mountNode);
			return () => {
				setRef(forwardRef, null);
			};
		}

		return undefined;
	}, [mountNode, disablePortal, forwardRef]);
	
	if (disablePortal) {
		if (React.isValidElement(children)) {
			return React.cloneElement(children, {
				ref: handleRef,
			});
		}

		return children;
	}

	return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
}) as React.ForwardRefExoticComponent<PortalProps & React.RefAttributes<Element>>;

Portal.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit the TypeScript types and run "yarn proptypes"     |
	// ----------------------------------------------------------------------
	children: PropTypes.node,
	container: PropTypes.oneOfType([
		HTMLElementType,
		PropTypes.func,
	]),
	disablePortal: PropTypes.bool,
} as any;

if (process.env.NODE_ENV !== 'production') {
	(Portal as any)['propTypes' + ''] = exactProp((Portal as any).propTypes);
}

export default Portal;
