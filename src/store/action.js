import axios from 'axios';
import store from "./store";
let hostKey = 'https://www.easy-mock.com/mock/5b3c97542eeb5562d4de71ff/';
export function initFormAction(data) {
    return {
        productType: data.productType,
        type: 'initForm',
        data: data.data
    }
}
export function initDisplayAction(data) {
    return {
        productType: data.productType,
        type: 'initForm',
        data: data.data
    }
}
// example/query.action
export function initDate(obj) {
    axios({ url: `${hostKey}${obj.url}`, method: "GET" }).then((data) => {
        store.dispatch({
            productType: obj.productType,
            type: 'initTable',
            data: data.data.data.SPOTA.display,
            frequency:data.data.data.SPOTA.frequency,
            waveRange: data.data.data.SPOTA.waveRange,
            singleNumLimit: data.data.data.SPOTA.singleNumLimit
        });
    })
}
export function loading(data) {
    // console.log(data);
    return {
        type: 'loading',
        data: data.data
    }
}

