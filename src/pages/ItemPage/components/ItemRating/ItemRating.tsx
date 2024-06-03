import React from 'react';

import './ItemRating.scss';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';

const ItemRating: React.FC = () => (
	<div className="d-flex align-items-center">
		<IoIosStar className="star" />
		<IoIosStar className="star" />
		<IoIosStar className="star" />
		<IoIosStar className="star" />
		<IoIosStarHalf className="star" />
		<span className="ms-2">(2095)</span>
	</div>
);

export default ItemRating;
