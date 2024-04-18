import type { Document, User } from "../../types"

export const useServerRequest = () => {
  const USERS_URL = "http://localhost:3000/users"
  const DOCUMENTS_URL = "http://localhost:3000/documents"

  const getUsersListFromDb = async () => {
    return await fetch(USERS_URL)
      .then(res => res.json())
      .then(users => users)
  }

  const getUserFromDb = async (userId: string) => {
    return await fetch(`${USERS_URL}/${userId}`)
      .then(res => res.json())
      .then(user => user)
  }

  const loginUser = async (userId: string, password: string) => {
    const user = (await getUserFromDb(userId)) as User
    if (user.password !== password) {
      throw new Error("Неверно введен пароль!")
    }
    return user
  }

  const getDocumentsFromDb = async () => {
    return await fetch(DOCUMENTS_URL)
      .then(res => res.json())
      .then((documents: Document[]) => documents)
  }

  const updateDocumentOwners = async (document: Document) => {
    await fetch(`${DOCUMENTS_URL}/${document.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        owners: document.owners,
      }),
    })
  }

  const addDocument = async (userId: string, description: string) => {
    const documentsSnapshot = await getDocumentsFromDb()

    const existingDocument = documentsSnapshot.find((document: Document) => {
      return document.description.toLowerCase() === description.toLowerCase()
    })

    if (existingDocument) {
      if (!existingDocument.owners.includes(userId)) {
        existingDocument.owners.push(userId)
        return await updateDocumentOwners(existingDocument)
      } else {
        return { error: "Вы уже подавали заявку на этот документ!" }
      }
    }

    return await fetch(`${DOCUMENTS_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        id: Date.now().toString(),
        owners: [userId],
        description,
      }),
    })
  }

  return { loginUser, getUsersListFromDb, addDocument }
}
