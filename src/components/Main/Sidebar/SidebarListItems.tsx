import { SidebarListItemsProps } from '../../../types';
import SidebarItem from './SidebarItem';

function SidebarListItems({
	handleCheckboxChange,
	selectedItems,
	items,
	category,
}: SidebarListItemsProps) {
	return (
		<ul className="list-items">
			{items.map((value: string, index) => (
				<SidebarItem
					key={`${value}-${index}`}
					category={category}
					selectedItems={selectedItems}
					handleCheckboxChange={handleCheckboxChange}
					value={value}
				/>
			))}
		</ul>
	);
}

export default SidebarListItems;
