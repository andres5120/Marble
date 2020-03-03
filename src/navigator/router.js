import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { StyleSheet, Platform, Linking } from 'react-native';
//import * as RNFS from 'react-native-fs';
//navigation
import Menu from '../utils/menu';
import Home from '../components/home/home';
import Profile from '../components/profile/profile';

class RouterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            infUser: {
                name: "David Pulgarin",
                email: "dpv101@utp.edu.co",
                menuSecond: [
                    "Accesorios", "Avisos"
                ]
            }
        }
    }
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar >
                    <Scene
                        key='main'
                        drawer={true}
                        open={false}
                        contentComponent={Menu}
                        navigationBarStyle={styles.nav}
                        rightTitle={null}
                        drawerIcon={(
                            <Icon name="menu" size={30} color="#717171" />
                        )}
                    >
                        <Scene key="homes" component={Home} title="SAMSUNG Health" initial={true} drawerPosition={"right"} />
                        <Scene key="profile" component={Profile} title="SAMSUNG Health" drawerPosition={"right"}  user={this.state.infUser}/>
                    </Scene>


                </Scene>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#e3e3e3'
    }
})


export default RouterComponent;