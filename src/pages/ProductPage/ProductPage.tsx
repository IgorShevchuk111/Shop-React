import { getProducts } from '../../services/data';
import ServicePromotions from '../../components/Main/ServicePromotions/ServicePromotions';
import UsedSmartphonesSection from '../../components/Main/UsedProductsSection';
import Products from '../../components/Main/Products';
import Breadcrumb from '../../components/Shared/Breadcrumb/Breadcrumb';
import Sidebar from '../../components/Main/Sidebar/Sidebar';
import './ProductPage.scss';

import { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { AnyProduct, Data, FilterData } from '../../types';

function ProductPage() {
	const { category } = useParams<{ category: string }>();

	const [products, setProducts] = useState<AnyProduct[]>([]);
	const [query, setQuery] = useState('');
	const [filters, setFilters] = useState<FilterData>({
		brands: [],
		models: [],
		colors: [],
	});

	useEffect(() => {
		const products = getProducts(category as keyof Data);
		setProducts(products);
	}, [category]);

	const handleCheckboxChange = (value: string, category: keyof FilterData) => {
		setFilters(prevFilters => ({
			...prevFilters,
			[category]: prevFilters[category].includes(value)
				? prevFilters[category].filter(item => item !== value)
				: [...prevFilters[category], value],
		}));
	};

	const handleInputChange = (value: string) => {
		setQuery(value);
	};

	const filteredProducts = useMemo(() => {
		const { brands, models, colors } = filters;
		return products.filter(
			({ brand, model, color }) =>
				(!brands.length || brands.includes(brand)) &&
				(!models.length || models.includes(model)) &&
				(!colors.length || color.some((c: string) => colors.includes(c))) &&
				(!query ||
					brand.toLowerCase().includes(query.toLowerCase()) ||
					model.toLowerCase().includes(query.toLowerCase()) ||
					color.some((c: string) =>
						c.toLowerCase().includes(query.toLowerCase())
					))
		);
	}, [products, filters, query]);
	return (
		<Container className="product-page-container">
			<Breadcrumb />
			<ServicePromotions />
			<UsedSmartphonesSection />
			<Row>
				<Sidebar
					category={category}
					handleCheckboxChange={handleCheckboxChange}
					filters={filters}
					handleInputChange={handleInputChange}
				/>

				<Products filteredProducts={filteredProducts} />
			</Row>
		</Container>
	);
}

export default ProductPage;
