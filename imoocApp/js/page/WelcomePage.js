import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Navigator
} from 'react-native';
import NavigationBar from '../common/Navigator';
import HomePage from './HomePage';

export default class WelcomePage extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.props.navigator.resetTo({
                component:HomePage
            })
        },2000);
    }
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }
    render(){
        return (
            <View>
                <NavigationBar
                    title="欢迎"
                />
                <Text style={styles.tips}>欢迎</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tips: {
        fontSize: 29
    }
})