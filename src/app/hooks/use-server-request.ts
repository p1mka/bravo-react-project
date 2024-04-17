import type { User } from "../../types/User"

export const useServerRequest = () => {
  const URL = "http://localhost:3000/users"

  const getUsersListFromDb = async () => {
    return await fetch(URL)
      .then(res => res.json())
      .then(users => users)
  }

  const getUserFromDb = async (userId: string) => {
    return await fetch(`${URL}/${userId}`)
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

  const addDocument = async (userId: string, description: string) => {
    await fetch(`${URL}/${userId}/documents`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        description,
      }),
    })
  }

  return { loginUser, getUsersListFromDb }
}
