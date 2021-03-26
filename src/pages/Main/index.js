import React, { useState, useEffect, useContext } from 'react'

import { Context as TransactionContext } from '../../context/transactions'

import {
    Image,
    Modal,
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native'

import {
    Container,
    Header,
    Button,
    Balance,
    Card,
    H3,
    TitleCard,
    IconCard,
    TextDisplay,
    Transactions,
    TextNewTransaction,
    CardTransactions
} from './styles'

//  import assets
import Logo from '../../assets/logo.png'
import Income from '../../assets/income.png'
import Expense from '../../assets/expense.png'
import Total from '../../assets/total.png'

import { ModalNovaTransicao } from '../../components/Modal'
import { TransactionItem, TransactionHeader } from '../../components/Transaction'

import { formatNumber } from '../../utils/formatCurrency'

export function Main() {
    const [modalVisible, setModalVisible] = useState(false);
    const { transactions, incomes, expenses, total } = useContext(TransactionContext)

    alert('teste')
    return (
        <Container>
            <Header>
                <Image source={Logo} />
            </Header>
            <Balance>
                <Card>
                    <H3>
                        <TitleCard>Entradas</TitleCard>
                        <IconCard source={Income} />
                    </H3>
                    <TextDisplay>R$ {formatNumber(incomes)}</TextDisplay>
                </Card>
                <Card>
                    <H3>
                        <TitleCard>Saídas</TitleCard>
                        <IconCard source={Expense} />
                    </H3>
                    <TextDisplay>R$ {formatNumber(expenses)}</TextDisplay>
                </Card>
                <Card total>
                    <H3>
                        <TitleCard total>Total</TitleCard>
                        <IconCard source={Total} />
                    </H3>
                    <TextDisplay total>R$ {formatNumber(total)}</TextDisplay>
                </Card>
            </Balance>
            <Transactions>
                <Button onPress={() => setModalVisible(!modalVisible)}>
                    <TextNewTransaction>+ Nova Transação</TextNewTransaction>
                </Button>
            </Transactions>
            <CardTransactions>
                <TransactionHeader />
                {transactions.map((transaction, i) =>
                    <TransactionItem key={i} {...transaction} />
                )}
            </CardTransactions>
            <ModalNovaTransicao
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </Container>
    )
}