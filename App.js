/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MarketItemDetail from './src/compotents/MarketItemDetail';
import Search from './src/compotents/Search';
import Home from "./src/compotents/Home";

const App = StackNavigator({
    Home: { screen: Home },
    MarketItemDetail: { screen: MarketItemDetail},
    Search: { screen: Search},
});

export default App;
