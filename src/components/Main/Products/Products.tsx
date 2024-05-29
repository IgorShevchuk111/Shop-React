import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ProductsProps } from '../../../types';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import { Col } from 'react-bootstrap';

function Products({ filteredProducts }: ProductsProps) {
	return (
		<Col>
			<Container>
				<Row className="g-3">
					{filteredProducts.map(item => (
						<ProductCard key={item.id} item={item} />
					))}
				</Row>
			</Container>
		</Col>
	);
}

export default Products;
