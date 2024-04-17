import { useState } from "react"
import type { ICommonProps } from "../../../types/App"
import styled from "styled-components"

const UserFormContainer: React.FC<ICommonProps> = ({ className }) => {
  const [documentDescription, setDocumentDescription] = useState("")

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentDescription(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const selectedUserName = e.currentTarget.userName.value
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      {/* <UsersList /> */}
      <div className="description">
        Наименование документа:
        <input
          placeholder="Введите название документа"
          value={documentDescription}
          onChange={onInputChange}
        />
      </div>
      <button type="submit">Заказать документ</button>
    </form>
  )
}

export const UserForm = styled(UserFormContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1.5rem;
  gap: 1.5rem;

  & .description {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
`
