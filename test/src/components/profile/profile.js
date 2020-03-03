import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import IconFontT from 'react-native-vector-icons/Ionicons';


const img = require('../../assets/img/esta.png')

export default class profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stateActivity: true,
            stet: false,
            walk: false,
            run: false,
            inforRes: "Camino 421.231 pasos en total mientras usaba samsung health"
        }
    }

    render() {
        return (
            <View >
                <View style={styles.imgs}>
                    <Image source={img} style={{ width: '100%', height: '100%' }} />
                    <View style={{paddingLeft: 15, marginTop: 15}}>
                        <Text>
                            {this.props.user.name}
                        </Text>
                        <Text style={{borderWidth:1, borderColor:'#e5e5e5', borderRadius: 100, backgroundColor: '#e5e5e5', width: '46%', paddingLeft: 10, marginTop: 5}}>
                        {this.props.user.email}
                        </Text>
                        <Text style={{color: 'silver', fontSize: 11, marginTop: 10}}>
                           {this.state.inforRes}
                        </Text>
                        <Text style={{paddingTop: 10}}>
                            Información del usuario
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.checked}>
                            <Text style={styles.textBox}>
                                Hombre
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.checked}>
                            <Text style={styles.textBox}>
                                27 abril de 1995
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.checked}>
                            <Text style={styles.textBox}>
                                173.0cm
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.checked}>
                            <Text style={styles.textBox}>
                                75.04g
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{marginLeft: 15}}>
                            Nivel de actividad
                        </Text>
                        <View style={{width: '62%'}}>
                            <IconFontT name="ios-information-circle-outline" color="black" size={20} style={{ alignItems: 'flex-end', alignContent: 'flex-end', textAlign: 'right' }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={[styles.circle, this.state.stateActivity ? styles.green : styles.silver]} id="male" onPress={() => this.setState({ stateActivity: !this.state.stateActivity })}>
                            <IconFont name="male" color="#fff" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.circle, this.state.stet ? styles.green : styles.silver]} id="pray" onPress={() => this.setState({ stet: !this.state.stet })}>
                            <IconFont name="pray" color="#fff" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.circle, this.state.walk ? styles.green : styles.silver]} id="walk" onPress={() => this.setState({ walk: !this.state.walk })}>
                            <IconFont name="walking" color="#fff" size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.circle, this.state.run ? styles.green : styles.silver]} id="run" onPress={() => this.setState({ run: !this.state.run })}>
                            <IconFont name="running" color="#fff" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imgs: {
        height: 180
    },
    checked: {
        borderWidth: 2,
        height: 40,
        borderColor: '#e5e5e5',
        borderRadius: 100,
        width: '45%',
        marginHorizontal: 10,
        marginVertical: 15
    },
    textBox: {
        textAlign: 'center',
        paddingTop: 7
    },
    circle: {
        borderWidth: 1,
        borderRadius: 100,
        width: '14%',
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    green: {
        backgroundColor: 'green',
        borderColor: 'green',
    },
    silver: {
        borderColor: '#e5e5e5',
        backgroundColor: '#e5e5e5',
    }


})