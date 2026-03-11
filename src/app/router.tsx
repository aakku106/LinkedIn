import { createBrowserRouter, Navigate } from "react-router-dom"

import RootLayout from "./RootLayout"
import LoginPage from "../features/auth/LoginPage"
import FeedPage from "../features/feed/FeedPage"
import ProfilePage from "../features/profile/ProfilePage"
import ProtectedRoute from "./ProtectedRoute"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/feed" replace /> }, // default landing page <Home..feed>
      { path: "feed", element: <FeedPage /> },
      { path: "network", element: <div>Network Page</div> },
      { path: "jobs", element: <div>Jobs Page</div> },
      { path: "messages", element: <div>Messages Page</div> },
      { path: "notifications", element: <div>Notifications Page</div> },
      { path: "profile", element: <ProfilePage /> }
    ]
  }
])

export default router
