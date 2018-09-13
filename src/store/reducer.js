
/**状态树形结构
 * spot 即期 spotv 即期带量 spotsafe 即期监管... swrt掉期联动..bstks 商品结算 option 期权
 * ...为省略部分（容易理解）
 */
let productType = ['spot', 'spotv', 'spotSafe', 'swap', 'swrt', 'ir', 'bstk', 'bstks', 'vol', 'option']
// 树形结构单元 item 包含 频率 次数 （3个） display 具体推送数据
let treeItem = {
    drawVisible: false,
    modalVisible: false,
    item: {
        waveRange: '1000',
        singleNumLimit: '1000',
        frequency: '1000'
    },
    display: [],
    loading: true
}
let defaultState = {};
// 不同产品相似的数据结构 *遍历
productType.forEach((item) => {
    defaultState[item] = treeItem;
})
defaultState.headerVisible = true;
let proData = (state = defaultState, action = {}) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case 'initTable':
            stateCopy[`${action.productType}`].display = action.data;
            stateCopy[`${action.productType}`].loading = false;
            // stateCopy[`${action.productType}`].item.frequency = action.frequency;
            // stateCopy[`${action.productType}`].item.waveRange = action.waveRange;
            // stateCopy[`${action.productType}`].item.singleNumLimit = action.singleNumLimit;
            break;
        case 'changeInput':
            stateCopy[`${action.productType}`].item[`${action.species}`] = action.data;
            break;
        case 'loading':
            stateCopy.loading = action.data;
            break;
        case 'changeDrawVisible':
            stateCopy.drawVisible = action.data;
            break;
        case 'changeModalVisible':
            stateCopy.modalVisible = action.data;
            break;
        case 'changeHeaderVisible':
            stateCopy.headerVisible = action.data;
            break;
        default:
            break;
    }
    return stateCopy;
}
export default proData;


