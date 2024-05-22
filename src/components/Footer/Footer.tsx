import './Footer.scss';

function Footer() {
	return (
		<div className="footer-container">
			&copy; {new Date().getFullYear()} Online
		</div>
	);
}

export default Footer;
