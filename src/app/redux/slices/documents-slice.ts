import { createSlice } from "@reduxjs/toolkit"
import type { Document } from "../../../types"

export interface DocumentsState {
  documents: Document[]
}

const initialState: DocumentsState = {
  documents: [],
}

export const documentsSlice = createSlice({
  name: "documentsSlice",
  initialState,
  reducers: {
    setDocuments(state, action) {
      state.documents = action.payload
    },
  },
})

export const { setDocuments } = documentsSlice.actions
