import './CardDetail.scss';

interface CardDetailProps {
	label: string;
	value: string | number;
}

const CardDetail: React.FC<CardDetailProps> = ({ label, value }) => (
	<div>
		<span>{label}:</span>
		<span className="ms-2">{value}</span>
	</div>
);

export default CardDetail;
