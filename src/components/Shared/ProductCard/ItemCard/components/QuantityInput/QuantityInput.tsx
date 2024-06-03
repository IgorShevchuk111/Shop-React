import React, { ChangeEvent } from 'react';
import './QuantityInput.scss';
import useBasket from '../../../../../../Contexts/useBasket';
import { AnyProduct } from '../../../../../../types';

interface QuantityInputProps {
	item: AnyProduct;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ item }) => {
	const { setBasketItems } = useBasket();

	const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newQuantity = +e.target.value;
		setBasketItems(prev =>
			prev.map(i => (i.id === item.id ? { ...i, quantity: newQuantity } : i))
		);
	};
	return (
		<input
			value={item.quantity}
			min={1}
			onChange={handleQuantityChange}
			type="number"
			className="quantity-items"
		/>
	);
};

export default QuantityInput;
