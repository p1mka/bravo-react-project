import { useState } from "react"
import type { ICommonProps, User } from "../../../types"
import { selectUserState } from "../../redux/selectors/user-selector"
import { useAppSelector } from "../../hooks"
import { useServerRequest } from "../../hooks/use-server-request"
import styled from "styled-components"

const UserFormContainer: React.FC<ICommonProps> = ({ className }) => {
  const user: User = useAppSelector(selectUserState)
  const { addDocument } = useServerRequest()
  const [status, setStatus] = useState("")
  const [documentDescription, setDocumentDescription] = useState("")

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (status) {
      setStatus("")
    }
    setDocumentDescription(e.target.value)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { error } = await addDocument(user.id, documentDescription)
    if (error) {
      return setStatus(error)
    }
    setDocumentDescription("")
    setStatus(`Заявка на документ ${documentDescription} успешно отправлена!`)
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      <p>
        Конструктор:<b>{user.name}</b>
      </p>
      <div className="description">
        Наименование документа:
        <input
          placeholder="Введите название документа"
          value={documentDescription}
          onChange={onInputChange}
        />
      </div>
      <button type="submit">Заказать документ</button>
      {status && <h3>{status}</h3>}
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
    /* flex-direction: column; */
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`
