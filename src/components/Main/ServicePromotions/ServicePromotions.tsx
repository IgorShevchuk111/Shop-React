import FreeDelivery from './FreeDelivery';
import FreeReturns from './FreeReturns';
import OneYearWarranty from './OneYearWarranty';
import classes from './ServicePromotions.module.scss';

const ServicePromotions = () => {
	return (
		<div
			className={`${classes.wrapper} d-flex justify-content-between px-3 py-3`}
		>
			<FreeReturns />
			<FreeDelivery />
			<OneYearWarranty />
		</div>
	);
};

export default ServicePromotions;
