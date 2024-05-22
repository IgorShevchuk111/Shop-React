import { CiSearch } from 'react-icons/ci';
import './Search.scss';

interface SearchProps {
	placeholder: string;
}

function Search({ placeholder }: SearchProps) {
	return (
		<div className="position-relative">
			<input className="inputStyle" type="text" placeholder={placeholder} />
			<CiSearch className="svgStyle" />
		</div>
	);
}

export default Search;
