import React,{Component} from 'react';
import {
    Navigator
} from 'react-native';
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';
function setup() {
    class Root extends Component{
        renderScene(route,navigator){
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
        }
        render(){
            return <Navigator
                initialRoute={{component:HomePage}}
                renderScene={(route,navigator)=>this.renderScene(route,navigator)}
            />
        }
    }

    return <Root/>
}

module.exports = setup;