/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { defaultBaseColor, defaultHighlightColor } from './Skeleton';

const SkeletonTheme = (props) => {
	const {
		color = defaultBaseColor,
		highlightColor = defaultHighlightColor,
		children,
	} = props;

	const themeClass = css`
		.react-loading-skeleton {
			background-color: ${color};
			background-image: linear-gradient(
				90deg,
				${color},
				${highlightColor},
				${color}
			);
		}
	`;
	return <div css={themeClass}>{children}</div>;
};

export default SkeletonTheme;
