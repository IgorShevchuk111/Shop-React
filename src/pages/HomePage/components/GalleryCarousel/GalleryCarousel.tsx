import './GalleryCarousel.scss';
import Slider from 'react-slick';
import { GalleryCarouselProps } from '../../../../types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../../../../components/Shared/ProductCard/ProductCard';
import GalleryCarouselRightArrow from './GalleryCarouselRightArrow';
import GalleryCarouselLeftArrow from './GalleryCarouselLeftArrow';

const GalleryCarousel = ({ models, category }: GalleryCarouselProps) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: <GalleryCarouselRightArrow />,
		nextArrow: <GalleryCarouselLeftArrow />,
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
			<Slider {...settings} className="container-slider ">
				{models.map(model => (
					<ProductCard key={model.id} item={model} category={category} />
				))}
			</Slider>
		</>
	);
};

export default GalleryCarousel;
