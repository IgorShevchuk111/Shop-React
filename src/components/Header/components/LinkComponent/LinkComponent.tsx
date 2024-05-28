import { Link } from 'react-router-dom';
import './LinkComponent.scss';

const LinkComponent = ({ ...props }) => {
	return (
		<>
			<Link
				className={props.className}
				to={props.to}
				onClick={() => {
					props.handleClose && props.handleClose();
				}}
			>
				{props.text}
			</Link>
		</>
	);
};

export default LinkComponent;
