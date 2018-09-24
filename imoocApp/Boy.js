import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import Girl from './Girl';
import NavigationBar from './js/common/Navigator';

export default class Boy extends Component{
    constructor(props){
        super(props);
        this.state={
            word:''
        }
    }
    renderButton(image){
        return (
            <TouchableOpacity>
                <Image style={{width:22,height:22}} source={image} />
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={styles.container} >
                <NavigationBar
                    title="Boy"
                    style={{
                        backgroundColor:'#ee6363'
                    }}
                />
                <Text style={styles.text}>
                    this is Boy
                </Text>
                <Text style={styles.text}
                    onPress={()=>{
                        this.props.navigator.push({
                            component:Girl,
                            params:{
                                word:'一支玫瑰',
                                onCallBack:(word)=>{
                                    this.setState({
                                        word:word
                                    });
                                }
                            }
                        });
                    }}>
                    送美女一支玫瑰
                </Text>
                <Text style={styles.text}>{this.state.word}</Text>
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
        fontSize:22
    }
})
