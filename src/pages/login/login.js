import React, { Component } from 'react';
import CMHeader from '../../components/Header/cmHeader.js';
import {Link } from 'react-router-dom';
// import rice form '../price/price';
// import PS from '../price/price.js'
class Login extends Component {
    render() {
        return (
            <div>
                <span><Link to="price">登陆</Link></span>
                {/* <CMHeader /> */}
            </div>
        )
    }
}
export default Login;