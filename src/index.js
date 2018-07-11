import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import CMHeader from './components/Header/cmHeader';
import Tab from './components/Tab/tab';
import Perform from './components/Perform/perform';
import SmallTab from './components/SmallTab/smallTab';
import Route from './router/';
import store from './store/store';
import './index.css';
// const state = store.getState();
// console.log(state);
// console.log(store);
store.subscribe(()=>{
    console.log(arguments);
})
const render = (Route) => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <div className="main">
                    <CMHeader />
                    <Tab></Tab>
                    <Route />
                    <div className="right">
                    <Perform />
                    <SmallTab />
                    </div>
                </div>
            </HashRouter>
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
