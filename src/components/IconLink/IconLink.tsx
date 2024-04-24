import { Link } from 'react-router-dom';
import classes from './IconLink.module.scss';

interface IconLinkProps {
	icon: React.ElementType;
	to: string;
	className: string;
}

const IconLink = ({ to, icon: Icon, className }: IconLinkProps) => {
	return (
		<>
			<Link className={classes[className]} to={to}>
				<Icon />
			</Link>
		</>
	);
};

export default IconLink;
