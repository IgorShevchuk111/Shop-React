import RangeSlider from './RangeSlider/RangeSlider';
import SidebarFilter from './SidebarFilter/SidebarFilter';
import { getBrand, getModels, getColors, Data } from '../../../services/data';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export interface FilterData {
	brands: { [key: string]: boolean };
	models: { [key: string]: boolean };
	colors: { [key: string]: boolean };
}

function Sidebar() {
	const { category } = useParams<string>();

	const [filterData, setFilterData] = useState<FilterData>({
		brands: {},
		models: {},
		colors: {},
	});

	useEffect(() => {
		if (category) {
			const updateFilterItems = (
				filterData: string[],
				type: keyof FilterData
			) => {
				const updatedFilterItems = filterData.reduce(
					(acc, item) => ({ ...acc, [item]: false }),
					{ All: false }
				);
				setFilterData(prevState => ({
					...prevState,
					[type]: updatedFilterItems,
				}));
			};

			updateFilterItems(getBrand(category as keyof Data), 'brands');
			updateFilterItems(getModels(category as keyof Data), 'models');
			updateFilterItems(getColors(category as keyof Data), 'colors');
		}
	}, [category]);

	const handleCheckboxChange = (label: string, category: keyof FilterData) => {
		setFilterData(prevData => ({
			...prevData,
			[category]: {
				...prevData[category],
				[label]: !prevData[category][label],
			},
		}));
	};

	return (
		<>
			<div>
				<RangeSlider />
				{Object.entries(filterData).map(([category, items]) => (
					<SidebarFilter
						key={category}
						label={category.charAt(0).toUpperCase() + category.slice(1)}
						items={items}
						handleCheckboxChange={handleCheckboxChange}
						category={category as keyof FilterData}
					/>
				))}
			</div>
		</>
	);
}

export default Sidebar;
