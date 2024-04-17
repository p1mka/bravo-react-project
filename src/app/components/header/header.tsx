import type { ICommonProps } from "../../../types"
import styled from "styled-components"
import { useAppSelector } from "../../hooks"
import { selectUserName } from "../../redux/selectors/user-selector"
import { useAuth } from "../../hooks/use-auth"
import { useNavigate } from "react-router-dom"

const HeaderContainer: React.FC<ICommonProps> = ({ className }) => {
  const navigate = useNavigate()
  const userName = useAppSelector(selectUserName)

  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("")
  }

  return (
    <header className={className}>
      <h2>Система согласования заявок</h2>
      {userName && (
        <div className="user-bar">
          <h3>{userName}</h3>
          <button onClick={handleLogout}>Выход</button>
        </div>
      )}
    </header>
  )
}

export const Header = styled(HeaderContainer)`
  display: flex;
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
`
