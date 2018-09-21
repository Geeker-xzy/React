import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';
import Spot from "../pages/spot";
// import Spotv from "../pages/spotv";
// import SpotSafe from "../pages/spotSafe";
// import Fwdv from "../pages/fwdv";
// import Swap from "../pages/swap";
// import Swrt from "../pages/swrt";
// import Ir from "../pages/ir";
// import Bstk from "../pages/bstk";
// import Bstks from "../pages/bstks";
// import Vol from "../pages/vol";
// import Option  from "../pages/option"
import Quotation from '../pages/quotation'
// import Option from "../pages/option";
// 鉴于 异步加载出现空白延迟，不采用异步加载
const Spotv = asyncComponent(() => import("../pages/spotv"));
const SpotSafe = asyncComponent(() => import("../pages/spotSafe"));
const Fwdv = asyncComponent(() => import("../pages/fwdv"));
const Swap = asyncComponent(() => import("../pages/swap"));
const Swrt = asyncComponent(() => import("../pages/swrt"));
const Ir = asyncComponent(() => import("../pages/ir"));
const Bstk = asyncComponent(() => import("../pages/bstk"));
const Bstks = asyncComponent(() => import("../pages/bstks"));
const Vol = asyncComponent(() => import("../pages/vol"));
const Option = asyncComponent(() => import("../pages/option"));

// const helpcenter = asyncComponent(() => import("@/pages/helpcenter/helpcenter"));
// const production = asyncComponent(() => import("@/pages/production/production"));
// const balance = asyncComponent(() => import("@/pages/balance/balance"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component {
  render() {
    return (
      <Switch>
        <Route path="/spot" exact component={Spot} />
        <Route path="/spotv" exact component={Spotv} />
        <Route path="/spotSafe" exact component={SpotSafe} />
        <Route path="/fwdv" exact component={Fwdv} />
        <Route path="/swap" component={Swap} />
        <Route path="/swrt" exact component={Swrt} />
        <Route path="/ir" component={Ir} />
        <Route path="/bstk" exact component={Bstk} />
        <Route path="/bstks" component={Bstks} />
        <Route path="/vol" component={Vol} />
        <Route path="/option" component={Option} />
         <Route path="/quotation" component={Quotation} />
        <Redirect to="/spot" />
      </Switch>
    )
  }
}
