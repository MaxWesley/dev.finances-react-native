import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes'
import { TransactionProvider } from './src/context/transactions'
export default function App() {
  return (
    <>
      <TransactionProvider>
        <Routes />
      </TransactionProvider>
    </>
  );
}