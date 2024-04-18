import "./App.css"
import { setUsers } from "./app/redux/slices/users-slice"
import { useAppDispatch } from "./app/hooks"
import { useEffect, useLayoutEffect } from "react"
import { Header } from "./app/components"
import { setDocuments, setUser } from "./app/redux/slices"
import { CustomRouter } from "./app/routes"
import styled from "styled-components"

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #e5e5f7;
  opacity: 0.8;
  background-size: 10px 10px;
  background-image: repeating-linear-gradient(
    45deg,
    #dedede 0,
    #dedede 1px,
    #e5e5f7 0,
    #e5e5f7 50%
  );
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
    const getData = async () => {
      await Promise.all([
        fetch("http://localhost:3001/users").then(res => res.json()),
        fetch("http://localhost:3001/documents").then(res => res.json()),
      ]).then(([userData, documentData]) => {
        dispatch(setUsers(userData))
        dispatch(setDocuments(documentData))
      })
    }
    getData()
  }, [dispatch])
  return (
    <div className="App">
      <Header />
      <AppContainer>
        <CustomRouter />
      </AppContainer>
    </div>
  )
}

export default App
