import type { ICommonProps } from "../../../types"
import styled from "styled-components"
import { useAppSelector } from "../../hooks"
import { selectUserName } from "../../redux/selectors/user-selector"
import { useAuth } from "../../hooks/use-auth"
import { useMatch, useNavigate } from "react-router-dom"

const HeaderContainer: React.FC<ICommonProps> = ({ className }) => {
  const navigate = useNavigate()
  const requestMatch = useMatch("/main/request")
  const userName = useAppSelector(selectUserName)

  const { logout } = useAuth()

  const onNavButtonClick = () =>
    requestMatch ? navigate("/main/summary") : navigate("/main/request")

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <header className={className}>
      <h2>Система согласования заявок</h2>

      {userName && (
        <>
          <div className="nav-buttons">
            <button disabled={!!requestMatch} onClick={onNavButtonClick}>
              Форма для заявки
            </button>
            <button disabled={!requestMatch} onClick={onNavButtonClick}>
              Сводная таблица
            </button>
          </div>
          <div className="user-bar">
            <h3>{userName}</h3>
            <button onClick={handleLogout}>Выход</button>
          </div>
        </>
      )}
    </header>
  )
}

export const Header = styled(HeaderContainer)`
  display: flex;
  flex-wrap: wrap;
  color: #000;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5%;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);

  & .user-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & h3 {
    margin: 0;
  }
  & .nav-buttons {
    display: flex;
    gap: 0.5rem;
  }

  & .nav-buttons > button {
    height: 60px;
  }
`
