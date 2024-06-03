import React, { PropsWithChildren } from 'react';

import './QuantityButtonWrapper.scss';

interface QuantityButtonWrapperProps {
	isHorizontal?: boolean;
}

const QuantityButtonWrapper: React.FC<
	PropsWithChildren<QuantityButtonWrapperProps>
> = ({ isHorizontal, children }) => {
	return (
		<div className="quantity-button-wrapper">{isHorizontal && children}</div>
	);
};

export default QuantityButtonWrapper;
