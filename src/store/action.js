import axios from 'axios';
import store from "./store";

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

export function initDate(data) {
    axios({ url: 'https://www.easy-mock.com/mock/5b3c97542eeb5562d4de71ff/example/query.action', method: "GET" }).then((data) => {
        store.dispatch({
            productType: data.productType,
            type: 'initTable',
            data: data.data.data.SPOTA.display
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

