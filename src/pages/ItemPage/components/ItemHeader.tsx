interface ItemHeaderProps {
	model: string;
	price: number;
}

function ItemHeader({ model, price }: ItemHeaderProps) {
	return (
		<div className="d-flex justify-content-between">
			<h3>{model}</h3>
			<h5>{price} £</h5>
		</div>
	);
}

export default ItemHeader;
