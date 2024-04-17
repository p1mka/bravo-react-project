import { createSlice } from "@reduxjs/toolkit"
import type { User } from "../../../types/User"

const initialState: User = {
  id: "",
  name: "",
  documents: [],
}

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id
      state.name = action.payload.name
      state.documents = action.payload.documents
    },
    clearUser() {
      return initialState
    },
  },
})

export const { setUser, clearUser } = userSlice.actions
