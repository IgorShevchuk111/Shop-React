import { data } from '../../../services/data';
import GalleryCarousel from './GalleryCarousel/GalleryCarousel';

function Gallery() {
	return (
		<>
			<section>
				<h3 className="my-4 text-center">Most wanted smartphones</h3>
				<GalleryCarousel
					models={Object.values(data.smartPhones)}
					category="smartPhones"
				/>
			</section>

			<section>
				<h3 className="my-4 text-center">Most popular laptops</h3>
				<GalleryCarousel
					models={Object.values(data.laptops)}
					category="laptops"
				/>
			</section>
		</>
	);
}

export default Gallery;
