import { useParams } from 'react-router-dom';
import RangeSlider from './RangeSlider/RangeSlider';

import SidebarFilter from './SidebarFilter/SidebarFilter';
import { getBrand, getModels, getColors } from '../../../services/data';

function Sidebar() {
	const { category } = useParams();
	const brands = getBrand(category ? category : '');
	const models = getModels(category ? category : '');
	const colors = getColors(category ? category : '');

	return (
		<>
			<div>
				<RangeSlider />
				<SidebarFilter title="Brand" arrayData={brands} />
				<SidebarFilter title="Model" arrayData={models} />
				<SidebarFilter title="Color" arrayData={colors} />
			</div>
		</>
	);
}

export default Sidebar;
