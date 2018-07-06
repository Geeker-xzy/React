import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import CMHeader from './components/Header/cmHeader';
import Tab from './components/Tab/tab';
import Perform from './components/Perform/perform';
import SmallTab from './components/SmallTab/smallTab';
import Route from './router/';
import './index.css';
const render = (Route) => {
    ReactDOM.render(
        <HashRouter>
            <div className="main">
                <CMHeader />
                <Tab></Tab>
                <Route />
                <Perform />
                <SmallTab />
            </div>
        </HashRouter>
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
