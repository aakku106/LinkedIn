import { create } from "zustand"

interface AuthState {
  userId: number | null
  login: (id: number) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  userId: null,
  login: (id) => set({ userId: id }),
  logout: () => set({ userId: null })
}))
