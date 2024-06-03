import { PropsWithChildren } from 'react';
import Col from 'react-bootstrap/Col';

export default function NavigationLinks({ children }: PropsWithChildren) {
	return (
		<Col className="d-flex d-none d-xxl-flex" xxl={2}>
			{children}
		</Col>
	);
}
