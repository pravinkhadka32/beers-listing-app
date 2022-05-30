import { Provider } from 'react-redux';
import BeersList from '../home/beers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <BeersList />
        </Provider>
    );
}

export default App;
