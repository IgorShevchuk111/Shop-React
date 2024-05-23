import './ProductCard.scss';
import Card from 'react-bootstrap/Card';
import { ProductCardProps } from '../../../types';
import { IoIosStar } from 'react-icons/io';
import { IoIosStarHalf } from 'react-icons/io';

function ProductCard({ item }: ProductCardProps) {
	return (
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
				<div className="card-detail stars">
					<IoIosStar className="star" />
					<IoIosStar className="star" />
					<IoIosStar className="star" />
					<IoIosStar className="star" />
					<IoIosStarHalf className="star" />
					<span className="value">(2095)</span>
				</div>
				<div className="card-detail">
					<span className="label">Price:</span>
					<span className="value">{item.price} £</span>
				</div>
			</Card.Body>
		</Card>
	);
}

export default ProductCard;
