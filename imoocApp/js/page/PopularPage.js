import React, {Component} from 'react';
import {
    Text,
    CustomBadgeView,
    View,
    StyleSheet,
    ListView,
    RefreshControl
} from 'react-native';

import DataRepository from '../expand/dao/DataRepository';
import RepositoryCell from '../common/RepositoryCell';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import LanguageDao, {FLAG_LANGUAGE} from '../expand/dao/LanguageDao'
import NavigationBar from '../common/Navigator';
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY = '&sort=stars';
export default class PopularPage extends Component{
    constructor(props){
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.state={
            languages:[]
        }
        this.loadLanguage();
    }
    loadLanguage(){
        this.languageDao.fetch().then((languages)=>{
            if(languages){
                this.setState({
                    languages:languages
                })
            }
        }).catch((error)=>{
            console.log(error);
        })
    }

    render(){
        let contents = this.state.languages.length>0?
            <ScrollableTabView
                tabBarBackgroundColor="#2196F3"
                tabBarInactiveTextColor="mintcream"
                tabBarActiveTextColor="white"
                alwaysBounceHorizontal={true}
                bounces={true}
                tabBarUnderlineStyle={{backgroundColor:'#eee',height:2}}
                renderTabBar={()=><ScrollableTabBar/>}
            >
                {this.state.languages.map((result,i,arr)=>{
                    let language = arr[i];
                    return language.checked?<PopularTab key={i} tabLabel={language.name} {...this.props} />:null;
                })}
            </ScrollableTabView>
            :null;
        return(
            <View style={styles.container}>
                <NavigationBar
                    title='最热'
                    style={{backgroundColor:'#2196F3'}}
                />
                {contents}
            </View>
        )
    }
}

class PopularTab extends Component{
    constructor(props){
        super(props);
        this.state={
            data:'',
            dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            isLoading:false
        }
        this.dataRepository = new DataRepository();
    }
    componentDidMount(){
        this.onLoad();
    }
    onLoad(){
        this.setState({
            isLoading:true
        })
        let url = URL+this.props.tabLabel+QUERY;
        this.dataRepository.fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(result.items),
                    isLoading:false
                })
            })
            .catch(error=>{
                this.setState({
                    data:JSON.stringify(error)
                })
            })
    }
    renderRow(data){
        return <RepositoryCell data={data}/>
    }
    render(){
        return(
            <View style={{flex:1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(data) => this.renderRow(data)}
                    refreshControl={
                        <RefreshControl
                            colors={['#2196f3']}
                            tintColor={'#2196f3'}
                            title={'拼命加载中...'}
                            titleColor={'#2196f3'}
                            refreshing={this.state.isLoading}
                            onRefresh={()=>this.onLoad()}
                        />
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    tips:{
        fontSize:20
    }
})