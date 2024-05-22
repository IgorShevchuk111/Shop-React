import { getProducts } from '../../services/data';
import ServicePromotions from '../../components/Main/ServicePromotions/ServicePromotions';
import UsedSmartphonesSection from '../../components/Main/UsedProductsSection/UsedProductsSection';
import Products from '../../components/Main/Products/Products';
import Breadcrumb from '../../components/Shared/Breadcrumb/Breadcrumb';
import Sidebar from '../../components/Main/Sidebar/Sidebar';
import './ProductPage.scss';

import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Data, FilterData } from '../../types';

function ProductPage() {
	const { category } = useParams<{ category: string }>();
	const [filters, setFilters] = useState<FilterData>({
		brands: [],
		models: [],
		colors: [],
	});

	const handleCheckboxChange = (value: string, category: keyof FilterData) => {
		setFilters(prevFilters => ({
			...prevFilters,
			[category]: prevFilters[category].includes(value)
				? prevFilters[category].filter(item => item !== value)
				: [...prevFilters[category], value],
		}));
	};

	const filteredProducts = useMemo(() => {
		const products = getProducts(category as keyof Data);
		const noFiltersSelected =
			filters.brands.length === 0 &&
			filters.models.length === 0 &&
			filters.colors.length === 0;

		if (noFiltersSelected) {
			return products;
		}
		return products.filter(product => {
			const brandMatch =
				filters.brands.length === 0 || filters.brands.includes(product.brand);
			const modelMatch =
				filters.models.length === 0 || filters.models.includes(product.model);
			const colorMatch =
				filters.colors.length === 0 ||
				product.color.some((color: string) => filters.colors.includes(color));
			return brandMatch && modelMatch && colorMatch;
		});
	}, [category, filters]);

	return (
		<Container className="product-page-container">
			<Breadcrumb />
			<ServicePromotions />
			<UsedSmartphonesSection />
			<Row>
				<Col className="d-none d-xl-flex " xl={3}>
					<Sidebar
						category={category}
						handleCheckboxChange={handleCheckboxChange}
						filters={filters}
					/>
				</Col>
				<Col>
					<Products filteredProducts={filteredProducts} />
				</Col>
			</Row>
		</Container>
	);
}

export default ProductPage;
