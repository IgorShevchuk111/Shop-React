import classes from './Footer.module.scss';

function Footer() {
	return (
		<div className={classes['footer-container']}>
			&copy; {new Date().getFullYear()} Online
		</div>
	);
}

export default Footer;
