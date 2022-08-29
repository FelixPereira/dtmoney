import { Containter } from "./tyles";
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() { 
  const {transactions} = useContext(TransactionsContext);

  const summary = transactions.reduce((counter, transaction) => {
    if(transaction.type === 'deposit') {
      counter.deposit += transaction.amount;
      counter.total += transaction.amount;
    } else {
      counter.withdraw += transaction.amount;
      counter.total += transaction.amount;
    }

    return counter;
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0
  });


  const entradas = transactions.filter(transaction => transaction.type === 'deposit')
    .reduce((counter, val) => {
    return counter + val.amount;
  }, 0);
  
  console.log(entradas)
  
  return(
    <Containter>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>
          { 
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.deposit)
          }
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="Saídas" />
        </header>
        <strong>
          -
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraw)
          }
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>
          {
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)
          }
        </strong>
      </div>
    </Containter>
  )
}                                                                             