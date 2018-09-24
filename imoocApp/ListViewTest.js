import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ListView,
    Image,
    RefreshControl,
    TouchableOpacity
} from 'react-native';

import NavigationBar from './js/common/Navigator';
import Toast, {DURATION} from 'react-native-easy-toast'

const data = {
    result: [
        {
            email: "o.davis@perez.co.uk",
            fullName: "张三张三张三"
        },
        {
            email: "i.miller@harris.net",
            fullName: "张三张三张三"
        },
        {
            email: "y.gonzalez@lopez.io",
            fullName: "张三张三张三张三张三"
        },
        {
            email: "i.taylor@johnson.gov",
            fullName: "张三张三张三张三张三"
        },
        {
            email: "c.davis@rodriguez.gov",
            fullName: "张三张三张三张三张三"
        },
        {
            email: "u.garcia@wilson.org",
            fullName: "张三张三"
        },
        {
            email: "j.young@robinson.com",
            fullName: "张三张三张三"
        },
        {
            email: "b.martin@hernandez.com",
            fullName: "张三张三张三张三"
        },
        {
            email: "e.martin@garcia.org",
            fullName: "张三张三张三"
        },
        {
            email: "u.gonzalez@harris.co.uk",
            fullName: "张三张三张三张三张三"
        },
        {
            email: "m.martinez@lopez.io",
            fullName: "张三张三张三张三张三"
        },
        {
            email: "r.smith@moore.edu",
            fullName: "张三张三张三"
        },
        {
            email: "p.harris@smith.edu",
            fullName: "张三张三张三张三"
        },
        {
            email: "s.johnson@white.co.uk",
            fullName: "张三张三张三张三"
        },
        {
            email: "i.garcia@walker.net",
            fullName: "张三张三张三"
        },
        {
            email: "t.martinez@taylor.net",
            fullName: "张三张三"
        },
        {
            email: "q.jackson@clark.org",
            fullName: "张三张三张三"
        },
        {
            email: "i.hall@johnson.gov",
            fullName: "张三张三张三"
        },
        {
            email: "t.jones@robinson.gov",
            fullName: "张三张三张三"
        },
        {
            email: "m.gonzalez@hall.edu",
            fullName: "李四李四李四"
        }
    ]
}
export default class ListViewTest extends Component{
    constructor(props){
        super(props);
        const  ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state = {
            isLoading:true,
            dataSource:ds.cloneWithRows(data.result)
        };
        this.onLoad();
    }
    renderRow(item){
        return <View style={styles.row}>
            <TouchableOpacity
                onPress={()=>{
                    this.toast.show('你单击了'+item.fullName,DURATION.LENGTH_SHORT);
                }}>
                    <Text style={styles.tips}>{item.fullName}</Text>
                    <Text style={styles.tips}>{item.email}</Text>
            </TouchableOpacity>
        </View>
    }
    renderable(sectionID, rowID, adjacentRowHighlighted){
        return <View key={rowID} style={styles.line}></View>
    }
    renderFooter(){
        return <Image style={{width:'100%',height:100}} source={{url:'https://b-ssl.duitang.com/uploads/item/201308/03/20130803011854_SAJZn.thumb.700_0.gif'}}/>
    }
    onLoad(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
            });
        },2000);
    }
    render(){
        return(
            <View style={styles.container} >
                <NavigationBar
                    title="ListView"
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item)=>this.renderRow(item)}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this.renderable(sectionID, rowID, adjacentRowHighlighted)}
                    renderFooter={()=>this.renderFooter()}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isLoading}
                            onRefresh={()=>{this.onLoad()}}
                        />
                    }
                />
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
    tips:{
        fontSize:18
    },
    row:{
        height:50
    },
    line:{
        height:1,
        backgroundColor:'#333'
    }
})
