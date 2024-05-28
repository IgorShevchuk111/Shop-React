import LinkComponent from '../../Header/LinkComponent/LinkComponent';
import Col from 'react-bootstrap/Col';

function NavigationLinks() {
	return (
		<Col className="d-flex d-none d-xxl-flex" xxl={2}>
			<LinkComponent to="/about" className="link" text="AboutUs" />
			<LinkComponent to="/help" className="link" text="Help" />
		</Col>
	);
}

export default NavigationLinks;
