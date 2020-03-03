import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class menuDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            infUser: {
                menuSecond: [
                    "Accesorios", "Avisos"
                ]
            }
        }
    }

    alertAccess = () => {
        Alert.alert(
            'ALERTA!',
            'Estamos trabajando en esto',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('Cancel Pressed'),
                },
            ]
        )
    }

    componentDidMount(){
        this.props.items.map((item) => {
            if(item.key == 'profile'){
                let infUsr = item.routes[0].params.user
                this.setState({
                    user: infUsr
                })
            }
        })
    }

    render() {
        return (
            <View style={styles.content}>
                <ScrollView>
                    <View>
                        <Icon name="user-circle" color="green" size={30} />
                        <View>

                            <Text>{this.state.user.name}</Text>
                            <Text style={{ color: 'silver', fontSize: 12 }}>{this.state.user.email}</Text>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <TouchableOpacity style={{ fontSize: 15, marginTop: 14, marginBottom: 14 }} onPress={() => Actions.homes()}>
                            <Text style={styles.text}>Para usted</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ fontSize: 15, marginTop: 14, marginBottom: 14 }} onPress={() => Actions.profile({ title: "hlaa veeer" })}>
                            <Text style={styles.text}>Eventos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ fontSize: 15, marginTop: 14, marginBottom: 14 }} onPress={this.alertAccess}>
                            <Text style={styles.text}>Logros</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ fontSize: 15, marginTop: 14, marginBottom: 14 }} onPress={this.alertAccess}>
                            <Text style={styles.text}> Resumen Semanal</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    {this.state.infUser.menuSecond.map((item, i) => (
                        <Text key={i} style={styles.textFo}>{item}</Text>
                    ))}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        paddingLeft: 40,
        width: '90%',
    },
    box: {
        marginTop: 50,
        marginBottom: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'silver'
    },
    textBox: {
        color: 'white',
        paddingLeft: 18,
        marginTop: 18,
        textAlign: 'left',
        textTransform: 'lowercase',
    },
    footer: {
        height: 50,
        width: '100%',
    },
    textFo: {
        fontSize: 15,
        color: 'black',
        marginLeft: 7,
        marginEnd: 5,
        marginVertical: 10
    }
})