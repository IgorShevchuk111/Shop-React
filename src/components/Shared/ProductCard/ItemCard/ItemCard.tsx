import { Card } from 'react-bootstrap';
import './ItemCard.scss';
import ItemRating from '../../../../pages/ItemPage/components/ItemRating/ItemRating';
import { ItemCardProps } from '../../../../types';
import QuantityButtonWrapper from './components/QuantityButtonWrapper/QuantityButtonWrapper';
import RemoveButton from './components/RemoveButton/RemoveButton';
import QuantityInput from './components/QuantityInput/QuantityInput';
import CardDetail from './components/CardDetail/CardDetail';

function ItemCard({ item, isHorizontal }: ItemCardProps) {
	return (
		<Card className={`item-card ${isHorizontal ? 'horizontal' : ''}`}>
			<Card.Img className="img" variant="top" src={item.img} />
			<Card.Body className="px-4 ">
				<Card.Title>{item.model}</Card.Title>
				<CardDetail label="Brand" value={item.brand} />
				<CardDetail label="Storage" value={item.storage} />
				<CardDetail label="Color" value={item.color.join(', ')} />
				<ItemRating />
				<CardDetail label="Price" value={`${item.price} £`} />
			</Card.Body>
			<QuantityButtonWrapper isHorizontal={isHorizontal}>
				<QuantityInput item={item} />
				<RemoveButton item={item} />
			</QuantityButtonWrapper>
		</Card>
	);
}

export default ItemCard;
