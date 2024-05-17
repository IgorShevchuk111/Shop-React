import { FiCheck } from 'react-icons/fi';
import './SidebarFilterItem.css';
import { FilterData } from '../Sidebar';
interface FilterItemProps {
	label: string;
	checked: boolean;
	category: keyof FilterData;
	handleCheckboxChange: (label: string, category: keyof FilterData) => void;
}

function SidebarFilterItem({
	label,
	checked,
	category,
	handleCheckboxChange,
}: FilterItemProps) {
	return (
		<li>
			<label className="item-input mt-3">
				<input
					type="checkbox"
					value={label}
					checked={checked}
					onChange={() =>
						handleCheckboxChange(label, category as keyof FilterData)
					}
				></input>
				<span className="item-checkmark"></span>
				<FiCheck className="item-checked" />
				{label}
			</label>
		</li>
	);
}

export default SidebarFilterItem;
