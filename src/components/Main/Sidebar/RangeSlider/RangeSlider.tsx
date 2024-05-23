import { useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';

import './RangeSlider.scss';
import { MultiRangeSliderType } from '../../../../types';

function RangeSlider() {
	const [minValue, set_minValue] = useState<number>(25);
	const [maxValue, set_maxValue] = useState<number>(75);

	const handleInput = (e: MultiRangeSliderType) => {
		set_minValue(e.minValue);
		set_maxValue(e.maxValue);
	};

	return (
		<>
			<h6>Price</h6>
			<MultiRangeSlider
				min={0}
				max={100}
				step={5}
				minValue={minValue}
				maxValue={maxValue}
				barInnerColor="rgb(19, 209, 187)"
				onInput={e => {
					handleInput(e);
				}}
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
