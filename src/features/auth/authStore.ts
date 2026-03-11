import { create } from "zustand"

interface AuthState {
  userId: number | null
  login: (id: number) => void
  logout: () => void
  isLoggedIn: () => boolean
}

export const useAuthStore = create(
  persist(
    (set) => ({
      userId: null,
      login: (id: number) => set({ userId: id }),
      logout: () => set({ userId: null })
    }),
    { name: "linkedin-auth" }
  )
)
