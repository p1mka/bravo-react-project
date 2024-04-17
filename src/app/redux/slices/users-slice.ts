import { createSlice } from "@reduxjs/toolkit"
import type { User } from "../../../types/User"

export interface UserState {
  users: User[]
}

const initialState: UserState = {
  users: [],
}

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
  },
})

export const { setUsers } = usersSlice.actions
