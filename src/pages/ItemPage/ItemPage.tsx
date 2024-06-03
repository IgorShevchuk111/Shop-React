import Breadcrumb from '../../components/Shared/Breadcrumb/Breadcrumb';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/data';
import { AnyProduct, Data } from '../../types';
import './ItemPage.scss';
import { Container, Row } from 'react-bootstrap';
import ItemImg from './components/ItemImg';
import ItemDetails from './components/ItemDetails';
import ItemHeader from './components/ItemHeader';
import ItemActions from './components/ItemActions';
import ItemRating from './components/ItemRating/ItemRating';
import Button from '../../components/Shared/Button/Button';
import ItemInfo from './components/ItemInfo';
import ReactBootstrapAccordion from './components/ReactBootstrapAccordion/ReactBootstrapAccordion';

function ItemPage() {
	const [item, setItem] = useState<AnyProduct>();
	const pathArray = location.pathname.split('/');
	const category = pathArray[1];
	const itemModel = pathArray[pathArray.length - 1].replace(/-/g, ' ');

	useEffect(() => {
		const fetchedItem = getProducts(category as keyof Data).find(
			item => item.model === itemModel
		);
		setItem(fetchedItem || null);
	}, [category, itemModel]);

	if (!item) {
		return <div>Loading...</div>;
	}

	const { img, model, price } = item;
	return (
		<div className="itemPage-container">
			<Breadcrumb />
			<Container>
				<Row>
					<ItemImg img={img} model={model} />
					<ItemDetails>
						<ItemHeader model={model} price={price} />
						<ItemActions>
							<ItemRating />
							<Button item={item} title="Add to basket" />
						</ItemActions>
						<hr />
						<ItemInfo />
						<ReactBootstrapAccordion />
					</ItemDetails>
				</Row>
			</Container>
		</div>
	);
}

export default ItemPage;
