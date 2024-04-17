import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { setUser } from "../../redux/slices/user-slice"
import { selectUser } from "../../redux/selectors/user-selector"

export const Main = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)
  console.log(user)
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => dispatch(setUser(data)))
  }, [dispatch])
  return <div>Main</div>
}
