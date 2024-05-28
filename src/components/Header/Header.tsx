import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import MenuWrapper from './components/MenuWrapper';
import Logo from './components/Logo';
import NavigationLinks from './components/NavigationLinks';
import SearchWrapper from './components/SearchWrapper';
import IconLinks from './components/IconLinks';
import './Header.scss';
import Menu from './components/Menu/Menu';

function Header() {
	return (
		<Container fluid className="header-container">
			<Row className="header-row  d-flex align-items-center py-2 px-4">
				<MenuWrapper />
				<Logo />
				<NavigationLinks />
				<SearchWrapper />
				<IconLinks />
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
