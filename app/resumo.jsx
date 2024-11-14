import React from 'react';
import { View, Text } from 'react-native';
import Evento from './model/eventModel';
import { useLocalSearchParams } from 'expo-router';

export default function ResumoEventoScreen() {
    const { evento } = useLocalSearchParams();

    // Reconstruindo o evento com o construtor para manter as propriedades corretamente
    const eventoData = evento ? JSON.parse(evento) : null;
    const eventoObj = eventoData
        ? new Evento(
            eventoData.nome,
            eventoData.dataInicio,
            eventoData.dataTermino,
            eventoData.numeroParticipantes,
            eventoData.local,
            eventoData.custoPorParticipante
        )
        : null;

    return (
        <View style={{ padding: 20 }}>
            {eventoObj ? (
                <>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Resumo do Evento</Text>
                    <Text>Nome: {eventoObj.nome}</Text>
                    <Text>Data de Início: {eventoObj.dataInicio.toISOString().split('T')[0]}</Text>
                    <Text>Data de Término: {eventoObj.dataTermino.toISOString().split('T')[0]}</Text>
                    <Text>Duração: {eventoObj.duracaoDias} dias</Text>
                    <Text>Número de Participantes: {eventoObj.numeroParticipantes}</Text>
                    <Text>Local: {eventoObj.local}</Text>
                    <Text>Custo por Participante: R${eventoObj.custoPorParticipante.toFixed(2)}</Text>
                    <Text style={{ fontWeight: 'bold' }}>Custo Total: R${eventoObj.custoTotal.toFixed(2)}</Text>
                </>
            ) : (
                <Text>Erro ao carregar os dados do evento.</Text>
            )}
        </View>
    );
}
