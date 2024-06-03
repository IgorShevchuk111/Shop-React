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
import LinkComponent from './components/LinkComponent/LinkComponent';
import Search from '../Shared/Search/Search';
import IconLink from './components/IconLink/IconLink';
import useBasket from '../../Contexts/useBasket';
import { BsPerson, BsCart2 } from 'react-icons/bs';

function Header() {
	const { basketItems } = useBasket();
	return (
		<Container fluid className="header-container">
			<Row className="header-row  d-flex align-items-center py-2 px-4">
				<MenuWrapper>
					<Menu />
				</MenuWrapper>
				<Logo>
					<LinkComponent to="/" className="logo" text="Shop-Logo" />
				</Logo>
				<NavigationLinks>
					<LinkComponent to="/about" className="link" text="AboutUs" />
					<LinkComponent to="/help" className="link" text="Help" />
				</NavigationLinks>
				<SearchWrapper>
					<Search placeholder="What are you looking for?" />
				</SearchWrapper>
				<IconLinks>
					<IconLink to="/login" icon={BsPerson} className="person" />
					<IconLink
						to="/basket"
						icon={BsCart2}
						className="basket"
						basketItems={basketItems}
					/>
				</IconLinks>
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
