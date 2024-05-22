import { IoIosArrowDown } from 'react-icons/io';
import './SortByDropdown.scss';

function SortByDropdown() {
	return (
		<div className="sort-by-dropdown-container">
			<label className="label" htmlFor="sort">
				Sort by
			</label>
			<select id="sort" className="select">
				<option>Price: Low to High</option>
				<option>Price: High to Low</option>
			</select>
			<IoIosArrowDown className="arrow" />
		</div>
	);
}

export default SortByDropdown;
