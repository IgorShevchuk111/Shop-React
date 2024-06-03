const paymentMethods = [
	{
		alt: 'Visa',
		src: 'https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/985eb7dec3309df6df7ba38b18f96be580fdd87b/img/payment/networks-v3/visa.svg',
	},
	{
		alt: 'Mastercard',
		src: 'https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/985eb7dec3309df6df7ba38b18f96be580fdd87b/img/payment/networks-v3/mastercard.svg',
	},
	{
		alt: 'PayPal',
		src: 'https://d1eh9yux7w8iql.cloudfront.net/front/public/statics/pastrami/985eb7dec3309df6df7ba38b18f96be580fdd87b/img/payment/methods-v3/paypal.svg',
	},
];

const PaymentMethods: React.FC = () => {
	return (
		<div className="payment-methods">
			{paymentMethods.map(method => (
				<img
					key={method.alt}
					style={{ height: '20px', width: '36px', margin: '0 5px' }}
					alt={method.alt}
					src={method.src}
				/>
			))}
		</div>
	);
};

export default PaymentMethods;
