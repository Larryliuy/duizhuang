import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import Market from '../compotents/Market';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

export default class MarketBox extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'popular'
        };
    }
    render(){
        return  (
            <View style={styles.container}>
                <Market ></Market>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        textAlign:'center',
        height:height
    },
});
