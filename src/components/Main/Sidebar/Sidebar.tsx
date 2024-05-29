import { useMemo } from 'react';
import RangeSlider from './RangeSlider/RangeSlider';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import { getProducts } from '../../../services/data';
import { SidebarProps, Data } from '../../../types';
import { Col } from 'react-bootstrap';

function Sidebar({ category, handleCheckboxChange, filters }: SidebarProps) {
	const products = useMemo(
		() => getProducts(category as keyof Data),
		[category]
	);

	const filteredBrands = useMemo(() => {
		const allBrands = [...new Set(products.map(product => product.brand))];
		if (filters.models.length === 0 && filters.colors.length === 0) {
			return allBrands;
		}
		return [
			...new Set(
				products
					.filter(
						product =>
							(filters.models.length === 0 ||
								filters.models.includes(product.model)) &&
							(filters.colors.length === 0 ||
								product.color.some((color: string) =>
									filters.colors.includes(color)
								))
					)
					.map(product => product.brand)
			),
		];
	}, [products, filters.models, filters.colors]);

	const filteredModels = useMemo(() => {
		const allModels = [...new Set(products.map(product => product.model))];
		if (filters.brands.length === 0 && filters.colors.length === 0) {
			return allModels;
		}
		return [
			...new Set(
				products
					.filter(
						product =>
							(filters.brands.length === 0 ||
								filters.brands.includes(product.brand)) &&
							(filters.colors.length === 0 ||
								product.color.some((color: string) =>
									filters.colors.includes(color)
								))
					)
					.map(product => product.model)
			),
		];
	}, [products, filters.brands, filters.colors]);

	const filteredColors = useMemo(() => {
		const allColors = [
			...new Set(products.flatMap(product => product.color).filter(Boolean)),
		];
		if (filters.brands.length === 0 && filters.models.length === 0) {
			return allColors;
		}
		return [
			...new Set(
				products
					.filter(
						product =>
							(filters.brands.length === 0 ||
								filters.brands.includes(product.brand)) &&
							(filters.models.length === 0 ||
								filters.models.includes(product.model))
					)
					.flatMap(product => product.color)
					.filter(Boolean)
			),
		];
	}, [products, filters.brands, filters.models]);

	return (
		<Col className="d-none d-xl-block " xl={3}>
			<RangeSlider />
			<SidebarFilter
				items={filteredBrands}
				title="Brand"
				category="brands"
				filters={filters}
				handleCheckboxChange={handleCheckboxChange}
			/>
			<SidebarFilter
				items={filteredModels}
				title="Model"
				category="models"
				filters={filters}
				handleCheckboxChange={handleCheckboxChange}
			/>
			<SidebarFilter
				items={filteredColors}
				title="Color"
				category="colors"
				filters={filters}
				handleCheckboxChange={handleCheckboxChange}
			/>
		</Col>
	);
}

export default Sidebar;
