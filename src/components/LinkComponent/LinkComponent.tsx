import { Link } from 'react-router-dom';
import classes from './LinkComponent.module.scss';

interface LinkComponentProps {
	to: string;
	text: string;
	className: string;
	key?: string;
	handleClose?: () => void;
}
const LinkComponent = ({
	to,
	text,
	className,
	handleClose,
}: LinkComponentProps) => {
	return (
		<>
			<Link className={classes[className]} to={to} onClick={handleClose}>
				{text}
			</Link>
		</>
	);
};

export default LinkComponent;
