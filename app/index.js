import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Evento from './model/eventModel';

export default function CadastroEventoScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataTermino, setDataTermino] = useState('');
  const [numeroParticipantes, setNumeroParticipantes] = useState('');
  const [local, setLocal] = useState('');
  const [custoPorParticipante, setCustoPorParticipante] = useState('');

  const handleCadastro = () => {
    const evento = new Evento(
      nome,
      dataInicio,
      dataTermino,
      parseInt(numeroParticipantes),
      local,
      parseFloat(custoPorParticipante)
    );

    router.push({
      pathname: 'resumo',
      params: { evento: JSON.stringify(evento) },
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nome do Evento:</Text>
      <TextInput value={nome} onChangeText={setNome} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />

      <Text>Data de Início (yyyy-mm-dd):</Text>
      <TextInput value={dataInicio} onChangeText={setDataInicio} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />

      <Text>Data de Término (yyyy-mm-dd):</Text>
      <TextInput value={dataTermino} onChangeText={setDataTermino} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />

      <Text>Número de Participantes:</Text>
      <TextInput value={numeroParticipantes} onChangeText={setNumeroParticipantes} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} keyboardType="numeric" />

      <Text>Local do Evento:</Text>
      <TextInput value={local} onChangeText={setLocal} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />

      <Text>Custo por Participante:</Text>
      <TextInput value={custoPorParticipante} onChangeText={setCustoPorParticipante} style={{ borderWidth: 1, marginBottom: 20, padding: 5 }} keyboardType="numeric" />

      <Button title="Cadastrar Evento" onPress={handleCadastro} />
    </View>
  );
}