import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function Loading({ textLoading }) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={60} color="#FFDD55" />
      <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 15, color: '#000' }}>{textLoading}</Text>
    </View>
  )

}