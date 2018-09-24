import React, {Component} from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Image,
    Alert,
    Text,
    DeviceEventEmitter
} from 'react-native';
import CheckBox from 'react-native-check-box';
import NavigationBar from '../../common/Navigator';
import ViewUtils from '../../util/ViewUtils';
import ArrayUtils from '../../util/ArrayUtils'
import LanguageDao, {FLAG_LANGUAGE} from '../../expand/dao/LanguageDao'

export default class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: []
        };
        this.changeValues = [];
    }
    componentDidMount(){
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.loadData();
    }
    loadData(){
        this.languageDao.fetch().then((data)=>{
            this.setState({
                dataArray:data
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
    onSave(){
        if (this.changeValues.length === 0) {
            this.props.navigator.pop();
            return;
        }
        this.languageDao.save(this.state.dataArray);
        this.props.navigator.pop();
    }
    renderView(){
        if (!this.state.dataArray || this.state.dataArray.length === 0)return;
        var len = this.state.dataArray.length;
        var views = [];
        for (let i = 0,l = len-2;i<l;i+=2){
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.state.dataArray[i])}
                        {this.renderCheckBox(this.state.dataArray[i + 1])}
                    </View>
                    <View style={styles.line}/>
                </View>
            )
        }
        views.push(
            <View key={len - 1}>
                <View style={styles.item}>
                    {len % 2 === 0 ? this.renderCheckBox(this.state.dataArray[len - 2]) : null}
                    {this.renderCheckBox(this.state.dataArray[len - 1])}
                </View>
            </View>
        )
        return views;
    }
    onClick(data){
        data.checked = !data.checked;
        ArrayUtils.updateArray(this.changeValues, data)
    }
    renderCheckBox(data){
        let leftText = data.name;
        let isChecked = this.isRemoveKey ? false : data.checked;
        return (
            <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={()=>this.onClick(data)}
                isChecked={isChecked}
                leftText={leftText}
                checkedImage={<Image source={require('./img/ic_check_box.png')}
                                    style={{tintColor:'#6495ed'}}/>}
                unCheckedImage={<Image source={require('./img/ic_check_box_outline_blank.png')}
                                       style={{tintColor:'#6495ed'}}/>}
            />
        )

    }
    onBack(){
        if(this.changeValues.length>0){ // 修改后提示保存
            Alert.alert(
                '提示',
                '要保存修改吗?',
                [
                    {
                        text:'否',onPress:()=>{this.props.navigator.pop()}
                    },
                    {
                        text:'是',onPress:()=>{this.onSave()}
                    }
                ]

            )
        }
        else{
            this.props.navigator.pop()
        }
    }

    render() {
        let rightButton = <TouchableOpacity
            onPress={()=>{this.onSave()}}
        >
            <View style={{margin:10}}>
                <Text style={styles.title}>保存</Text>
            </View>
        </TouchableOpacity>

        return (
            <View style={styles.container}>
                <NavigationBar
                    title="自定义标签"
                    style={{backgroundColor:'#6495ed'}}
                    leftButton={ViewUtils.getLeftButton(()=>this.onBack())}
                    rightButton={rightButton}
                />
                <ScrollView>{this.renderView()}</ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2'
    },
    item: {
        flexDirection: 'row',
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
})