import React from 'react'

import {
    Container,
    Column,
    Text,
    TextValue
} from './styles'

import { formatNumber } from '../../utils/formatCurrency'

export function TransactionItem({ description, valor, date }) {
    return (
        <Container>
            <Column>
                <Text>{description}</Text>
            </Column>
            <Column>
                <TextValue valor={valor}>R$ {formatNumber(valor)}</TextValue>
            </Column>
            <Column>
                <Text>{date}</Text>
            </Column>
        </Container>
    )
}

export function TransactionHeader() {
    return (
        <Container>
            <Column>
                <Text>Descrição</Text>
            </Column>
            <Column>
                <Text>Valor</Text>
            </Column>
            <Column>
                <Text>Data</Text>
            </Column>
        </Container>
    )
}