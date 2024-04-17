import { useState } from "react"
import { selectUsers } from "../app/redux/selectors/user-selector"
import { useAppSelector } from "../app/hooks"
import { useAuth } from "../app/hooks/use-auth"
import { useNavigate } from "react-router-dom"
import type { ICommonProps, User } from "../types"
import styled from "styled-components"

const LoginPageContainer: React.FC<ICommonProps> = ({ className }) => {
  const navigate = useNavigate()
  const users = useAppSelector(selectUsers)
  const { login } = useAuth()

  const [selectedUserId, setSelectedUserId] = useState("")
  const [err, setErr] = useState("")
  const [password, setPassword] = useState("")

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (err) {
      setErr("")
    }

    setSelectedUserId(e.target.value)
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (err) {
      setErr("")
    }
    setPassword(e.target.value)
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { auth, error } = await login(selectedUserId, password)
    if (auth) {
      navigate("/request")
    }
    if (error) {
      setErr(error)
    }
  }

  return (
    <div className={className}>
      <h2>Авторизация</h2>
      <form onSubmit={handleLogin}>
        <div>
          <select name="userName" onChange={handleUserChange}>
            <option value="">Выберите ФИО Конструктора</option>
            {users.map(({ id, name }: User) => (
              <option key={id} id={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        {selectedUserId && (
          <div className="transition">
            <input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={handlePasswordChange}
            />
            <button disabled={!password} type="submit">
              Войти!
            </button>
          </div>
        )}
      </form>
      {err && <h3>{err}</h3>}
    </div>
  )
}

export const LoginPage = styled(LoginPageContainer)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  & form {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
  & input,
  select {
    font-size: 18px;
    padding: 10px;
  }

  & .transition {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
