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
import { AnyProduct, Data } from '../../types';

function ProductPage() {
	const { category } = useParams<{ category: string }>();

	const [products, setProducts] = useState<AnyProduct[]>([]);
	const [query, setQuery] = useState('');
	const [sortBy, setSortBy] = useState('lowToHigh');
	const [itemPrice, setItemPrice] = useState({ min: 0, max: 1000 });
	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
	const [selectedModels, setSelectedModels] = useState<string[]>([]);
	const [selectedColors, setSelectedColors] = useState<string[]>([]);

	useEffect(() => {
		const products = getProducts(category as keyof Data);
		setProducts(products);
	}, [category]);

	const handleCheckboxChange = (
		value: string,
		category: 'brands' | 'models' | 'colors'
	) => {
		if (category === 'brands') {
			setSelectedBrands(prev =>
				prev.includes(value)
					? prev.filter(item => item !== value)
					: [...prev, value]
			);
		} else if (category === 'models') {
			setSelectedModels(prev =>
				prev.includes(value)
					? prev.filter(item => item !== value)
					: [...prev, value]
			);
		} else if (category === 'colors') {
			setSelectedColors(prev =>
				prev.includes(value)
					? prev.filter(item => item !== value)
					: [...prev, value]
			);
		}
	};

	const handlePriceChange = (minValue: number, maxValue: number) => {
		setItemPrice({ min: minValue, max: maxValue });
	};

	const handleInputChange = (value: string) => {
		setQuery(value);
	};

	const handleSortByChange = (value: string) => {
		setSortBy(value);
	};

	const sortedProducts = [...products].sort((a, b) => {
		if (sortBy === 'lowToHigh') {
			return a.price - b.price;
		} else if (sortBy === 'highToLow') {
			return b.price - a.price;
		}
		return 0;
	});

	const filteredProducts = useMemo(() => {
		return sortedProducts.filter(
			({ brand, model, color, price }) =>
				(!selectedBrands.length || selectedBrands.includes(brand)) &&
				(!selectedModels.length || selectedModels.includes(model)) &&
				(!selectedColors.length ||
					color.some(c => selectedColors.includes(c))) &&
				(!query ||
					brand.toLowerCase().includes(query.toLowerCase()) ||
					model.toLowerCase().includes(query.toLowerCase()) ||
					color.some(c => c.toLowerCase().includes(query.toLowerCase()))) &&
				price >= itemPrice.min &&
				price <= itemPrice.max
		);
	}, [
		selectedBrands,
		selectedModels,
		selectedColors,
		sortedProducts,
		query,
		itemPrice,
	]);

	return (
		<Container className="product-page-container">
			<Breadcrumb />
			<ServicePromotions />
			<UsedSmartphonesSection handleSortByChange={handleSortByChange} />
			<Row>
				<Sidebar
					category={category}
					handleCheckboxChange={handleCheckboxChange}
					selectedBrands={selectedBrands}
					selectedModels={selectedModels}
					selectedColors={selectedColors}
					handleInputChange={handleInputChange}
					handlePriceChange={handlePriceChange}
				/>
				<Products filteredProducts={filteredProducts} />
			</Row>
		</Container>
	);
}

export default ProductPage;
