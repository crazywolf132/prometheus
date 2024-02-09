import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Hero } from './components'
import { Wrapper } from './components/Wrapper'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hero />
  },
  {
    path: '/about',
    element: <Wrapper appName="about" />
  },
  {
    path: "/getting-started",
    element: <Wrapper appName="started" />
  }
]
)

// eslint-disable-next-line react-refresh/only-export-components
export default () => (
  <>
    <RouterProvider router={router} />
  </>
)