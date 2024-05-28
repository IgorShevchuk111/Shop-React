import { FaChevronLeft } from 'react-icons/fa';
import { ArrowProps } from '../../../../types';

const GalleryCarouselLeftArrow = ({
	onClick,
	currentSlide,
	slideCount,
}: ArrowProps) => {
	const isDisabled = slideCount && currentSlide === slideCount - 1;
	return (
		<div
			className={`custom-arrow custom-left ${isDisabled ? 'disabled' : ''}`}
			onClick={onClick}
		>
			<FaChevronLeft />
		</div>
	);
};
export default GalleryCarouselLeftArrow;
