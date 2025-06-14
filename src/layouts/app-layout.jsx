import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function AppLayout() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-app-content">
        <Outlet />
      </main>
    </div>
  )
}
