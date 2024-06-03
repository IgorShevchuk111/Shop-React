import { BsPerson, BsCart2 } from 'react-icons/bs';
import Col from 'react-bootstrap/Col';
import IconLink from './IconLink/IconLink';
import useBasket from '../../../Contexts/useBasket';

function IconLinks() {
	const { basketItems } = useBasket();
	return (
		<Col
			className="d-flex justify-content-end "
			xs={3}
			xxl={{ span: 2, order: 4 }}
		>
			<IconLink to="/login" icon={BsPerson} className="person" />
			<IconLink
				to="/basket"
				icon={BsCart2}
				className="basket"
				basketItems={basketItems}
			/>
		</Col>
	);
}

export default IconLinks;
