import { createBrowserRouter } from "react-router-dom"

import RootLayout from "./RootLayout"
import LoginPage from "../features/auth/LoginPage"
import FeedPage from "../features/feed/FeedPage"
import ProfilePage from "../features/profile/ProfilePage"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <FeedPage />
      },
      {
        path: "profile",
        element: <ProfilePage />
      }
    ]
  }
])

export default router
