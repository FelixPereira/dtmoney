import { useEffect } from "react";
import { api } from "../../services/api";
import { Containter } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(data => console.log(data)); 
  }, []);

  return(
    <Containter>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$3000</td>
            <td>Website</td>
            <td>2/2/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$1000</td>
            <td>Casa</td>
            <td>2/2/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td>R$1000</td>
            <td>Casa</td>
            <td>2/2/2022</td>
          </tr>
        </tbody>
      </table>
    </Containter>
  )
}