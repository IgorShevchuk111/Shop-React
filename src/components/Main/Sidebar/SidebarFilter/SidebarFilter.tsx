import Search from '../../../Shared/Search/Search';
import './SidebarFilter.css';
import SidebarFilterItem from '../SidebarFilterItem/SidebarFilterItem';
import { FilterData } from '../Sidebar';
interface FilterSectionProps {
	title: string;
	filteredItems: FilteredItems;
	handleCheckboxChange: (item: string, type: keyof FilterData) => void;
	type: keyof FilterData;
}
interface FilteredItems {
	[key: string]: boolean;
}

function SidebarFilter({
	title,
	filteredItems,
	handleCheckboxChange,
	type,
}: FilterSectionProps) {
	return (
		<div className="item-container">
			<h6>{title}</h6>
			<Search placeholder={`Search for ${title}`} />
			<ul className="list-items">
				{Object.entries(filteredItems).map(([item, checked]) => (
					<SidebarFilterItem
						key={item}
						label={item}
						checked={checked}
						handleCheckboxChange={() => handleCheckboxChange(item, type)}
					/>
				))}
			</ul>
		</div>
	);
}

export default SidebarFilter;
