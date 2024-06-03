import LinkComponent from './LinkComponent/LinkComponent';
import Col from 'react-bootstrap/Col';

function Logo() {
	return (
		<Col className="d-flex justify-content-md-center " xs={7} xxl={2}>
			<LinkComponent to="/" className="logo" text="Shop-Logo" />
		</Col>
	);
}

export default Logo;
