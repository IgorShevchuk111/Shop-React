import './Free30DayReturns.scss';

function Free30DayReturns() {
	return (
		<>
			<div className="d-flex my-3">
				<div className="Free30DayReturns-container me-3">
					<svg
						aria-hidden="true"
						fill="currentColor"
						height="24"
						viewBox="0 0 48 48"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M22 27.66a1 1 0 01-.71-.29L13.93 20a1 1 0 010-1.41 1 1 0 011.42 0L22 25.25l10.65-10.62a1 1 0 011.42 0 1 1 0 010 1.41L22.74 27.37a1 1 0 01-.74.29Z"></path>
						<path d="M24 44a.87.87 0 01-.35-.07C17.06 41.5 6 35.55 6 23V5a1 1 0 011-1h34a1 1 0 01.71.29A1 1 0 0142 5v18c0 9.23-6.44 16.86-17.66 20.94A1 1 0 0124 44ZM8 6v17c0 11.13 9.87 16.6 16 18.93C37.91 36.75 40 27.86 40 23V6Z"></path>
					</svg>
				</div>
				<div>
					<div>Free 30-day returns</div>
					<div style={{ fontSize: '12px', lineHeight: '1', fontWeight: '100' }}>
						12 months seller warranty
					</div>
				</div>
			</div>
		</>
	);
}

export default Free30DayReturns;
