import { Link } from 'react-router-dom';
import './IconLink.scss';

interface IconLinkProps {
	icon: React.ElementType;
	to: string;
	className: string;
}

const IconLink = ({ to, icon: Icon, className }: IconLinkProps) => {
	return (
		<>
			<Link className={className} to={to}>
				<Icon />
			</Link>
		</>
	);
};

export default IconLink;
