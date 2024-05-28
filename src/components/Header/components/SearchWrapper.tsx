import Search from '../../Shared/Search/Search';
import Col from 'react-bootstrap/Col';

function SearchWrapper() {
	return (
		<Col
			xs={{ span: 12, order: 4, offset: 0 }}
			md={{ span: 8, order: 4, offset: 2 }}
			xxl={{ span: 6, order: 3, offset: 0 }}
		>
			<Search placeholder="What are you looking for?" />
		</Col>
	);
}

export default SearchWrapper;
