interface TotalPriceProps {
	totalPrice: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ totalPrice }) => {
	return (
		<div className="d-flex justify-content-between">
			<small>Total</small>
			<small>{totalPrice} £</small>
		</div>
	);
};

export default TotalPrice;
