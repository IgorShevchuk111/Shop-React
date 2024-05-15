import { useState } from 'react';

import Search from '../../../Shared/Search/Search';
import './SidebarFilter.css';
import SidebarFilterItem from '../SidebarFilterItem/SidebarFilterItem';

interface FilterSectionProps {
	title: string;
	arrayData: string[];
}
interface FilteredItems {
	[key: string]: boolean;
}

function SidebarFilter({ title, arrayData }: FilterSectionProps) {
	const [filteredItems, setFilteredItems] = useState<FilteredItems>(
		arrayData.reduce((acc, item) => ({ ...acc, [item]: false }), {
			All: false,
		})
	);
	const handleCheckboxChange = (item: string) => {
		setFilteredItems(prevState => ({
			...prevState,
			[item]: !prevState[item],
		}));
	};
	return (
		<div className="item-container">
			<h6>{title}</h6>
			<Search placeholder={`Search for ${title}`} />
			<ul className="list-items">
				{Object.entries(filteredItems).map(([item, checked]) => (
					<SidebarFilterItem
						key={item}
						item={item}
						checked={checked}
						handleCheckboxChange={handleCheckboxChange}
					/>
				))}
			</ul>
		</div>
	);
}

export default SidebarFilter;
