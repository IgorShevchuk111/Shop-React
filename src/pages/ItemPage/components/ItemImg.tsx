import { Col } from 'react-bootstrap';

interface ItemImgProps {
	img: string;
	model: string;
}

function ItemImg({ img, model }: ItemImgProps) {
	return (
		<Col lg={6}>
			<img style={{ width: '100%' }} src={img} alt={model} />
		</Col>
	);
}

export default ItemImg;
