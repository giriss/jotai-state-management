import { Provider } from 'jotai'
import { Suspense } from 'preact/compat'
import { RouterProvider } from 'react-router-dom'
import router from './router'

export function App() {
  return (
    <Provider>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  )
}
