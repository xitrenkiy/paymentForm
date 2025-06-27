import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux';
import App from './components/app/App';
import store from './store/store';

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>,
)
