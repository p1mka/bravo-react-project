import styled from "styled-components"
import type { ICommonProps } from "../types"
import { Outlet } from "react-router-dom"

const MainPageContainer: React.FC<ICommonProps> = ({ className }) => {
  return (
    <div className={className}>
      <Outlet />
    </div>
  )
}

export const MainPage = styled(MainPageContainer)``
