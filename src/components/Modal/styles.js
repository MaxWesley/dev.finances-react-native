import { StyleSheet } from 'react-native'
import styled from 'styled-components'

export const novaTransicaoStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#27264377",
        padding: 32,
    }
});

export const ModalContent = styled.View`
    width: 100%;
    margin: 20px;
    background-color: #f0f2f5;
    border-radius: 20px;
    padding: 32px;
    align-items: center;

    justify-content: flex-start;
`

export const TitleModal = styled.Text`
    font-size: 22px;
    font-weight: 600;

    padding-bottom: 8px;

    border-bottom-width: 1px;
    border-bottom-color: #d2d2d2;

    margin-bottom: 32px;
`
export const TextLabel = styled.Text`
    color: #d2d2d2;
    font-size: 14px;
`
export const TextInput = styled.TextInput`
    font-size: 16px;
    padding-bottom: 8px;
    padding-top: 4px;
    padding-left: 12px;

    background-color: #FFFFFF;
    
    margin-bottom: 16px;
`

export const CardInput = styled.View`
    align-self: stretch;
`

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40px;

    border-radius: 4px;
`

export const ButtonAdicionar = styled(Button)`
    background-color: #49aa26;
    margin-bottom: 16px;
`
export const ButtonCancelar = styled(Button)`
    border: 2px solid #aa2638;
    /* background-color: #aa2638; */
`

export const CardButtons = styled.View`
    align-self: stretch;
`

export const TextAdicionar = styled.Text`
    color: white;
    font-weight: 700;
`
export const TextCancelar = styled.Text`
    color: #aa2638;
    font-size: 15px;
    font-weight: 500;
`

export const TextObs = styled.Text`
    font-size: 12.5px;
    opacity: 0.4;
    margin-top: -12px;
    margin-bottom: 16px;
`