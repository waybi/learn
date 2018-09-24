import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import NavigationBar from './js/common/Navigator';
import Toast,{DURATION} from 'react-native-easy-toast';
const KEY='text';
export default class AsyncStorageTest extends Component{
    constructor(props){
        super(props);
    }
    onSave(){
        AsyncStorage.setItem(KEY,this.text,(error)=>{
            if(!error){
                this.toast.show('保存成功',DURATION.LENGTH_LONG);
            }
            else{
                this.toast.show('保存失败',DURATION.LENGTH_LONG);
            }
        })
    }
    onFetch(){
        AsyncStorage.getItem(KEY,(error,result)=>{
            if(!error){
                this.toast.show('取出的内容为:'+result);
            }
            else{
                this.toast.show('提取失败');
            }
        })
    }
    onRemove(){
        AsyncStorage.removeItem(KEY,(error)=>{
            if(!error){
                this.toast.show('移除成功')
            }else{
                this.toast.show('移除失败')
            }
        })
    }
    render(){
        return(
            <View style={styles.container} >
                <NavigationBar
                    title="AsyncStorage的使用"
                    style={{
                        backgroundColor:'#2196F3'
                    }}
                />
                <TextInput
                    style={{height:40,borderWidth:1,margin:10}}
                    onChangeText={text=>this.text=text}
                />
                <View style={{flexDirection:'row',margin:10}}>
                    <Text
                        style={styles.text}
                        onPress={()=>this.onSave()}
                    >保存</Text>
                    <Text
                        style={styles.text}
                        onPress={()=>this.onRemove()}
                    >移除</Text>
                    <Text
                        style={styles.text}
                        onPress={()=>this.onFetch()}
                    >取出</Text>
                </View>
                <Toast ref={toast=>this.toast=toast}/>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
    },
    text:{
        fontSize:16,
        marginRight:15
    }
})
