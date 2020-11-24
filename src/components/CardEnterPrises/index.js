import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const {
  contentViewPrincipal,
  image,
  contentViewPhoto,
  textFormat } = styles;

export default function CardEnterPrises(
  {
    photo,
    enterpriseName,
    city,
    country,
    segment,
    onPress,
  }) {
  return (
    <View style={contentViewPrincipal}>
      <View style={contentViewPhoto}>
        {photo && (
          <Image
            style={image}
            resizeMode="cover"
            source={{ uri: `http://empresas.ioasys.com.br${photo}` }} />

        )}

        <View style={{ marginLeft: 18, alignItems: 'flex-start' }}>
          <Text style={textFormat}>Nome: {enterpriseName} </Text>
          <Text style={textFormat}>segment: {segment} </Text>
          <Text style={textFormat}>Cidade/País: {city} / {country}</Text>
        </View>

        <TouchableOpacity
          style={{ backgroundColor: '#000', width: '100%', padding: 10, marginTop: 12, borderRadius: 15 }}
          onPress={onPress}>
          <Text style={{ color: '#FFF', textAlign: 'center' }}>VER MAIS</Text>
        </TouchableOpacity>
      </View>

    </View>
  )

}