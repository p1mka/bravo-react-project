import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Main } from "./app/components"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
