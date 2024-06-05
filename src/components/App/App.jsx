import { Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import HomePage from '../../pages/HomePage/HomePage'


export default function App() {
  return (
    <div>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>  

    </div>
  )
}
