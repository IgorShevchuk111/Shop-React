import { PropsWithChildren } from 'react';
import { Col } from 'react-bootstrap';

function ItemDetails({ children }: PropsWithChildren) {
	return <Col lg={6}>{children}</Col>;
}

export default ItemDetails;
