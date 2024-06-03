import React, { PropsWithChildren } from 'react';
import './BasketSummaryContainer.scss';

const BasketSummaryContainer: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="item-container-summary">
			<h5> Summary</h5>
			{children}
		</div>
	);
};

export default BasketSummaryContainer;
