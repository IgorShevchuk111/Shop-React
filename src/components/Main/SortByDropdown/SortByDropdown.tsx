import { IoIosArrowDown } from 'react-icons/io';
import './SortByDropdown.scss';
import { SortByDropdownProps } from '../../../types';

function SortByDropdown({ handleSortBy }: SortByDropdownProps) {
	return (
		<div className="sort-by-dropdown-container">
			<label className="label" htmlFor="sort">
				Sort by
			</label>
			<select
				onChange={e => handleSortBy(e.target.value)}
				id="sort"
				className="select"
			>
				<option value="lowToHigh">Price: Low to High</option>
				<option value="highToLow">Price: High to Low</option>
			</select>
			<IoIosArrowDown className="arrow" />
		</div>
	);
}

export default SortByDropdown;
