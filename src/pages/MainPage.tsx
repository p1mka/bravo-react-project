import type { ICommonProps } from "../types"
import { Outlet } from "react-router-dom"

const MainPage: React.FC<ICommonProps> = ({ className }) => {
  return (
    <div className={className}>
      <Outlet />
    </div>
  )
}

export default MainPage
