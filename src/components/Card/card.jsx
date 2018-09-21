import React,{Component} from 'react';
import { Card, Col, Row } from 'antd';
import CardForm from '../CardForm/cardForm';

class Cards extends Component{
	render(){
		return (
			 <Card
    title="查询要素输入"
    extra={<a href="#">More</a>}
    style={{ width: 400 }}
  >
 <CardForm/> 
    
  </Card>
			)
	}
}
export default Cards;
