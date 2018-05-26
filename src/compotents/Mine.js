import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions } from 'react-native';
import SearchInput from 'teaset/components/SearchInput/SearchInput';
import SegmentedBar from 'teaset/components/SegmentedBar/SegmentedBar';
import ImagesList from './ImagesList';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class Mine extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'popular',
            tabList:['新品','推荐','今日特价','源头直播','高货','手镯','巧雕摆件','原石','彩宝','和田玉','挂件','串珠','链饰'],
            listData:[
                {key: 'a0',title:'20g 羊脂玉 籽料',price:'1.9万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
                {key: 'a0',title:'20g 羊脂玉 籽料',price:'2.9万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
                {key: 'a0',title:'20g 羊脂玉 籽料',price:'3.9万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
                {key: 'a0',title:'20g 羊脂玉 籽料',price:'4.9万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
                {key: 'a0',title:'20g 羊脂玉 籽料',price:'5.9万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
                {key: 'a0',title:'20g 羊脂玉 籽料',price:'6.9万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
                {key: 'a0',title:'20g 羊脂玉 籽料',price:'4.9万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'}
                ]
        };
    }
    segmentChanged(e){
        //console.log(e);
        //Toast.message('Toast message index '+e);
        let tmp = [
            {key: 'a'+e,title:'20g 羊脂玉 籽料',price:e===0?'免费':1.9*e+'万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
            {key: 'a'+e,title:'20g 羊脂玉 籽料',price:e===0?'免费':1.9*e+'万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
            {key: 'a'+e,title:'20g 羊脂玉 籽料',price:e===0?'免费':1.9*e+'万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
            {key: 'a'+e,title:'20g 羊脂玉 籽料',price:e===0?'免费':1.9*e+'万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
            {key: 'a'+e,title:'20g 羊脂玉 籽料',price:e===0?'免费':1.9*e+'万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
            {key: 'a'+e,title:'20g 羊脂玉 籽料',price:e===0?'免费':1.9*e+'万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'},
            {key: 'a'+e,title:'20g 羊脂玉 籽料',price:e===0?'免费':1.9*e+'万',latestTime:20180000,collectionCount:0,imgUrl:'https://www.xhello.cn/static/images/test.jpg'}
        ];
        this.setState({listData:tmp});
    }
    _keyExtractor = (item, index) => item.id;
    _getListItem = ({item}) => (<ImagesList data={item} />);
    render(){
        return  (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <SearchInput style={styles.input} placeholder='搜点什么呢'/>
                </View>
                <View style={styles.classifyBox}>
                    <SegmentedBar onChange={(e)=>this.segmentChanged(e)} style={styles.SegmentedBar} justifyItem='scrollable'>
                        {this.state.tabList.map(function (item) {
                            return (<SegmentedBar.Item style={styles.SegmentedBarItem} title={item} />)
                        })}
                    </SegmentedBar>
                </View>
                <View style={styles.listBox}>
                    <FlatList
                        getItemLayout={(data, index) => ( {length: 30, offset: 30 * index, index} )}
                        keyExtractor={this._keyExtractor}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.listData}
                        renderItem={this._getListItem}
                    />
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        textAlign:'center',
        height:height
    },
    inputBox:{
        width:width-20,
        marginTop:10
    },
    input:{
        width:400,
        marginLeft:40
    },
    classifyBox:{
        height:40,
        margin:10
    },
    classify:{
        width:400
    },
    listBox:{
        flex:1
    },
    list:{
        width:400
    },
    SegmentedBar:{
        height:40
    },
    SegmentedBarItem:{
        width:80
    },
    text:{
        height:100
    }
});
