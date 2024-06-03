import React from 'react';
import './SummaryItem..scss';
import { AnyProduct } from '../../../../types';

interface SummaryItemProps {
	item: AnyProduct;
}

const SummaryItem: React.FC<SummaryItemProps> = ({ item }) => {
	return (
		<div className="d-flex align-items-center mb-3">
			<div className="position-relative">
				<img className="shopping-img" src={item.img} alt="foto" />
				<div className="position-absolute quantity-summary-num">
					{item.quantity}
				</div>
			</div>
			<div className="w-100">
				<div className="justify-content-between d-flex">
					<span>{item.model}</span>
					<span>{item.price} £</span>
				</div>
				<div className="justify-content-between d-flex">
					<small className="margin-top-10">Shipping</small>
					<small className="margin-top-10">Free</small>
				</div>
			</div>
		</div>
	);
};

export default SummaryItem;
