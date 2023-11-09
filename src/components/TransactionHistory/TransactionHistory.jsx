import { TableString,Tbody, Thead, Table} from "./TransactionHistory.styled"

export const TransactionHistory = props => {
  return <Table >
  <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>

    <Tbody>
      {props.transacstionList.map(transaction => (
        <TableString key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </TableString>
      )
)}
  </Tbody>
</Table>
}

