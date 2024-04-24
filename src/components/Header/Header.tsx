import classes from './Header.module.scss';

import Search from '../Search/Search';
import IconLink from '../IconLink/IconLink';
import LinkComponent from '../LinkComponent/LinkComponent';
import Menu from '../Menu/Menu';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsPerson } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';

function Header() {
	return (
		<Container fluid className={classes.container}>
			<Row className={`${classes.row} d-flex align-items-center py-2 px-4`}>
				<Col className="d-xxl-none" xs={2}>
					<Menu />
				</Col>
				<Col className="d-flex justify-content-center " xs={7} xxl={2}>
					<LinkComponent to="/" className="logo" text="Shop-Logo" />
				</Col>
				<Col className="d-flex d-none d-xxl-flex" xxl={2}>
					<LinkComponent to="/about" className="link" text="AboutUs" />
					<LinkComponent to="/help" className="link" text="Help" />
				</Col>
				<Col xs={{ span: 12, order: 4 }} xxl={{ span: 6, order: 3 }}>
					<Search
						svgStyle="svgStyle"
						inputStyle="inputStyle"
						placeholder="What are you looking for?"
					/>
				</Col>
				<Col
					className="d-flex justify-content-end align-items-center"
					xs={3}
					xxl={{ span: 2, order: 4 }}
				>
					<IconLink to="/login" icon={BsPerson} className="person" />
					<IconLink to="/basket" icon={BsCart2} className="basket" />
				</Col>
			</Row>
			<Row className="d-none d-xxl-flex py-2 px-4">
				<Col>
					<Menu />
				</Col>
			</Row>
		</Container>
	);
}
export default Header;
