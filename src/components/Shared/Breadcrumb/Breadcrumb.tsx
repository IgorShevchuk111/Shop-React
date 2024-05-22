import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import './Breadcrumb.scss';

function Breadcrumb() {
	function capitalizeFirstLetter(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	const location = useLocation();
	const showHomeLink = location.pathname !== '/';
	let currentLink = '';
	const crumbs = (showHomeLink ? [''] : [])
		.concat(location.pathname.split('/').filter(crumb => crumb !== ''))
		.map((crumb, index, array) => {
			currentLink = array.slice(0, index + 1).join('/');
			return (
				<div className="crumb" key={currentLink}>
					{index === 0 && showHomeLink ? (
						<Link to="/">Home</Link>
					) : (
						<Link to={currentLink}>{capitalizeFirstLetter(crumb)}</Link>
					)}
				</div>
			);
		});
	return (
		<div style={{ maxWidth: '1120px', margin: '0 50px' }}>
			<div className="breadcrumbs">{crumbs}</div>
		</div>
	);
}

export default Breadcrumb;
