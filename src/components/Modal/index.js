import React, { useContext, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';

import { Context as TransactionContext } from '../../context/transactions'

import { formDate, formatNumber } from '../../utils/formatCurrency'
import {
    Modal,
    View
} from 'react-native'

import {
    novaTransicaoStyles,
    ModalContent,
    TitleModal,
    TextInput,
    CardInput,
    CardButtons,
    ButtonAdicionar,
    ButtonCancelar,
    TextAdicionar,
    TextCancelar,
    TextObs,
    DatePickerContainer,
    TextDate
} from './styles'

export function ModalNovaTransicao({ modalVisible, setModalVisible }) {
    const { centeredView } = novaTransicaoStyles
    const { transactions, setTransactions } = useContext(TransactionContext)

    const [description, setDescription] = useState('')
    const [valor, setValor] = useState()

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [date, setDate] = useState()

    const handleTransactions = transaction => {
        setTransactions([...transactions, transaction])
        setModalVisible(!modalVisible)
        setDescription('')
        setValor()
        setDate()
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={centeredView}>
                <ModalContent>
                    <TitleModal>Nova Transação</TitleModal>
                    <CardInput>
                        <TextInput
                            placeholder="Descrição"
                            keyboardType="default"
                            value={description}
                            onChangeText={description => setDescription(description)}
                        />

                        <TextInput
                            placeholder="0,00"
                            keyboardType="number-pad"
                            value={(valor)}
                            onChangeText={valor => setValor(valor)}
                        />
                        <TextObs>Use o sinal - (negativo) para despesass e , (vírgula) para casas decimais</TextObs>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display="default"
                                onChange={onChange}
                            />
                        )}
                        <DatePickerContainer
                            onPress={() => showMode(true)}
                        >
                            <TextDate>{formDate(date)}</TextDate>
                        </DatePickerContainer>
                    </CardInput>
                    <CardButtons>
                        <ButtonAdicionar
                            onPress={() => handleTransactions({ description, valor, date })}>
                            <TextAdicionar>Adicionar</TextAdicionar>
                        </ButtonAdicionar>
                        <ButtonCancelar
                            onPress={() => setModalVisible(!modalVisible)}>
                            <TextCancelar>Cancelar</TextCancelar>
                        </ButtonCancelar>
                    </CardButtons>
                </ModalContent>
            </View>
        </Modal>
    )
}