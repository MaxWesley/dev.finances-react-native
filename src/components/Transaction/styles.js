import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background-color: white;

    margin-bottom: 8px;
`
export const Column = styled.View`
    flex: 1;
    height: 53px;

    justify-content: center;
    align-items: flex-start;

    padding-left: 16px;
`
export const Text = styled.Text`
    font-size: 15px;
    color: #969cb3;
`

export const TextValue = styled(Text)`
    color: ${({ valor }) => valor > 0 ? 'rgb(18, 164, 90);' : 'rgb(233, 41, 41);'}
`