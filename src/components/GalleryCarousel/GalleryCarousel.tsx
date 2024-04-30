import classes from './GalleryCarousel.module.scss';
import '../../index.scss';
import Slider from 'react-slick';
import { GalleryCarouselProps, ArrowProps, Product } from '../../types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from '../ProductCard/ProductCard';

const GalleryCarousel = ({ smartPhones, laptops }: GalleryCarouselProps) => {
	const LeftArrow = ({ onClick, currentSlide }: ArrowProps) => (
		<div
			className={`
	        ${classes['custom-arrow']}
	        ${classes['custom-left']}
	        ${currentSlide === 0 ? classes.disabled : ''}
            `}
			onClick={onClick}
		>
			<FaChevronLeft />
		</div>
	);
	const RightArrow = ({ onClick, currentSlide, slideCount }: ArrowProps) => (
		<div
			className={`
	        ${classes['custom-arrow']}
	        ${classes['custom-right']}
	         ${slideCount && currentSlide === slideCount - 1 ? classes.disabled : ''}
	         `}
			onClick={onClick}
		>
			<FaChevronRight />
		</div>
	);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: <LeftArrow />,
		nextArrow: <RightArrow />,
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
			<Slider {...settings} className={`${classes['container-slider']} `}>
				{smartPhones &&
					smartPhones.map((smartPhoneModel: Product) => (
						<div
							key={smartPhoneModel.id}
							className={`${classes['slick-slide']}`}
						>
							<ProductCard model={smartPhoneModel} items={'smartPhones'} />
						</div>
					))}
				{laptops &&
					laptops.map((laptopModel: Product) => (
						<div key={laptopModel.id} className={`${classes['slick-slide']}`}>
							<ProductCard model={laptopModel} items={'laptops'} />
						</div>
					))}
			</Slider>
		</>
	);
};

export default GalleryCarousel;
