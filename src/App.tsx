import { useState } from 'react';
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard/Index";
import { Header } from "./components/Header/Index";
import { NewTransactionModal } from './components/NewTransactionModal/Index';
import { GlobalStyles } from "./styles/global";

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
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
     <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handlecloseNewTransactionModal}
      />
     <GlobalStyles />
    </>
  )
}
