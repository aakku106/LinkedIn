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
    <div className="min-h-screen flex items-center justify-center bg-[#f3f2ef]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">

        <h1 className="text-3xl font-semibold mb-2">
          Sign in
        </h1>

        <p className="text-gray-600 mb-6">
          Stay updated on your professional world
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-3 focus:outline-none focus:border-black"
          />

          <button
            type="submit"
            className="mt-2 bg-[#0a66c2] text-white py-3 rounded-full font-semibold hover:bg-[#004182] transition"
          >
            Sign in
          </button>

        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Forgot password?
        </p>

      </div>
    </div>
  )
}
