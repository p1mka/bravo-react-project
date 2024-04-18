import { SummaryTable } from "../app/components"
import type { ICommonProps, Document } from "../types"
import { useAppSelector } from "../app/hooks"
import { selectDocuments } from "../app/redux/selectors/documents-selector"

import styled from "styled-components"

const SummaryPageContainer: React.FC<ICommonProps> = ({ className }) => {
  const documents: Document[] = useAppSelector(selectDocuments)

  const sortedDocuments = Array.from(documents).sort((a, b) => {
    return b.owners.length - a.owners.length
  })
  return (
    <div className={className}>
      <h1>Сводная таблица</h1>
      <SummaryTable documents={sortedDocuments} />
    </div>
  )
}

const SummaryPage = styled(SummaryPageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default SummaryPage
