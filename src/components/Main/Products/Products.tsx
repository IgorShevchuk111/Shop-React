import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import { ProductsProps } from '../../../types';

function Products({ filteredProducts }: ProductsProps) {
	return (
		<Container>
			<Row className="g-3">
				{filteredProducts.map(item => (
					<Col
						key={item.id}
						xs={{ span: 8, offset: 2 }}
						sm={{ span: 6, offset: 0 }}
						lg={4}
					>
						<ProductCard item={item} />
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Products;
