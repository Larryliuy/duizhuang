import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');


export default class ImagesList extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'popular'
        };
    }
    render(){
        return  (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.data.key+' '+this.props.data.title+' '+this.props.data.price}</Text>
                <Image
                    style={styles.image}
                    source={{uri:this.props.data.imgUrl}}
                />
                <Text style={styles.footer}>{this.props.data.latestTime}</Text>
            </View>
        )
    }
    componentDidMount(){
       console.log('111');
    }


}

const styles=StyleSheet.create({
    container:{
        textAlign:'center',
        width:width-10,
        height:200,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        paddingBottom:5
    },
    image:{
       flex:1,
       width:width
    },
    title:{
        marginBottom:5
    },
    footer:{
        marginTop:5
    }
});
