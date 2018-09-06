import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import CMHeader from './components/Header/cmHeader';
import Tab from './components/Tab/tab';
import Perform from './components/Perform/perform';
import SmallTab from './components/SmallTab/smallTab';
// import Layout from './components/Layout/layout'
import Menu from './components/Menu/menu.js';
import Drawer from './components/Drawer/drawer';
import { Select } from 'antd';
import Route from './router/';
import store from './store/store'
import initDate from './store/action';
import { Layout } from 'antd';
import { message} from 'antd';
import './index.css';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header/header.jsx';
const {  Footer, Sider, Content } = Layout;
const Option = Select.Option
const customHistory = createBrowserHistory();
store.subscribe(() => {
    console.log(arguments);
})
const render = (Route) => {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={customHistory}>
                <div>
                    <Layout>
                        <Sider>
                        <Menu history={customHistory}/>
                        </Sider>
                        <Layout>
                            <Header>
                            
                            </Header>
                            <Content><Route/></Content>
                            {/* <Footer>Footer</Footer> */}
                        </Layout>
                    </Layout>
                    <Drawer/>
                    
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

let ws = new WebSocket("ws://127.0.0.1:8000");

// 建立 web socket 连接成功触发事件
ws.onopen = function () {
    // 使用 send() 方法发送数据
    ws.send("发送数据");
    message.success('ws建立连接成功')
};
// 接收服务端数据时触发事件
ws.onmessage = function (evt) {
    var received_msg = evt.data;
    received_msg = JSON.parse(received_msg);
    store.dispatch({type:'initTable',productType:'spot',data:received_msg['SPOTA']})
    // alert("数据已接收...");
};

// 断开 web socket 连接成功触发事件
// ws.onclose = function () {
//   alert("webnet已关闭...");
// };