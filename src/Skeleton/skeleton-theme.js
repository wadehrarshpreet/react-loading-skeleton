import React from 'react';
import { css } from '@emotion/core';
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
	return <div className={themeClass}>{children}</div>;
};

export default SkeletonTheme;
