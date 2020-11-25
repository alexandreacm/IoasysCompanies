import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

import styles from './styles';
import { signInRequest } from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';


const {
    container,
    inputField,
    buttonLogin,
    textButtonLogin,
    viewButton } = styles;

function SignInPage() {
    const [email, setEmail] = useState('testeapple@ioasys.com.br');
    const [password, setPassword] = useState('12341234');
    const { navigate } = useNavigation();

    const dispatch = useDispatch();
    const { loading, signed, errorSign } = useSelector((state) => state.auth);
    const state = useSelector((state) => state.auth);


    async function onHandleLogin() {
        try {

            if (email.length === 0 || password.length === 0) {
                Alert.alert('É necessário informar o seu e-mail e senha.');
                return;
            }

            dispatch(signInRequest(email, password));
   
            if (errorSign != ``) {
                Alert.alert(errorSign);
            }

            if (signed) {
                navigate('Home');
            } else {
                navigate('SignIn');
            }

        } catch (error) {
            Alert.alert(errorSign);
        }

    }

    if (loading) {
        return <Loading textLoading="Aguarde, realizando o seu login..." />
    } else {
        return (
            <View style={container}>
                <Image source={require('../../assets/logo_ioasys.png')}
                    resizeMode="contain"
                    style={{ width: 200 }} />

                <View>
                    <TextInput
                        style={inputField}
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="E-mail"
                        placeholderTextColor="#FFF"
                        underlineColorAndroid="transparent"
                        value={email}
                        onChangeText={(email) => { setEmail(email); }}
                    />

                    <TextInput
                        icon="lock-outline"
                        placeholder="Senha"
                        secureTextEntry
                        style={inputField}
                        placeholderTextColor="#FFF"
                        underlineColorAndroid="transparent"
                        value={password}
                        onChangeText={(password) => { setPassword(password); }}
                    />

                </View>

                <View style={viewButton}>
                    <TouchableOpacity style={buttonLogin}
                        onPress={onHandleLogin}>
                        <Text style={textButtonLogin}>Logar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

export default SignInPage;

/*const mapStateToProps = state => ({
    loading: state.auth.loading,
    signed: state.auth.signed,
    errorSign: state.auth.errorSign
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(everyOneActions, dispatch)

export default connect(
    mapStateToProps,
    { signInRequest })
    (SignInPage);*/
