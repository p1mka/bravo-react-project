import { createSlice } from "@reduxjs/toolkit"

export const documentsSlice = createSlice({
  name: "documentsSlice",
  initialState: [{ owner: "", description: "" }],
  reducers: {
    getDocumentByOwner(state, action) {
      // return state.filter(el => el.)
    },
  },
})

export const { getDocumentByOwner } = documentsSlice.actions
