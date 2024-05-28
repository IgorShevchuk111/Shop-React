import { Col } from 'react-bootstrap';
import ReactBootstrapAccordion from './ReactBootstrapAccordion/ReactBootstrapAccordion';
import ItemHeader from './ItemHeader';
import ItemActions from './ItemActions';
import ItemInfo from './ItemInfo';

interface ItemDetailsProps {
	model: string;
	price: number;
}

function ItemDetails({ model, price }: ItemDetailsProps) {
	return (
		<Col lg={6}>
			<ItemHeader model={model} price={price} />
			<ItemActions />
			<hr />
			<ItemInfo />
			<ReactBootstrapAccordion />
		</Col>
	);
}

export default ItemDetails;
