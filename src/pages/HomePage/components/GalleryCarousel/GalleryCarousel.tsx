import './GalleryCarousel.scss';
import Slider from 'react-slick';
import { ArrowProps, GalleryCarouselProps } from '../../../../types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from '../../../../components/Shared/ProductCard/ProductCard';

const GalleryCarousel = ({ models, category }: GalleryCarouselProps) => {
	const LeftArrow = ({ onClick, currentSlide, slideCount }: ArrowProps) => {
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
	const RightArrow = ({ onClick, currentSlide }: ArrowProps) => {
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
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: <RightArrow />,
		nextArrow: <LeftArrow />,
		responsive: [
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
					infinite: true,
					dots: false,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
					infinite: true,
					dots: false,
				},
			},
		],
	};

	return (
		<>
			<Slider {...settings} className="container-slider">
				{models.map(model => (
					<div key={model.id} className="slick-slide">
						<ProductCard item={model} category={category} />
					</div>
				))}
			</Slider>
		</>
	);
};

export default GalleryCarousel;
