import { useEffect, useState } from 'react';

import classes from './HomePage.module.scss';
import '../../index.scss';
import { data } from '../../services/data';
import GalleryCarousel from '../../components/GalleryCarousel/GalleryCarousel';
import { imageUrls } from '../../services/data';

function HomePage() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	// Interval Banner
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
		}, 3000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<div>
			{/* ad */}
			<section className={`${classes.ad}`}>
				Trade tech you don't want for cash you do.
			</section>
			{/* Banner */}
			<section>
				<img
					width="100%"
					alt="Trade-In"
					src={imageUrls[currentImageIndex]}
				></img>
			</section>
			{/* Gallery smartphones */}
			<section className="my-5">
				<h5 className="text-center">Most wanted smartphones</h5>
				<GalleryCarousel smartPhones={data.smartPhones} />
			</section>
			{/* Gallery laptops */}
			<section className="my-5">
				<h5 className="text-center">Most popular laptops</h5>
				<GalleryCarousel laptops={data.laptops} />
			</section>
		</div>
	);
}

export default HomePage;
