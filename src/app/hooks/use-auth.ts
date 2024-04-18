import { useAppDispatch } from "../hooks"
import { clearUser, setUser } from "../redux/slices"
import { useServerRequest } from "./use-server-request"

export interface ILogin {
  auth: boolean
  error?: any
}

export const useAuth = () => {
  const dispatch = useAppDispatch()

  const { loginUser } = useServerRequest()

  const login = async (userId: string, password: string): Promise<ILogin> => {
    try {
      const user = await loginUser(userId, password)
      if (user) {
        dispatch(
          setUser({ id: user.id, name: user.name, documents: user.documents }),
        )
        localStorage.setItem("user", JSON.stringify(user))
        return { auth: true, error: null }
      }
    } catch (err: any) {
      return { auth: false, error: err.message }
    }
    return { auth: false }
  }
  const logout = async () => {
    dispatch(clearUser())
    localStorage.removeItem("user")
  }

  return { login, logout }
}
