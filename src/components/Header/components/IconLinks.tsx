import Col from 'react-bootstrap/Col';
import { PropsWithChildren } from 'react';

export default function IconLinks({ children }: PropsWithChildren) {
	return (
		<Col
			className="d-flex justify-content-end "
			xs={3}
			xxl={{ span: 2, order: 4 }}
		>
			{children}
		</Col>
	);
}
