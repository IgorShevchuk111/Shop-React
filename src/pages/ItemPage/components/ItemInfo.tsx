import Delivery from './Delivery/Delivery';
import Free30DayReturns from './Free30DayReturns/Free30DayReturns';

const ItemInfo: React.FC = () => (
	<div className="d-flex justify-content-evenly">
		<Delivery />
		<Free30DayReturns />
	</div>
);

export default ItemInfo;
