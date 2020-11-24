import React from 'react';
import { View, Text, Modal } from 'react-native';

export default function Loading(props) {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: 'normal', fontSize: 15, marginTop: 15 }}>Aguarde, carregando os filmes...</Text>
      </View>
    </Modal>
  )

}