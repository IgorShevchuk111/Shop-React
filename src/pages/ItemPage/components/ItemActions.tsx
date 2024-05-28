import Button from '../../../components/Shared/Button/Button';
import ItemRating from './ItemRating/ItemRating';

const ItemActions: React.FC = () => (
	<div className="d-flex justify-content-between">
		<ItemRating />
		<Button title="Add to basket" />
	</div>
);

export default ItemActions;
