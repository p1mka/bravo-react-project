import { UserForm } from "../app/components"
import styled from "styled-components"
import type { ICommonProps } from "../types/App"

const MainPageContainer: React.FC<ICommonProps> = ({ className }) => {
  return (
    <div className={className}>
      <h1>Форма заявки на документ</h1>
      <UserForm />
    </div>
  )
}

export const MainPage = styled(MainPageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
