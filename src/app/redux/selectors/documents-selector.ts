import { createSelector } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export const selectDocumentsState = (state: RootState) => state.documents

export const selectDocuments = createSelector(
  [selectDocumentsState],
  documentsState => documentsState.documents,
)
