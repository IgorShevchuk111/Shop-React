import { SidebarFilterProps } from '../../../../types';
import Search from '../../../Shared/Search/Search';
import SidebarListItems from '../SidebarListItems';
import './SidebarFilter.css';

function SidebarFilter({
	title,
	items,
	selectedItems,
	handleCheckboxChange,
	handleInputChange,
	category,
}: SidebarFilterProps) {
	return (
		<div className="item-container">
			<Search
				placeholder={`Search for ${title}`}
				handleInputChange={handleInputChange}
				title={title}
			/>
			<SidebarListItems
				handleCheckboxChange={handleCheckboxChange}
				selectedItems={selectedItems}
				items={items}
				category={category}
			/>
		</div>
	);
}

export default SidebarFilter;
