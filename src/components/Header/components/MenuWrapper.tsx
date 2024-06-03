import { PropsWithChildren } from 'react';
import Col from 'react-bootstrap/Col';

export default function MenuWrapper({ children }: PropsWithChildren) {
	return (
		<Col className="d-xxl-none" xs={2}>
			{children}
		</Col>
	);
}
