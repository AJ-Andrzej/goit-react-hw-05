import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'


const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'))

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        
      </Suspense>
      

    </div>
  )
}
