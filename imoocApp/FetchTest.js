import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import NavigationBar from './js/common/Navigator';
import HttpUtils from './HttpUtils';
export default class FetchTest extends Component{
    constructor(props){
        super(props);
        this.state={
            result:''
        }
    }
    onLoad(url){
        HttpUtils.get(url)
            .then(res=>{
                this.setState({
                    result:JSON.stringify(res)
                })
            })
            .catch(error=>{
                this.setState({
                    result:JSON.stringify(error)
                });
            })
    }
    onSubmit(url,data){
        HttpUtils.post(url,data)
            .then(res=>{
                this.setState({
                    result:JSON.stringify(res)
                })
            })
            .catch(error=>{
                this.setState({
                    result:JSON.stringify(error)
                });
            })
    }
    render(){
        return(
            <View style={styles.container} >
                <NavigationBar
                    title="FetchTest"
                />
                <Text
                    style={styles.tips}
                    onPress={()=>this.onLoad('http://rap.taobao.org/mockjsdata/11793/test')}
                >获取数据</Text>


                <Text
                    style={[styles.tips,styles.marginTop]}
                    onPress={()=>this.onSubmit('http://rap.taobao.org/mockjsdata/11793/submit',{
                        userName:'小明',
                        password:'123456'
                    })}
                >提交数据</Text>
                <Text>{this.state.result}</Text>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
    },
    tips:{
        fontSize:18,
        color:'red'
    },
    marginTop:{
        marginTop:30
    }
})
