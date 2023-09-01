import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import ErrorPage from './components/Shared/ErrorPage'
import ReleaseDetails from './components/NewRelease/ReleaseDetails'
import JoinNow from './components/Shared/JoinNow'
import Layout from './components/Layout'
import SignIn from './components/Shared/SignIn'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'releaseDetails/:id',
        element: <ReleaseDetails />,
        loader: ({ params }) =>
          fetch('/newrelease.json')
      }
    ],
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/joinnow',
        element: <JoinNow/>
      },
      {
        path: 'signin',
        element: <SignIn/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)

