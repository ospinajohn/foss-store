import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL = `http://localhost:4000`

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<ChakraProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ChakraProvider>
	</Provider>
);
