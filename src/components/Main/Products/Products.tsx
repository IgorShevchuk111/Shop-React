import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../../Shared/ProductCard/ProductCard';
import { Laptop, Smartphone } from '../../../types';

interface ProductsProps {
	filteredProducts: (Laptop | Smartphone)[];
}

function Products({ filteredProducts }: ProductsProps) {
	return (
		<Container>
			<Row className="g-3">
				{filteredProducts.length > 0
					? filteredProducts?.map((item, i) => (
							<Col
								key={i}
								xs={{ span: 8, offset: 2 }}
								sm={{ span: 6, offset: 0 }}
								lg={4}
							>
								<ProductCard item={item} />
							</Col>
						))
					: []}
			</Row>
		</Container>
	);
}

export default Products;
