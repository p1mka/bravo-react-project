import { createSelector } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export const selectUsersState = (state: RootState) => state.users

export const selectUsers = createSelector(
  [selectUsersState],
  usersState => usersState.users,
)
