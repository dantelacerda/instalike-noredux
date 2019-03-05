import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import icon from '../../assets/imgs/icon.png'

class Header extends Component {

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Insta</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0, //Verifica em qual plataforma esta, se for IOS, considera a tela toda
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
    },
    rowContainer: {
        flexDirection: 'row', //Faz ficar lado a lado
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain' // Faz a imagem utilizar completamente o espaço
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28,
    }
})

export default Header