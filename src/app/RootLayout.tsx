import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="bg-white dark:bg-black text-sky-100 dark:text-black ">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
