import styled from 'styled-components/native'

export const Container = styled.ScrollView`
    flex: 1;
    background: #f2f2f2;    
`

export const Header = styled.View`
    background: #2D4A22;
    padding-top: 58px;
    height: 210px;

    align-items: center;
`

export const Button = styled.TouchableOpacity`
    flex-direction: row;
`

export const Balance = styled.View`
    margin-top: -100px;
    padding-left: 16px;
    padding-right: 16px;
`
export const Card = styled.View`
    background: ${props => props.total ? "#49aa26" : "white"};
    padding: 24px 32px;
    border-radius: 4px;
    margin-bottom: 32px;
`
export const H3 = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const TitleCard = styled.Text`
    font-size: 16px;
    font-weight: normal;
    color: ${props => props.total ? "white" : "#363f5f"};
`
export const IconCard = styled.Image`
    flex-direction: row;
    justify-content: space-between;
`

export const TextDisplay = styled.Text`
    font-size: 32px;
    margin-top: 16px;
    color: ${props => props.total ? "white" : "#363f5f"};
`

export const Transactions = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: row;
    justify-content: space-between;
`
export const TextNewTransaction = styled.Text`
   color: #49aa26;
   margin-bottom: 12.8px;
   font-size: 16px;
`

export const TextExtract = styled(TextNewTransaction)`
    margin-left: 8px;
`

export const CardTransactions = styled.View`
    padding-left: 16px;
    padding-right: 16px;
`