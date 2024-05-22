import { useEffect, useState } from 'react';

import './HomePage.scss';
import '../../index.scss';
import { data } from '../../services/data';
import GalleryCarousel from '../../components/Shared/GalleryCarousel/GalleryCarousel';
import { imageUrls } from '../../services/data';

function HomePage() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	//  ------- Interval Banner ---------
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
		}, 3000);
		return () => clearInterval(intervalId);
	}, []);
	return (
		<div>
			{/* --------- ad --------- */}
			<section className="ad">
				Trade tech you don't want for cash you do.
			</section>
			{/* --------- Banner --------*/}
			<section>
				<img
					width="100%"
					alt="Trade-In"
					src={imageUrls[currentImageIndex]}
				></img>
			</section>
			{/* -------- Gallery smartphones --------*/}
			<section>
				<h3 className="my-4 text-center">Most wanted smartphones</h3>
				<GalleryCarousel models={Object.values(data.smartPhones)} />
			</section>
			{/* -------- Gallery laptops ---------*/}
			<section>
				<h3 className="my-4 text-center">Most popular laptops</h3>
				<GalleryCarousel models={Object.values(data.laptops)} />
			</section>
		</div>
	);
}

export default HomePage;
