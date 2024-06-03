import { PropsWithChildren } from 'react';
import Col from 'react-bootstrap/Col';

export default function SearchWrapper({ children }: PropsWithChildren) {
	return (
		<Col
			xs={{ span: 12, order: 4, offset: 0 }}
			md={{ span: 8, order: 4, offset: 2 }}
			xxl={{ span: 6, order: 3, offset: 0 }}
		>
			{children}
		</Col>
	);
}
