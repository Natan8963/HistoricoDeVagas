import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text } from 'react-native';
import { styles } from './styles';

export default function App() {
  const vagas = [
    { cargo: 'Pedreiro', empresa: 'Empresa A', dataPostagem: '20/03/2024' },
    { cargo: 'Psiquiatra', empresa: 'Empresa X', dataPostagem: '01/04/2024' },
    { cargo: 'QA Tester', empresa: 'Empresa F', dataPostagem: '08/04/2024' },
    { cargo: 'Cozinheiro', empresa: 'Empresa D', dataPostagem: '08/04/2024' },
    { cargo: 'UX', empresa: 'Empresa S', dataPostagem: '08/04/2024' },
    { cargo: 'Front-end', empresa: 'Empresa H', dataPostagem: '08/04/2024' },
  ];

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: '#e6f1fa' }]}>
      <Text style={styles.title}>Histórico de Vagas</Text>
      {vagas.map((vaga, index) => (
        <View key={index} style={styles.vagaContainer}>
          <Text style={styles.info}>Cargo: {vaga.cargo}</Text>
          <Text style={styles.info}>Empresa: {vaga.empresa}</Text>
          <Text style={styles.info}>Postagem: {vaga.dataPostagem}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}
