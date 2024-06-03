import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BasketProvider } from './Contexts/BasketContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BasketProvider>
		<App />
	</BasketProvider>
);
