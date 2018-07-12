import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import CMHeader from './components/Header/cmHeader';
import Tab from './components/Tab/tab';
import Perform from './components/Perform/perform';
import SmallTab from './components/SmallTab/smallTab';
import Route from './router/';
import store from './store/store';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();
store.subscribe(()=>{
    console.log(arguments);
})
const render = (Route) => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={customHistory}>
                <div className="main">
                    <CMHeader />
                    <Tab history={customHistory}></Tab>
                    <Route />
                    <div className="right">
                    <Perform />
                    <SmallTab />
                    </div>
                </div>
            </Router>
        </Provider>
        , document.getElementById('root'),
    )
}

render(Route);

// Webpack Hot Module Replacement API
// if (module.hot) {
//     module.hot.accept('./router/', () => {
//         render(Route);
//     })
// }
registerServiceWorker();
