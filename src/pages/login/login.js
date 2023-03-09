import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../../styles/colors'

function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/login-page/fatec-login.jpg')} style={styles.imageBackgound}>
                <View style={styles.viewLogo}>
                    <Image 
                        style={styles.logo}
                        resizeMode='contain'
                        source={require('../../../assets/icons/siga.png')}
                    />
                </View>

                <View style={styles.viewItens}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Usuário'
                        placeholderTextColor={colors.lightgrey}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Senha'
                        placeholderTextColor={colors.lightgrey}
                        secureTextEntry={true}
                        
                    />
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Menu')}
                    >
                        <View>
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonTransparent}>
                        <View>
                            <Text style={styles.buttonTextWhite}>
                                Esqueci minha senha
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewLogo: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewItens: {
        flex: 3,
        width: '100%',
        alignItems: 'center',
        marginTop: 30
    },
    imageBackgound: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        color: colors.white,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: '60%',
        fontFamily: 'Roboto-Medium',
    },
    button: {
        backgroundColor: colors.white,
        width: '60%',
        height: 35,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center'
    },
    buttonTransparent: {
        width: '60%',
        height: 35,
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        fontSize: 20,
        color: colors.stronggrey
    },
    buttonTextWhite: {
        textAlign: 'center',
        fontFamily: 'Roboto-Light',
        fontSize: 17,
        color: colors.white
    },
    logo: {
        height: '40%',
        marginTop: 40
    }
})

export default LoginScreen;