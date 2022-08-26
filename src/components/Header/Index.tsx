import LogoImg from '../../assets/logo.svg';
import { Containter, Content } from './styles';

interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return(
    <Containter>
      <Content>
        <img src={LogoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Containter>
  )
}