import { FiCheck } from 'react-icons/fi';
import './SidebarFilterItem.css';

interface FilterItemProps {
	item: string;
	checked: boolean;
	handleCheckboxChange: (item: string) => void;
}

function SidebarFilterItem({
	item,
	checked,
	handleCheckboxChange,
}: FilterItemProps) {
	return (
		<li>
			<label className="item-input mt-3">
				<input
					type="checkbox"
					value={item}
					checked={checked}
					onChange={() => handleCheckboxChange(item)}
				></input>
				<span className="item-checkmark"></span>
				<FiCheck className="item-checked" />
				{item}
			</label>
		</li>
	);
}

export default SidebarFilterItem;
