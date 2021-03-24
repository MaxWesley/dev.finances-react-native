import React from 'react'

import {
    Container,
    Column,
    Text
} from './styles'

export function TransactionItem({description, valor, data}) {
    return(
        <Container>
            <Column>
                <Text>{description}</Text>
            </Column>
            <Column>
                <Text>{valor}</Text>
            </Column>
            <Column>
                <Text>{data}</Text>
            </Column>
        </Container>
    )
}

export function TransactionHeader() {
    return(
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