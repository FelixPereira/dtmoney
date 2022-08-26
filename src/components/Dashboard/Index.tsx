import { Summary } from "../Summary/Index";
import { TransactionsTable } from "../TrasationsTable/Index";
import { Containter } from "./styles";

export function Dashboard() {
  return(
    <Containter>
       <Summary />
       <TransactionsTable />
    </Containter>
  )
}