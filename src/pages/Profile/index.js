import React from 'react';
import { Text, View } from 'react-native';
import { connect, bindActionCreators } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const {
    container,
    viewPhoto,
    viewProfile,
    profileFormatText,
    viewName,
    viewEmail,
    viewAdress,
    balanceFormat } = styles;

function ProfilePage(props) {
    const {
        balanceFormatted,
        investor_name,
        email,
        city,
        country } = props.profile;

    return (
        <View style={container}>
            <View style={viewPhoto}>
                <FontAwesome name="user-circle" size={120} color="#000" />
            </View>

            <View style={balanceFormat}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Saldo Balanço:{'  '}
                    {props.profile?.balanceFormatted}</Text>
            </View>

            <View style={viewProfile}>
                <View style={viewName}>
                    <FontAwesome name="address-card" size={20} color="#000" />
                    <Text style={profileFormatText}>{props.profile?.investor_name}</Text>
                </View>

                <View style={viewEmail}>
                    <FontAwesome name="envelope" size={20} color="#000" />
                    <Text style={profileFormatText}>{props.profile?.email}</Text>
                </View>

                <View style={viewAdress}>
                    <FontAwesome name="building" size={20} color="#000" />
                    <Text style={profileFormatText}>{props.profile?.city}</Text>
                </View>

                <View style={viewAdress}>
                    <FontAwesome name="globe" size={20} color="#000" />
                    <Text style={profileFormatText}>{props.profile?.country}</Text>
                </View>
            </View>
        </View>
    );
}

const mapStateToProps = state => ({
    loading: state.auth.loading,
    signed: state.auth.signed,
    profile: state.auth.profile
});

/*const mapDispatchToProps = dispatch =>
    bindActionCreators(everyOneActions, dispatch)*/

export default connect(mapStateToProps)(ProfilePage);