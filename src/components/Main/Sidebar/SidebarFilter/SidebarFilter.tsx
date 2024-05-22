import { SidebarFilterProps } from '../../../../types';
import Search from '../../../Shared/Search/Search';
import './SidebarFilter.css';

import { FiCheck } from 'react-icons/fi';

function SidebarFilter({
	title,
	items,
	filters,
	handleCheckboxChange,
	category,
}: SidebarFilterProps) {
	return (
		<div className="item-container">
			<h6>{title}</h6>
			<Search placeholder={`Search for ${title}`} />
			<ul className="list-items">
				{items.map((value, index) => (
					<li key={`${value}-${index}`}>
						<label className="item-input mt-3">
							<input
								type="checkbox"
								checked={filters[category].includes(value)}
								onChange={() => handleCheckboxChange(value, category)}
							/>
							<span className="item-checkmark"></span>
							<FiCheck className="item-checked" />
							{value}
						</label>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SidebarFilter;
