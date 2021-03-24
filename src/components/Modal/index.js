import React from 'react'

import {
    Modal,
    View,
    Text,
    Pressable,
} from 'react-native'

import {
    novaTransicaoStyles,
    ModalContent,
    TitleModal,
    TextModal,
    TextLabel,
    TextInput,
    CardInput,
    CardButtons,
    ButtonAdicionar,
    ButtonCancelar,
    TextAdicionar,
    TextCancelar,
    TextObs
} from './styles'

export function ModalNovaTransicao({ modalVisible, setModalVisible }) {
    const { centeredView } = novaTransicaoStyles
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={centeredView}>
                <ModalContent>
                    <TitleModal>Nova Transação</TitleModal>
                    <CardInput>
                        <TextInput placeholder="Descrição" />

                        <TextInput placeholder="0,00" />
                        <TextObs>Use o sinal - (negativo) para despesas e , (vírgula) para casas decimais</TextObs>
                        <TextInput placeholder="Digite o valor" />
                    </CardInput>
                    <CardButtons>
                        <ButtonAdicionar>
                            <TextAdicionar>Adicionar</TextAdicionar>
                        </ButtonAdicionar>
                        <ButtonCancelar onPress={() => setModalVisible(!modalVisible)}>
                            <TextCancelar>Cancelar</TextCancelar>
                        </ButtonCancelar>
                    </CardButtons>
                </ModalContent>
            </View>
        </Modal>
    )
}