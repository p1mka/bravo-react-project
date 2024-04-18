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
    try {
      await addDocument(user.id, documentDescription)
      setDocumentDescription("")
      setStatus(`Заявка на документ ${documentDescription} успешно отправлена!`)
    } catch (error: any) {
      setStatus(error.message)
    }
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      <p>
        Конструктор:<b>{user.name}</b>
      </p>
      <div className="description">
        <p>Наименование документа</p>
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
  background: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  border-radius: 0.5rem;
  padding: 1.5rem;
  gap: 1rem;
  font-size: 14px;
  box-shadow: 0px 6px 11px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 6px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 11px 0px rgba(0, 0, 0, 0.75);

  & .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
  & input {
    padding: 0.5rem;
    font-size: 16px;
  }

  & b {
    font-size: 18px;
  }
`
