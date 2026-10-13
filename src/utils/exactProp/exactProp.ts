import { ValidationMap } from "prop-types"

const specialProperty = "exact-prop: \u200b";

export default function exactProp<T>(propTypes: ValidationMap<T>): ValidationMap<T> {
	if (process.env.NODE_ENV === 'production') {
		return propTypes;
	}

	return {
		...propTypes,
		[specialProperty]: (props: { [key: string]: unknown}) => {
			const unknownProps = Object.keys(props).filter(
				(propName) => !propTypes.hasOwnProperty(propName)
			);

			if (unknownProps.length > 0) {
				return new Error(
					`Unknown props found: ${unknownProps.join(', ')}. ` +
					`Please remove them from the component.`
				);
			}

			return null;
		}
	}
}
