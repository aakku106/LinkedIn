import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../features/auth/authStore"

export default function LoginWithEmail() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === "aakku@linkedin.com" && password === "1234") {
      login(1)
      navigate("/feed")
    } else alert("Invalid credentials")

  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Sign in</button>
    </form>
  )
}

