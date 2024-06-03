import { AnyProduct, ButtonProps } from '../../../types';
import './Button.scss';
import useBasket from '../../../Contexts/useBasket';

const Button: React.FC<ButtonProps> = ({ title, item }) => {
	const { setBasketItems } = useBasket();

	const addToBasket = (item: AnyProduct) => {
		setBasketItems(prev =>
			prev.some(basketItem => basketItem.id === item.id)
				? prev
				: [...prev, { ...item, quantity: 1 }]
		);
	};
	return (
		<>
			<button className="addToBasket hover" onClick={() => addToBasket(item)}>
				{title}
			</button>
		</>
	);
};

export default Button;
