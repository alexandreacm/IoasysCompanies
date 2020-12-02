import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import CardEnterPrises from '../../components/CardEnterPrises';
import Loading from '../../components/Loading';
import { useNavigation } from '@react-navigation/native';
import Api from '../../services/Api';


import styles from './styles';

const { container } = styles;


function HomePage(props) {

  const [enterprises, setEnterprises] = useState([]);
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation();


  useEffect(() => {
    try {

      setLoading(true);

      async function loadingEnterprises() {
        const response = await Api.get('enterprises');
        const { enterprises } = response.data;

        setEnterprises(enterprises);
        setLoading(false);
      }

      loadingEnterprises();
    } catch (e) {
      setLoading(false);
      Alert.alert(e.message);
    }

  }, []);



  function handleAbout(enterpriseId) {
    navigate('About', { enterpriseId });
  }

  if (loading) {
    return <Loading textLoading="Aguarde, carregando as empresas..." />
  } else {
    return (
      <View style={container}>
        <View style={{ backgroundColor: '#1C1C1C', padding: 15, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>Lista de Empresas</Text>
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
              onPressAbout={() => handleAbout(item.id)}
            />
          )}
        />
      </View>
    );
  }
}

export default HomePage;