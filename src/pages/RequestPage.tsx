import { UserForm } from "../app/components"
import styled from "styled-components"
import type { ICommonProps } from "../types/App"

const RequestPageContainer: React.FC<ICommonProps> = ({ className }) => {
  return (
    <div className={className}>
      <h1>Форма заявки на документ</h1>
      <UserForm />
    </div>
  )
}

export const RequestPage = styled(RequestPageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
