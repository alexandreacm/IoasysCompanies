import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';
import Api from '../../services/Api';

const {
    container,
    inputField,
    buttonLogin,
    textButtonLogin,
    viewButton } = styles;

function SignInPage() {
    const [email, setEmail] = useState('testeapple@ioasys.com.br');
    const [password, setPassword] = useState('12341234');
    const [loading, setLoading] = useState(false);
    const { navigate } = useNavigation();

    const dispatch = useDispatch();

    async function onHandleLogin() {
        try {

            if (email.length === 0 || password.length === 0) {
                Alert.alert('É necessário informar o seu e-mail e senha.');
                return;
            }

            setLoading(true);
            const response = await Api.post(`users/auth/sign_in`, {
                email,
                password
            })

            dispatch(signInRequest(response));
            
            let { success } = response.data;

            setLoading(false);

            if (success) {
                navigate('Home');
            } else {
                navigate('SignIn');
            }

        } catch (e) {
            setLoading(false);
            Alert.alert(e);
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
