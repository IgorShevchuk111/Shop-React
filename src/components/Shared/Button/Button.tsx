import './Button.scss';

interface ButtonProps {
	title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
	const addToBasket = () => {
		// const item = { quantity: 1 };
	};

	return (
		<>
			<button className="addToBasket hover" onClick={addToBasket}>
				{title}
			</button>
		</>
	);
};

export default Button;
