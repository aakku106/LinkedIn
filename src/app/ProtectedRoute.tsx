import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuthStore } from "../features/auth/authStore";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn());

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  return children;
}
