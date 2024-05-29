import { useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';

import './RangeSlider.scss';
import { MultiRangeSliderType, RangeSliderProps } from '../../../../types';

function RangeSlider({ handlePriceChange }: RangeSliderProps) {
	const [minValue, set_minValue] = useState<number>(250);
	const [maxValue, set_maxValue] = useState<number>(750);

	const handleInput = (e: MultiRangeSliderType) => {
		set_minValue(e.minValue);
		set_maxValue(e.maxValue);
		handlePriceChange(e.minValue, e.maxValue);
	};

	return (
		<>
			<h6>Price</h6>
			<MultiRangeSlider
				min={0}
				max={1000}
				step={5}
				minValue={minValue}
				maxValue={maxValue}
				barInnerColor="rgb(19, 209, 187)"
				onChange={handleInput}
				ruler={false}
			/>
			<div className="d-flex justify-content-between">
				<p>min: {minValue}</p>
				<p>max: {maxValue}</p>
			</div>
		</>
	);
}
export default RangeSlider;
