/**
 * Created by CAOBIN on 2016/12/27.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from "react-native";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as Actions from "./action/AppAction";

class HomeComponent extends Component{
    constructor(props){
        super(props);
    }

    handleOnClick(){
      const {actions}=this.props;
      actions.ping()
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>
                    isPinging:{this.props.isPinging}
                </Text>
                <TouchableHighlight
                    underlayColor="yellow"
                    onPress={this.handleOnClick.bind(this)}>
                    <Text>Start PING</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    text1:{
        fontSize:20,
    },
    text2:{
        fontSize:16
    }

});


function mapStateToProps(state) {
    return {
        isPinging: state.isPinging+""
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);