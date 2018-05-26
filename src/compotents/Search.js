import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, TouchableHighlight } from 'react-native';
import SearchInput from 'teaset/components/SearchInput/SearchInput';
import SegmentedBar from 'teaset/components/SegmentedBar/SegmentedBar';
import ImagesList from './ImagesList';
// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'popular',
            historyData:['原石','彩宝','和田玉','挂件','串珠','链饰'],
            hotData:['新品','推荐','今日特价','佛','观音','手镯'],
        };
    }
    static navigationOptions = {header: null};
    _keyExtractor = (item, index) => item.id;
    _getHistoryItem = ({item}) => (<Text style={styles.historyItem}>{item}</Text>);
    _getHotItem = ({item}) => (<Text style={styles.hotItem}>{item}</Text>);
    _clearHistory(){
        console.log('clearHistory');
    }
    render(){
        const { goBack } = this.props.navigation;
        return  (
            <View style={styles.container}>
                <View style={styles.inputBox}>
                    <SearchInput style={styles.input} placeholder='搜点什么呢'/>
                    <TouchableHighlight onPress={()=>goBack()}><Text style={styles.cancel}>取消</Text></TouchableHighlight>
                </View>
                <View style={styles.hotBox}>
                    <Text>热门搜素</Text>
                    <FlatList
                        style={styles.hotList}
                        getItemLayout={(data, index) => ( {length: 30, offset: 30 * index, index} )}
                        keyExtractor={this._keyExtractor}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.hotData}
                        renderItem={this._getHotItem}
                    />
                </View>
                <View style={styles.historyBox}>
                    <Text style={styles.historyTitle}>历史搜素</Text>
                    <FlatList
                        style={styles.historyList}
                        getItemLayout={(data, index) => ( {length: 30, offset: 30 * index, index} )}
                        keyExtractor={this._keyExtractor}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.historyData}
                        renderItem={this._getHistoryItem}
                    />
                </View>
                <View style={styles.clearHistpry}>
                    <TouchableHighlight onPress={()=>this._clearHistory()}><Text>清除历史记录</Text></TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        textAlign:'center',
        height:height,
        flex:1,
        justifyContent:'flex-start'
    },
    inputBox:{
        flex:0,
        justifyContent:'space-between',
        flexDirection:'row',
        width:width-20,
        height:50,
        marginTop:10,
        paddingLeft:20,
    },
    cancel:{
        color:'green',
        height:30,
        lineHeight:30
    },
    input:{
        width:400,
        height:30,
    },
    hotBox:{
        paddingTop:10,
        paddingLeft:10
    },
    hotList:{
        flex:0,
        justifyContent:'flex-start',
        flexWrap:'wrap',
        paddingTop:10,
        paddingLeft:10
    },
    hotItem:{
        width:80,
        paddingLeft:5
    },
    historyBox:{
        margin:10
    },
    historyList:{
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10
    },
    historyTitle:{
        borderBottomColor:'#ddd',
        borderBottomWidth :1,
        height:50,
        lineHeight:50,
    },
    historyItem:{
        borderBottomColor:'#ddd',
        borderBottomWidth :1,
        height:40,
        lineHeight:40,
    },
    clearHistpry:{
        height:40,
        textAlign:'center',
        alignSelf:'center'
    }
});
