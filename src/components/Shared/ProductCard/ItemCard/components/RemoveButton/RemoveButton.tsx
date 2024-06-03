import './RemoveButton.scss';
import useBasket from '../../../../../../Contexts/useBasket';
import React from 'react';
import { AnyProduct } from '../../../../../../types';

interface RemoveButtonProps {
	item: AnyProduct;
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ item }) => {
	const { setBasketItems } = useBasket();

	const deleteItem = (itemId: number) => {
		setBasketItems(prev => prev.filter(item => item.id !== itemId));
	};
	return (
		<button className="remove-button" onClick={() => deleteItem(item.id)}>
			Remove
		</button>
	);
};

export default RemoveButton;
