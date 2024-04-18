import { Navigate } from "react-router-dom"
import { useAppSelector } from "../hooks"
import { selectUserName } from "../redux/selectors/user-selector"

interface Props {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
  const user = useAppSelector(selectUserName)
  if (!user) {
    return <Navigate to="/" replace />
  }

  return <div>{children}</div>
}

export default ProtectedRoute
