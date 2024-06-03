import './ProtectionPolicy.scss';
function ProtectionPolicy() {
	return (
		<>
			<div className="small-text flex flex-center">
				<img
					className="padlock "
					src="https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/985eb7dec3309df6df7ba38b18f96be580fdd87b/img/Lock.svg"
					alt="padlock"
				/>
				Secure payment
			</div>
			<div className="small-text margin-top-20">
				<span data-test="legal-link">
					By confirming this order you accept our{' '}
					<a href="#">Terms of Use Agreement</a>
					<a href="#">Terms of Sale</a>, and our{' '}
					<a href="#">data protection policy</a>
				</span>
			</div>
		</>
	);
}

export default ProtectionPolicy;
