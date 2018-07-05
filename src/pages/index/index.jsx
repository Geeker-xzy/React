import React, { Component } from 'react';
import CMHeader from '../../components/Header/cmHeader';
import Tab from '../../components/Tab/tab';
import Perform from '../../components/Perform/perform';
import SmallTab from '../../components/SmallTab/smallTab';
// import { Link } from 'react-router-dom';
// import rice form '../price/price';
// import PS from '../price/price.js'
import './index.css';
import Axios from 'axios';
class Login extends Component {
    render() {
        return (
            <div className="main">
                {/* <span><Link to="price">登陆</Link></span> */}
                    <CMHeader />
                    <Perform />
                    <Tab />
                    <SmallTab />
            </div>
        )
    }
    componentDidMount(){
        Axios()

    }
}
export default Login;