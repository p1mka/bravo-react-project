import styled from "styled-components"
import type { User } from "../../../types/User"
import { useAppSelector } from "../../hooks"
import { selectUsers } from "../../redux/selectors/users-selector"

const UsersListContainer = ({ className }) => {
  const users: User[] | null = useAppSelector(selectUsers)

  if (!users) {
    return
  }

  return (
    <div className={className}>
      Выберите ФИО Конструктора
      <select name="userName" onChange={handleChange}>
        {users.map(({ id, name }: User) => (
          <option key={id} id={id} value={selectedUserId}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export const UsersList = styled(UsersListContainer)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`
