import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    Navigator,
    CustomBadgeView,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import PopularPage  from  './PopularPage';
import AsyncStorageTest  from  '../../AsyncStorageTest';
import MyPage from './my/MyPage';
export default class imoocApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="最热"
                    selectedTitleStyle={{color: '#2196f3'}}
                    renderIcon={() => <Image style={[styles.image]} source={require('../../res/images/ic_polular.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#2196f3'}]}
                                                     source={require('../../res/images/ic_polular.png')}/>}
                    badgeText="1"
                    onPress={() => this.setState({selectedTab: 'home'})}>

                    <PopularPage/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'trending'}
                    title="趋势"
                    selectedTitleStyle={{color: '#2196f3'}}
                    renderIcon={() => <Image style={styles.image}
                                             source={require('../../res/images/ic_trending.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#2196f3'}]}
                                                     source={require('../../res/images/ic_trending.png')}/>}
                    onPress={() => this.setState({selectedTab: 'trending'})}>

                    <AsyncStorageTest/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shoucang'}
                    title="收藏"
                    selectedTitleStyle={{color: '#2196f3'}}
                    renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_favorite.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#2196f3'}]}
                                                     source={require('../../res/images/ic_favorite.png')}/>}
                    onPress={() => this.setState({selectedTab: 'shoucang'})}>

                    <View style={styles.page1}>
                        <Text>page1</Text>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="我的"
                    selectedTitleStyle={{color: '#2196f3'}}
                    renderIcon={() => <Image style={styles.image}
                                             source={require('../../res/images/ic_my.png')}/>}
                    renderSelectedIcon={() => <Image style={[styles.image, {tintColor: '#2196f3'}]}
                                                     source={require('../../res/images/ic_my.png')}/>}
                    onPress={() => this.setState({selectedTab: 'my'})}>

                    <MyPage {...this.props}></MyPage>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor: 'red'
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    image: {
        width: 22,
        height: 22
    }
});
