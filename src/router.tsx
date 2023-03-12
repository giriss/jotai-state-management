import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'preact/compat'

const MainLayout = lazy(() => import('./components/MainLayout'))
const Employees = lazy(() => import('./components/Employees'))
const Todos = lazy(() => import('./components/Todos'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/todos" replace />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
    ],
  },
])

export default router
