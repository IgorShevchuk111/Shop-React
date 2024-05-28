import { useEffect, useState } from 'react';
import { imageUrls } from '../../../services/data';

function Banner() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
		}, 3000);
		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<img width="100%" alt="Trade-In" src={imageUrls[currentImageIndex]}></img>
		</>
	);
}

export default Banner;
