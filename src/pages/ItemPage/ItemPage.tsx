import Breadcrumb from '../../components/Shared/Breadcrumb/Breadcrumb';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/data';
import { AnyProduct, Data } from '../../types';
import './ItemPage.scss';
import { Container, Row } from 'react-bootstrap';
import ItemImg from './components/ItemImg';
import ItemDetails from './components/ItemDetails';

function ItemPage() {
	const [item, setItem] = useState<AnyProduct | null>(null);
	const pathArray = location.pathname.split('/');
	const category = pathArray[1];
	const itemModel = pathArray[pathArray.length - 1].replace(/-/g, ' ');

	useEffect(() => {
		const item = getProducts(category as keyof Data).find(
			item => item.model === itemModel
		);
		setItem(item);
	}, [category, itemModel]);
	return (
		<div className="itemPage-container">
			<Breadcrumb />
			<Container>
				{item && (
					<Row>
						<ItemImg img={item.img} model={item.model} />
						<ItemDetails model={item.model} price={item.price} />
					</Row>
				)}
			</Container>
		</div>
	);
}

export default ItemPage;
