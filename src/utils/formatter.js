

 export default function formatType(type){

    switch(type){
      case 'Spot':
       type = '即期'
       break;
      case 'SpotSafe':
      type = '即期监管'
       break;
       case 'Spotv':
       type = '即期带量'
       break;
      case 'Swap':
      type = '掉期带量'
       break;
       case 'Swrt':
       type = '掉期率'
       break;
      case 'Ir':
      type = '利率'
       break;
       case 'Bstk':
       type = '商品'
       break;
      case 'Bstks':
      type = '商品带量'
       break;
    }
    return type;
  }
