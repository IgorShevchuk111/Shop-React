import { CiSearch } from 'react-icons/ci';
import classes from './Search.module.scss';

interface SearchProps {
	placeholder: string;
	svgStyle: string;
	inputStyle: string;
}

function Search({ placeholder, inputStyle, svgStyle }: SearchProps) {
	return (
		<div className="position-relative">
			<input
				className={classes[inputStyle]}
				type="text"
				placeholder={placeholder}
			/>
			<CiSearch className={classes[svgStyle]} />
		</div>
	);
}

export default Search;
