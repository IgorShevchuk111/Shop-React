import classes from './Menu.module.scss';

import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiMenuBurger } from 'react-icons/ci';
import Nav from 'react-bootstrap/Nav';

import { data } from '../../services/data';
import LinkComponent from '../../components/LinkComponent/LinkComponent';

function Menu() {
	const [categories, setCtegories] = useState<string[]>([]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setCtegories(Object.keys(data));
	}, []);

	const handleClose = () => setShow(false);

	return (
		<>
			<CiMenuBurger
				className={classes['menu-burger']}
				onClick={() => setShow(!show)}
			/>
			<Offcanvas
				className={classes['offcanvas']}
				show={show}
				onHide={() => setShow(false)}
			>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title className={classes['menu-title']}>
						Menu
					</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body className={classes['offcanvas-body']}>
					<Nav className="flex-column">
						{categories?.map(category => (
							<LinkComponent
								key={category}
								to={category}
								text={category.charAt(0).toUpperCase() + category.slice(1)}
								className="category"
								handleClose={handleClose}
							></LinkComponent>
						))}
					</Nav>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}
export default Menu;
