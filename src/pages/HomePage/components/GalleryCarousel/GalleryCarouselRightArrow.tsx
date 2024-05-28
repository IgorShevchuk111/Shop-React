import { FaChevronRight } from 'react-icons/fa';
import { ArrowProps } from '../../../../types';

const GalleryCarouselRightArrow = ({ onClick, currentSlide }: ArrowProps) => {
	const isDisabled = currentSlide === 0;
	return (
		<div
			className={`custom-arrow custom-right ${isDisabled ? 'disabled' : ''}`}
			onClick={onClick}
		>
			<FaChevronRight />
		</div>
	);
};
export default GalleryCarouselRightArrow;
