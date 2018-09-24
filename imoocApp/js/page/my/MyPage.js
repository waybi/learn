import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    CustomBadgeView,
    View
} from 'react-native';

import NavigationBar from '../../common/Navigator';
import CustomKeyPage from './CustomKeyPage';
export default class MyPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title="我的"
                />
                <Text
                    onPress={()=>{
                        this.props.navigator.push({
                            component:CustomKeyPage,
                            params:{...this.props}
                        });
                    }}
                >自定义标签</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
