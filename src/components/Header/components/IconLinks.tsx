import { BsPerson, BsCart2 } from 'react-icons/bs';
import Col from 'react-bootstrap/Col';
import IconLink from './IconLink/IconLink';

function IconLinks() {
	return (
		<Col
			className="d-flex justify-content-end align-items-center"
			xs={3}
			xxl={{ span: 2, order: 4 }}
		>
			<IconLink to="/login" icon={BsPerson} className="person" />
			<IconLink to="/basket" icon={BsCart2} className="basket" />
		</Col>
	);
}

export default IconLinks;
