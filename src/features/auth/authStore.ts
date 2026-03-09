import { create } from "zustand"

interface AuthState {
  userId: number | null
  login: (id: number) => void
  logout: () => void
  isLoggedIn: () => boolean
}

export const useAuthStore = create<AuthState>((set, get) => ({
  userId: null,
  login: (id) => set({ userId: id }),
  logout: () => set({ userId: null }),
  isLoggedIn: () => get().userId !== null
}))
