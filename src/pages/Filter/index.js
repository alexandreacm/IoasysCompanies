import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity,
    Alert,
    TextInput
} from 'react-native';
import CardEnterPrises from '../../components/CardEnterPrises';
import Loading from '../../components/Loading';
import { useNavigation } from '@react-navigation/native';
import Api from '../../services/Api';
import Slider from '@react-native-community/slider';


import styles from './styles';
const {
    container,
    sliderView,
    searchButton,
    title } = styles;


export default function FilterPage() {

    const [enterprises, setEnterprises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const { navigate } = useNavigation();


    useEffect(() => {
        try {

            setLoading(true);
            let url = ``;

            async function loadingEnterprises() {
                if (sliderValue > 0) {
                    url = `enterprises?enterprise_types=${sliderValue}`;
                } else {
                    url = `enterprises`;
                }

                const response = await Api.get(url);
                const { enterprises } = response.data;

                setEnterprises(enterprises);
                setLoading(false);
            }

            loadingEnterprises();
        } catch (e) {
            setLoading(false);
            Alert.alert(e.message);
        }

    }, [sliderValue]);


    function handleAbout(enterpriseId) {
        navigate('About', { enterpriseId });
    }

    if (loading) {
        return <Loading textLoading="Aguarde, carregando as empresas..." />
    } else {
        return (
            <View style={container}>

                <View style={sliderView}>
                    <Text>Filtro seguimento: Tipo de seguimento: [{sliderValue.toFixed(0)}]</Text>
                    <Slider
                        onValueChange={(item) => setSliderValue(item)}
                        value={sliderValue}
                        style={{ width: '100%', height: 30 }}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor="#000"
                        maximumTrackTintColor="#FF0000" />

                </View>


                <FlatList
                    data={enterprises}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <CardEnterPrises
                            photo={item.photo}
                            enterpriseName={item.enterprise_name}
                            country={item.country}
                            city={item.city}
                            segment={item.enterprise_type.enterprise_type_name}
                            onPress={() => handleAbout(item.id)}
                        />
                    )}
                />
            </View>
        );
    }
}
