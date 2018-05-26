import React, { Component } from 'react';
import { ToastAndroid, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Market from './Market';
import Classify from './Classify';
import Living from './Living';
import Mine from './Mine';


export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab:'popular', //默认选中的选项卡
        };
    }
    static navigationOptions = {header: null};
    _onPress(item){
        const { navigate } = this.props.navigation;
        navigate('MarketItemDetail', { title: item.title });
    }
    _onPressSearch(){
        const { navigate, goBack } = this.props.navigation;
        navigate('Search',{cancel:goBack});
    }
    render(){
        return  (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab==='popular'}
                    title="市场"
                    selectedTitleStyle={{color:'#63B8FF'}}
                    renderIcon={()=><Image style={styles.icon} source={require('../images/g1.png')} />}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../images/g1.png')}/>}
                    onPress={()=>this.setState({selectedTab:'popular'})}
                >
                    <Market onPressHandle={this._onPress.bind(this)} onPressSearch={this._onPressSearch.bind(this)}></Market>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab==='trending'}
                    title="分类"
                    selectedTitleStyle={{color:'#63B8FF'}}
                    renderIcon={()=><Image style={styles.icon} source={require('../images/g1.png')} />}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../images/g1.png')}/>}
                    onPress={()=>this.setState({selectedTab:'trending'})}
                >
                    <Classify></Classify>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab==='favorite'}
                    title="直播"
                    selectedTitleStyle={{color:'#63B8FF'}}
                    renderIcon={()=><Image style={styles.icon} source={require('../images/g1.png')} />}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../images/g1.png')}/>}
                    onPress={()=>this.setState({selectedTab:'favorite'})}
                >
                    <Living/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab==='my'}
                    title="我的"
                    selectedTitleStyle={{color:'#63B8FF'}}
                    renderIcon={()=><Image style={styles.icon} source={require('../images/g1.png')} />}
                    renderSelectedIcon={() =>
                        <Image style={[styles.icon,{tintColor:'#63B8FF'}]} source={require('../images/g1.png')}/>}
                    onPress={()=>this.setState({selectedTab:'my'})}
                >
                    <Mine/>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    icon:{
        width:26,
        height:26
    }
});
