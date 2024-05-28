import Menu from './Menu/Menu';
import Col from 'react-bootstrap/Col';

function MenuWrapper() {
	return (
		<Col className="d-xxl-none" xs={2}>
			<Menu />
		</Col>
	);
}

export default MenuWrapper;
