import { Row, Col } from 'react-bootstrap';
import SortByDropdown from '../Main/SortByDropdown/SortByDropdown';

const UsedSmartphonesSection = () => {
	return (
		<Row className="m-5">
			<Col className="text-sm-center text-xl-start" xl={9}>
				<h3 className="font-weight-bold">Used Smartphones</h3>
				<p>Buy Used phones for cheap when you shop at Online-Shop.</p>
			</Col>
			<Col
				lg={3}
				className="d-none d-xl-flex align-items-center justify-content-end"
			>
				<SortByDropdown />
			</Col>
		</Row>
	);
};

export default UsedSmartphonesSection;
