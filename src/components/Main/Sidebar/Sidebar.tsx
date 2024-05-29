import { useMemo } from 'react';
import RangeSlider from './RangeSlider/RangeSlider';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import { getProducts } from '../../../services/data';
import { SidebarProps, Data } from '../../../types';
import { Col } from 'react-bootstrap';

function Sidebar({
	category,
	handleCheckboxChange,
	selectedBrands,
	selectedModels,
	selectedColors,
	handleInputChange,
	handlePriceChange,
}: SidebarProps) {
	const products = useMemo(
		() => getProducts(category as keyof Data),
		[category]
	);

	const filteredBrands = useMemo(() => {
		const allBrands = [...new Set(products.map(product => product.brand))];
		if (selectedModels.length === 0 && selectedColors.length === 0) {
			return allBrands;
		}
		return [
			...new Set(
				products
					.filter(
						product =>
							(selectedModels.length === 0 ||
								selectedModels.includes(product.model)) &&
							(selectedColors.length === 0 ||
								product.color.some((color: string) =>
									selectedColors.includes(color)
								))
					)
					.map(product => product.brand)
			),
		];
	}, [products, selectedModels, selectedColors]);

	const filteredModels = useMemo(() => {
		const allModels = [...new Set(products.map(product => product.model))];
		if (selectedBrands.length === 0 && selectedColors.length === 0) {
			return allModels;
		}
		return [
			...new Set(
				products
					.filter(
						product =>
							(selectedBrands.length === 0 ||
								selectedBrands.includes(product.brand)) &&
							(selectedColors.length === 0 ||
								product.color.some((color: string) =>
									selectedColors.includes(color)
								))
					)
					.map(product => product.model)
			),
		];
	}, [products, selectedBrands, selectedColors]);

	const filteredColors = useMemo(() => {
		const allColors = [
			...new Set(products.flatMap(product => product.color).filter(Boolean)),
		];
		if (selectedBrands.length === 0 && selectedModels.length === 0) {
			return allColors;
		}
		return [
			...new Set(
				products
					.filter(
						product =>
							(selectedBrands.length === 0 ||
								selectedBrands.includes(product.brand)) &&
							(selectedModels.length === 0 ||
								selectedModels.includes(product.model))
					)
					.flatMap(product => product.color)
					.filter(Boolean)
			),
		];
	}, [products, selectedBrands, selectedModels]);

	return (
		<Col className="d-none d-xl-block " xl={3}>
			<RangeSlider category="itemPrice" handlePriceChange={handlePriceChange} />
			<SidebarFilter
				items={filteredBrands}
				title="Brand"
				category="brands"
				selectedItems={selectedBrands}
				handleCheckboxChange={handleCheckboxChange}
				handleInputChange={handleInputChange}
			/>
			<SidebarFilter
				items={filteredModels}
				title="Model"
				category="models"
				selectedItems={selectedModels}
				handleCheckboxChange={handleCheckboxChange}
				handleInputChange={handleInputChange}
			/>
			<SidebarFilter
				items={filteredColors}
				title="Color"
				category="colors"
				selectedItems={selectedColors}
				handleCheckboxChange={handleCheckboxChange}
				handleInputChange={handleInputChange}
			/>
		</Col>
	);
}

export default Sidebar;
