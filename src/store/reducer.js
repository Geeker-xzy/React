
/**状态树形结构
 * spot 即期 spotv 即期带量 spotsafe 即期监管... swrt掉期联动..bstks 商品结算 option 期权
 * ...为省略部分（容易理解）
 */
let productType = ['spot', 'spotv', 'spotSafe', 'swap', 'swrt', 'ir', 'bstk', 'bstks', 'vol', 'option']
// 树形结构单元 item 包含 频率 次数 （3个） display 具体推送数据
let treeItem = {
    item: {
        waveRange: '',
        singleNumLimit: ''
    },
    display: []
}
let defaultState = {};
// 不同产品相似的数据结构 *遍历
productType.forEach((item) => {
    defaultState[item] = treeItem;
})
defaultState.loading = true;
let proData = (state = defaultState, action={}) => {
    let stateCopy = {...state};
    switch (action.type) {
        case 'initTable':
        stateCopy.display = action.data;
        stateCopy.loading = false;
            // state[`productType`].item = action.data;
            break;
        case 'refresh':
        stateCopy[`productType`].display = action.data;
            break;
        case 'loading':
        stateCopy.loading = action.data;
            break;
        default:
            break;
    }
    return stateCopy;
}
export default proData;


