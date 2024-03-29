import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../main/pages/HomePage'

const AdvertiserDashboardRouter = () => {
  const mainRoutes = [
    {
      path: '/home',
      component: <HomePage />,
      exact: true
    },
    {
      path: '/advetisers-benfits/',
      // component: <BenefitsForAdvertiserPage />,
      exact: true
    }
  ]
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      {mainRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />

      ))}
    </Routes>
  )
}

export default AdvertiserDashboardRouter