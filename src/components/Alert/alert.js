import React, {
    Component
} from 'react';
import Result from 'ant-design-pro/lib/Result';
import AvatarList from 'ant-design-pro/lib/AvatarList'
import 'ant-design-pro/dist/ant-design-pro.css';


import {
    Alert
} from 'antd';
class Ale extends Component {
    render() {
        return ( <
            div >
            <
            Alert message = "Success Text"
            type = "success" / >
            <
            Result type = "success" / >
            <
            AvatarList size = "mini" >
            <
            AvatarList.Item tips = "Jake"
            src = "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png" / >
            <
            AvatarList.Item tips = "Andy"
            src = "https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png" / >
            <
            AvatarList.Item tips = "Niko"
            src = "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" / >
            <
            /AvatarList> <
            /div>
        )
    }
}
export default Ale;