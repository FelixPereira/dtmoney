import { useState } from "react";
import Modal from "react-modal";
import CloseImg from '../../assets/close.svg';
import IncomeIgm from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import { 
  Container, 
  TransactionTypeContainer, 
  RadioBox 
} from "./style";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');


  return(
    <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button>
        <img 
          className="react-modal-close"
          src={CloseImg} 
          alt="Fechar modal"
          onClick={onRequestClose}
         />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input 
          placeholder="Título"
        />
        <input 
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
          >
            <img src={IncomeIgm} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
          >
            <img src={OutcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
      
    </Modal>
  )
}