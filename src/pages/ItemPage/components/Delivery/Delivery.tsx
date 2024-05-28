import './Delivery.scss';

function Delivery() {
	return (
		<>
			<div className="d-flex my-3">
				<div className="delivery-container me-3">
					<svg
						aria-hidden="true"
						fill="currentColor"
						height="24"
						viewBox="0 0 48 48"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M7 11a1 1 0 00-1 1v4a1 1 0 002 0v-3h21.631L42 26.24V34h-2.106a5 5 0 00-5.605-3.95A5 5 0 0030.123 34h-9.229a5 5 0 00-4.79-3.998 5 5 0 00-.815.049A5 5 0 0011.123 34H8v-6a1 1 0 00-2 0v7a1 1 0 001 1h4.129A5 5 0 0016 40a5 5 0 004.897-4h9.232A5 5 0 0035 40a5 5 0 004.897-4H43a1 1 0 001-1v-9.15a1 1 0 00-.27-.68L30.8 11.32a1 1 0 00-.73-.32H7zm-2 8a1 1 0 000 2h4a1 1 0 000-2H5zm0 4a1 1 0 000 2h8a1 1 0 000-2H5zm11 9a3 3 0 013 3 3 3 0 11-3-3zm19 0a3 3 0 013 3 3 3 0 11-3-3z"></path>
					</svg>
				</div>
				<div>
					<div>Free delivery by 16 Feb - 19 Feb</div>
					<div style={{ fontSize: '12px', lineHeight: '1', fontWeight: '100' }}>
						Express delivery by 15 Feb-16 Feb from £5.00
					</div>
				</div>
			</div>
		</>
	);
}

export default Delivery;
