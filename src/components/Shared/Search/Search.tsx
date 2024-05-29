import { CiSearch } from 'react-icons/ci';
import './Search.scss';
import { SearchProps } from '../../../types';

function Search({ placeholder, handleInputChange, title }: SearchProps) {
	return (
		<>
			{title && <h6>{title}</h6>}
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
		</>
	);
}

export default Search;
