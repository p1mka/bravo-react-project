import { createSelector } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export const selectUserState = (state: RootState) => state.users

export const selectUsers = createSelector(
  [selectUserState],
  userState => userState.users,
)
