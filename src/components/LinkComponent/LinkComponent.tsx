import { Link } from 'react-router-dom';
import classes from './LinkComponent.module.scss';

interface LinkComponentProps {
	to: string;
	text: string;
	className: string;
}
const LinkComponent = ({ to, text, className }: LinkComponentProps) => {
	return (
		<span>
			<Link className={classes[className]} to={to}>
				{text}
			</Link>
		</span>
	);
};

export default LinkComponent;
