import { useState } from 'react';
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header/Index";
import { NewTransactionModal } from './components/NewTransactionModal/Index';
import { GlobalStyles } from "./styles/global";
import {TransactionsProvider} from './TransactionsContext';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handlecloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handlecloseNewTransactionModal}
        />
      <GlobalStyles />
    </TransactionsProvider>
  )
}
