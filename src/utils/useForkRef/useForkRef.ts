'use client';
import * as React from 'react';

/** 
 * Reference used from Material UI's useForkRef hook.
 * Merges refs into a single memoized callback ref or null.
 * 
 * @param {Array<React.Ref<Instance> | undefined>} refs - The ref array.
 * @returns {React.RefCallback<Instance> | null} The new ref callback.
 */

export default function useForkRef<Instance>(
	...refs: Array<React.Ref<Instance> | undefined>
): React.RefCallback<Instance> | null {
	const cleanupRef = React.useRef<() => void>(undefined);

	const refEffect = React.useCallback((instance: Instance) => {
		const cleanups = refs.map((ref) => {
			if (ref == null) {
				return null;
			}

			if (typeof ref === 'function') {
				const refCallback = ref;
				const refCleanup: void | (() => void) = refCallback(instance);
				return typeof refCleanup === 'function' ? refCleanup : () => { refCallback(null); }
			}

			ref.current = instance;
			return () => {
				ref.current = null;
			};
		});

		return () => {
			cleanups.forEach((refCleanup) => refCleanup?.());
		}

	}, refs);

	return React.useMemo(() => {
		if (refs.every((ref) => ref == null)) {
			return null;
		}

		return (value) => {
			if (cleanupRef.current) {
				cleanupRef.current();
				cleanupRef.current = undefined;
			}

			if (value != null ) {
				cleanupRef.current = refEffect(value);
			}
		}
	}, refs);
}
