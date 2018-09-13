import React, { Component } from 'react';
import PerformItem from '../Item/performItem'
class Perform extends Component {
    render() {
        return (

            <div className="perform">
            <PerformItem productType="即期"/>
            <PerformItem productType="即期带量"/>
            <PerformItem productType="即期监管"/>
            <PerformItem productType="远期带量"/>
            <PerformItem productType="掉期"/>
            <PerformItem productType="掉期率"/>
            <PerformItem productType="利率"/>
            <PerformItem productType="商品"/>
            <PerformItem productType="商品结算"/>
            <PerformItem productType="波动率"/>
            <PerformItem productType="期权费率"/>
            </div>
        )
    }
}
export default Perform;