import { Navigate } from "react-router-dom"
import { useAuthStore } from "../features/auth/authStore"

interface Props {
  children: JSX.Element
}

export default function ProtectedRoute({ children }: Props) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn())

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return children
}
