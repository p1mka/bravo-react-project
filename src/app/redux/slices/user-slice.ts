import { createSlice } from "@reduxjs/toolkit"
import type { User } from "../../../types/User"

export interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
  },
})

export const { setUser } = userSlice.actions
