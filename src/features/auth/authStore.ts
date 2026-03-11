import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthState {
  userId: number | null
  login: (id: number) => void
  logout: () => void
  isLoggedIn: () => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      userId: null,

      login: (id: number) => set({ userId: id }),

      logout: () => set({ userId: null }),

      isLoggedIn: () => get().userId !== null
    }),
    {
      name: "linkedin-auth"
    }
  )
)
