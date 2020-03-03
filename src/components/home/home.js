import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Card from './cards/cards';
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFont from 'react-native-vector-icons/FontAwesome5';
import IconFontT from 'react-native-vector-icons/FontAwesome';
import IconCons from 'react-native-vector-icons/Ionicons';
import ProgressCircle from 'react-native-progress-circle';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "28 min",
            calEat: "88.244 cal",
            sleep: {
                num: "750",
                type: "Cal",
                timer: "0.31",
                typeSec: "k/s"
            }
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: '#e3e3e3', flex: 1 }}>
                <ScrollView>
                    <Card>
                        <View style={{alignItems:'center'}}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'silver' }}>Resumen</Text>
                            <ProgressCircle
                                percent={20}
                                radius={60}
                                borderWidth={7}
                                color="green"
                                shadowColor="#e5e5e5"
                                bgColor="#fff"
                            >
                                <Text style={{ fontSize: 18 }}>395</Text>
                                <Text style={{ fontSize: 11, color: 'silver' }}>/7000 pasos</Text>
                            </ProgressCircle>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="av-timer" color="green" size={30} />
                            <Text style={{ marginTop: 5, marginLeft: 5, color: '#c0c0c0', }}>
                                Tiempo de actividad
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 20 }}>4 <Text style={{ fontSize: 12, color: 'silver' }} >{this.state.time}</Text> </Text>
                            <Text style={{ fontSize: 20, marginLeft: 90 }}>
                                {this.state.sleep.num}
                                <Text style={{ fontSize: 12, color: 'silver' }} >
                                    {this.state.sleep.type}
                                </Text>
                            </Text>
                            <Text style={{ fontSize: 20, marginLeft: 20 }}>
                                {this.state.sleep.timer}
                                <Text style={{ fontSize: 12, color: 'silver' }} >
                                    {this.state.sleep.typeSec}
                                </Text>
                            </Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <IconFont name="running" color="green" size={20} />
                            <Text style={styles.titles}>
                                Ejercicio
                            </Text>
                            <Text style={{ marginTop: 2, marginLeft: 45 }}>
                                Entrenamientos recientes
                            </Text>
                        </View>
                        <View style={styles.card3}>
                            <View style={{ width: '24.9%', alignItems: 'center', paddingTop: 3 }}>
                                <IconFont name="running" color="black" size={20} />
                            </View>
                            <View style={styles.iconsCard}>
                                <IconFont name="walking" color="black" size={20} />
                            </View>
                            <View style={styles.iconsCard}>
                                <IconCons name="md-bicycle" color="black" size={20} />
                            </View>
                            <View style={{ width: '24.9%', alignItems: 'center', paddingTop: 3 }}>
                                <IconFont name="ellipsis-h" color="black" size={20} />
                            </View>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <IconFontT name="cutlery" color="#82dbde" size={20} />
                            <Text style={{ marginTop: 5, marginLeft: 5, color: '#c0c0c0', }}>
                                Comida
                            </Text>
                            <TouchableOpacity style={styles.add}>
                                <Text style={{ textAlign: 'center' }}>
                                    Añadir
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 20 }}>0
                                <Text style={{ fontSize: 12, color: 'silver' }} > {this.state.calEat}</Text>
                            </Text>
                        </View>
                    </Card>
                    <Card>
                        <View style={{ flexDirection: 'row' }}>
                            <IconCons name="md-moon" color="blue" size={25} />
                            <Text style={{ marginTop: 5, marginLeft: 5, color: '#c0c0c0', }}>
                                Estabas dormido?
                            </Text>
                            <TouchableOpacity style={styles.checked}>
                                <IconFontT name="check" size={30} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>

                            <Text style={{ fontSize: 20, marginLeft: 90 }}>
                                800
                                <Text style={{ fontSize: 12, color: 'silver' }} >
                                    Cal
                                </Text>
                            </Text>
                            <Text style={{ fontSize: 20, marginLeft: 20 }}>
                                8
                                <Text style={{ fontSize: 12, color: 'silver' }} >
                                    k/h
                                </Text>
                            </Text>
                        </View>
                    </Card>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card3: {
        flexDirection: 'row',
        backgroundColor: '#e5e5e5',
        marginTop: 20,
        borderColor: '#e5e5e5',
        borderWidth: 1,
        borderRadius: 100,
        height: 30,
        width: '100%'
    },
    iconsCard: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#c2c2c2',
        width: '24.8%',
        alignItems: 'center',
        paddingTop: 3
    },
    titles: {
        marginTop: 2,
        marginLeft: 10,
        color: '#c0c0c0',
    },
    add: {
        marginLeft: 100,
        borderWidth: 2,
        borderColor: '#e5e5e5',
        borderRadius: 100,
        width: '40%',
    },
    checked: {
        marginLeft: 100,
        borderWidth: 2,
        borderColor: '#e5e5e5',
        borderRadius: 100,
    }
})
