import './ProductCard.scss';

import { ProductCardProps } from '../../../types';

import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import ItemCard from './ItemCard/ItemCard';

function ProductCard({ item, category }: ProductCardProps) {
	const toUrlString = (str: string): string => {
		return str.replace(/\s+/g, '-');
	};
	const modelUrl = toUrlString(item.model);
	return (
		<Col
			sm={{ span: 6, offset: 0 }}
			lg={4}
			className={category && 'slick-slide'}
		>
			<Link to={category ? `/${category}/${modelUrl}` : modelUrl}>
				<ItemCard item={item} />
			</Link>
		</Col>
	);
}

export default ProductCard;
