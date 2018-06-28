import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Route from './router/';
// import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
const render = Component => {
    ReactDOM.render(
        //绑定redux、热加载
        // <AppContainer>
            <Component />
        // </AppContainer>,
        ,document.getElementById('root'),
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
