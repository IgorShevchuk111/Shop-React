import Search from '../../../Shared/Search/Search';
import './SidebarFilter.css';
import SidebarFilterItem from '../SidebarFilterItem/SidebarFilterItem';
import { FilterData } from '../Sidebar';
interface FilterSectionProps {
	label: string;
	items: FilteredItems;
	handleCheckboxChange: (label: string, category: keyof FilterData) => void;
	category: keyof FilterData;
}
interface FilteredItems {
	[key: string]: boolean;
}

function SidebarFilter({
	label,
	items,
	handleCheckboxChange,
	category,
}: FilterSectionProps) {
	return (
		<div className="item-container">
			<h6>{label}</h6>
			<Search placeholder={`Search for ${label}`} />
			<ul className="list-items">
				{Object.entries(items).map(([label, checked]) => (
					<SidebarFilterItem
						key={label}
						label={label}
						category={category}
						checked={checked}
						handleCheckboxChange={handleCheckboxChange}
					/>
				))}
			</ul>
		</div>
	);
}

export default SidebarFilter;
