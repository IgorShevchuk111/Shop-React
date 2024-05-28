import Accordion from 'react-bootstrap/Accordion';
import './ReactBootstrapAccordion.scss';

function ReactBootstrapAccordion() {
	const items = [
		{ heading: 'Technical Specifications', content: 'Hello' },
		{ heading: ' Perks & benefits included', content: 'Hello' },
		{ heading: 'Frequently asked questions', content: 'Hello' },
	];
	return (
		<Accordion defaultActiveKey="0">
			{items.map((item, index) => (
				<Accordion.Item eventKey={item.heading} key={index}>
					<Accordion.Header>{item.heading}</Accordion.Header>
					<Accordion.Body>{item.content}</Accordion.Body>
				</Accordion.Item>
			))}
		</Accordion>
	);
}

export default ReactBootstrapAccordion;
