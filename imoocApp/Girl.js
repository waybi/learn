import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import NavigationBar from './js/common/Navigator';

export default class Girl extends Component{
    constructor(props){
        super(props);
        this.state={
            word:''
        }
    }
    renderButton(image){
        return (
            <TouchableOpacity onPress={()=>{
                this.props.navigator.pop()
            }}>
                <Image style={{width:22,height:22,margin:5}} source={image} />
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={styles.container} >
                <NavigationBar
                    title="Girl"
                    style={{
                        backgroundColor:'#ee6363'
                    }}
                    leftButton={
                        this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))
                    }
                    rightButton={
                        this.renderButton(require('./res/images/ic_star_navbar.png'))
                    }
                />
                <Text style={styles.text}
                    onPress={()=>{
                        this.props.onCallBack('一个臭屁')
                        this.props.navigator.pop();
                    }}>
                    回礼
                </Text>
                <Text>
                    我收到猥琐男送来的{this.props.word}
                </Text>
                <Text style={styles.text}>
                    this is Girl
                </Text>
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
