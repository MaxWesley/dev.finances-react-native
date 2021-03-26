import React, { createContext, useState, useEffect } from 'react'

const Context = createContext({})

function TransactionProvider({ children }) {
    const [transactions, setTransactions] = useState([])
    const [incomes, setIncomes] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        handlesIncomes()
        handleExpenses()
        setTotal(expenses + incomes)
    }, [transactions, expenses, incomes])

    const handlesIncomes = () => {
        let income = 0
        transactions.forEach(transaction => {
            if (transaction.valor > 0) {
                income += Number(transaction.valor)
            }
        })

        setIncomes(income)
    }

    const handleExpenses = () => {
        let expense = 0;
        transactions.forEach(transaction => {
            if (transaction.valor < 0) {
                expense += Number(transaction.valor)
            }
        })

        setExpenses(expense)
    }

    return (
        <Context.Provider value={{
            transactions, setTransactions,
            incomes, expenses, total
        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, TransactionProvider }