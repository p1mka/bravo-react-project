import type { Document } from "./Document"

export interface ICommonProps {
  className?: string
}

export interface IElseComponent extends ICommonProps {
  documents: Document[]
}
