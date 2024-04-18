import "./App.css"
import { Route, Routes } from "react-router-dom"
import { LoginPage, MainPage } from "./pages"
import { setUsers } from "./app/redux/slices/users-slice"
import { useAppDispatch } from "./app/hooks"
import { useEffect, useLayoutEffect } from "react"
import styled from "styled-components"
import { Header } from "./app/components"
import { setUser } from "./app/redux/slices"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    const currentUserDataJSON = localStorage.getItem("user")

    if (!currentUserDataJSON) {
      return
    }

    const currentUserData = JSON.parse(currentUserDataJSON)

    dispatch(
      setUser({
        id: currentUserData.id,
        name: currentUserData.name,
        documents: currentUserData.documents,
      }),
    )
  }, [dispatch])

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => dispatch(setUsers(data)))
      .catch(e => console.log(e))
  }, [dispatch])
  return (
    <div className="App">
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/request" element={<MainPage />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </AppContainer>
    </div>
  )
}

export default App
