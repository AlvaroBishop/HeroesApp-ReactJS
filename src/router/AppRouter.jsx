import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { Navbar } from '../ui';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="/*" element={  
              <PrivateRouter>
                <HeroesRoutes />
              </PrivateRouter>
            } />

            <Route path="/login" element={  
              <PublicRouter>
                <LoginPage />
              </PublicRouter>
            } />
            {/* <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={<HeroesRoutes />} /> */}
        </Routes>
    </>
  )
}
