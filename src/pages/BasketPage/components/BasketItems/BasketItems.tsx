import Breadcrumb from '../../../../components/Shared/Breadcrumb/Breadcrumb';
import useBasket from '../../../../Contexts/useBasket';
import './BasketItems.scss';
import ItemCard from '../../../../components/Shared/ProductCard/ItemCard/ItemCard';

function BasketItems() {
	const { basketItems } = useBasket();

	return (
		<div>
			<Breadcrumb />
			<div className="container-basket">
				<h5> Your Basket</h5>
				{basketItems.map(item => (
					<ItemCard key={item.id} item={item} isHorizontal={true} />
				))}
			</div>
		</div>
	);
}

export default BasketItems;
