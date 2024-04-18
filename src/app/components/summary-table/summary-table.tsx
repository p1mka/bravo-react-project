import type { IElseComponent } from "../../../types"
import styled from "styled-components"

const Table = styled.table`
  border: 1px solid #000;
  border-collapse: collapse;
  width: 80%;
`

const TableHeader = styled.th`
  background-color: #dcdcdc;
  padding: 8px;
  text-align: left;
`

const TableCell = styled.td`
  border: 1px solid #000;
  padding: 8px;
`

export const SummaryTable: React.FC<IElseComponent> = ({ documents }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>Наименование документа</TableHeader>
          <TableHeader>Количество заявок</TableHeader>
        </tr>
      </thead>
      <tbody>
        {documents.map(({ id, description, owners }) => (
          <tr key={id}>
            <TableCell>{description}</TableCell>
            <TableCell>{owners.length}</TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
