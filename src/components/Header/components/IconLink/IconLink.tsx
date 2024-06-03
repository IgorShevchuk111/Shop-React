import { Link } from 'react-router-dom';
import './IconLink.scss';
import { AnyProduct } from '../../../../types';

interface IconLinkProps {
	icon: React.ElementType;
	to: string;
	className: string;
	basketItems?: AnyProduct[];
}

const IconLink = ({
	to,
	icon: Icon,
	className,
	basketItems,
}: IconLinkProps) => {
	const quantityItemsInbasket = basketItems?.length;

	return (
		<div>
			<Link className={className} to={to}>
				<Icon />
				<small className="quantity-items-in-basket">
					{quantityItemsInbasket && quantityItemsInbasket > 0
						? quantityItemsInbasket
						: null}
				</small>
			</Link>
		</div>
	);
};

export default IconLink;
