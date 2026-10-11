
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import BookingChannels from './pages/BookingChannels'
import RoomTypes from './pages/RoomTypes'
import Availability from './pages/Availability'
import BookingSync from './pages/BookingSync'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />} path='/'>
                        <Route element={<Dashboard />} path='dashboard' />
                        <Route element={<Availability />} path='availability' />
                        <Route element={<BookingChannels />} path='channels' />
                        <Route element={<RoomTypes />} path='rooms' />
                        <Route element={<BookingSync />} path='sync' />



                    </Route>
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default App
