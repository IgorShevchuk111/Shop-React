import { CiSearch } from 'react-icons/ci';
import './Search.scss';
import { SearchProps } from '../../../types';

function Search({ placeholder, handleInputChange }: SearchProps) {
	return (
		<div className="position-relative">
			<input
				onChange={e => {
					handleInputChange && handleInputChange(e.target.value);
				}}
				className="inputStyle"
				type="text"
				placeholder={placeholder}
			/>
			<CiSearch className="svgStyle" />
		</div>
	);
}

export default Search;
