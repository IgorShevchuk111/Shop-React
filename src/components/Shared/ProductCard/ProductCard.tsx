import './ProductCard.scss';
import Card from 'react-bootstrap/Card';
import { ProductCardProps } from '../../../types';

import { Link } from 'react-router-dom';
import ItemRating from '../../../pages/ItemPage/components/ItemRating/ItemRating';

function ProductCard({ item, category }: ProductCardProps) {
	const toUrlString = (str: string): string => {
		return str.replace(/\s+/g, '-');
	};
	const modelUrl = toUrlString(item.model);
	return (
		<Link to={category ? `/${category}/${modelUrl}` : modelUrl}>
			<Card className="card py-3 card:hover  mx-auto ">
				<Card.Img className="img" variant="top" src={item.img} />
				<Card.Body className="px-4">
					<Card.Title>{item.model}</Card.Title>
					<div className="card-detail">
						<span className="label">Brand:</span>
						<span className="value">{item.brand}</span>
					</div>
					<div className="card-detail">
						<span className="label">Storage:</span>
						<span className="value">{item.storage}</span>
					</div>
					<div className="card-detail">
						<span className="label">Color:</span>
						<span className="value">{item.color.join(', ')}</span>
					</div>
					<ItemRating />
					<div className="card-detail">
						<span className="label">Price:</span>
						<span className="value">{item.price} £</span>
					</div>
				</Card.Body>
			</Card>
		</Link>
	);
}

export default ProductCard;
