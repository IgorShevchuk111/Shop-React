import { PropsWithChildren } from 'react';
import Col from 'react-bootstrap/Col';

export default function Logo({ children }: PropsWithChildren) {
	return (
		<Col className="d-flex justify-content-md-center " xs={7} xxl={2}>
			{children}
		</Col>
	);
}
