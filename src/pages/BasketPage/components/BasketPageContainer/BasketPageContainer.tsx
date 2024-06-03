import { PropsWithChildren } from 'react';
import './BasketPageContainer.scss';

import useBasket from '../../../../Contexts/useBasket';

function BasketPageContainer({ children }: PropsWithChildren) {
	const { basketItems } = useBasket();

	return (
		<div className="basket-container">
			{basketItems.length > 0 ? (
				children
			) : (
				<h1 className="element">There's nothing in your Basket</h1>
			)}
		</div>
	);
}

export default BasketPageContainer;
