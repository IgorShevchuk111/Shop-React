import { FiCheck } from 'react-icons/fi';
import { SidebarItemProps } from '../../../types';

function SidebarItem({
	category,
	selectedItems,
	handleCheckboxChange,
	value,
}: SidebarItemProps) {
	return (
		<li>
			<label className="item-input mt-3">
				<input
					type="checkbox"
					checked={selectedItems.includes(value)}
					onChange={() => handleCheckboxChange(value, category)}
				/>
				<span className="item-checkmark"></span>
				<FiCheck className="item-checked" />
				{value}
			</label>
		</li>
	);
}

export default SidebarItem;
