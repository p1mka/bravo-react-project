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
    pushDocument(state, action) {
      state.documents.push(action.payload)
    },
    updateDocument(state, action) {
      const { documentId, newOwners } = action.payload

      const documentToUpdate = state.documents.find(
        document => document.id === documentId,
      )
      if (documentToUpdate) {
        documentToUpdate.owners = newOwners
      }
    },
    clearDocuments() {
      return initialState
    },
  },
})

export const { setDocuments, pushDocument, updateDocument, clearDocuments } =
  documentsSlice.actions
