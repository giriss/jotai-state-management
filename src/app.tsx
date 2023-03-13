import { Provider } from 'jotai'
import { DevTools } from 'jotai-devtools'
import { Suspense } from 'preact/compat'
import { RouterProvider } from 'react-router-dom'
import router from './router'

export function App() {
  return (
    <Provider>
      <DevTools />
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  )
}
