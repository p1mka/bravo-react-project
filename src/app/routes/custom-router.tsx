import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Loader } from "../components/loader/loader"
import ProtectedRoute from "./ProtectedRoute"
import ProtectedAuthRoute from "./ProtectedAuthRoute"

export const CustomRouter: React.FC = () => {
  const MainPage = lazy(() => import("../../pages/MainPage"))
  const LoginPage = lazy(() => import("../../pages/LoginPage"))
  const RequestPage = lazy(() => import("../../pages/RequestPage"))
  const SummaryPage = lazy(() => import("../../pages/SummaryPage"))
  const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"))

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedAuthRoute>
              <LoginPage />
            </ProtectedAuthRoute>
          }
        />
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        >
          <Route
            path="request"
            element={
              <ProtectedRoute>
                <RequestPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="summary"
            element={
              <ProtectedRoute>
                <SummaryPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
