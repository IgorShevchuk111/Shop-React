import { Link } from 'react-router-dom';
import classes from './LinkComponent.module.scss';
import { LinkComponentProps } from '../../types';

const LinkComponent = ({ ...props }: LinkComponentProps) => {
	return (
		<>
			<Link
				className={classes[props.className]}
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
