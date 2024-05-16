import { FiCheck } from 'react-icons/fi';
import './SidebarFilterItem.css';
interface FilterItemProps {
	label: string;
	checked: boolean;
	handleCheckboxChange: () => void;
}

function SidebarFilterItem({
	label,
	checked,
	handleCheckboxChange,
}: FilterItemProps) {
	return (
		<li>
			<label className="item-input mt-3">
				<input
					type="checkbox"
					value={label}
					checked={checked}
					onChange={handleCheckboxChange}
				></input>
				<span className="item-checkmark"></span>
				<FiCheck className="item-checked" />
				{label}
			</label>
		</li>
	);
}

export default SidebarFilterItem;
