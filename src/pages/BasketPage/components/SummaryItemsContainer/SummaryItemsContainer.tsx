import { PropsWithChildren } from 'react';
import SummaryItem from '../SummaryItem/SummaryItem';
import './SummaryItemsContainer.scss';
import { AnyProduct } from '../../../../types';

interface SummaryItemsContainerProps {
	basketItems: AnyProduct[];
}

const SummaryItemsContainer: React.FC<
	PropsWithChildren<SummaryItemsContainerProps>
> = ({ basketItems, children }) => {
	return (
		<div className="summary-container">
			{basketItems.map(item => (
				<SummaryItem key={item.id} item={item} />
			))}
			<hr />
			{children}
		</div>
	);
};

export default SummaryItemsContainer;
