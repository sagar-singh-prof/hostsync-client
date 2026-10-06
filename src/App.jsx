
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Inventory from './pages/Inventory'
import Stores from './pages/Stores'
import Products from './pages/Products'
import Sync from './pages/Sync'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />} path='/'>
                        <Route element={<Dashboard />} path='dashboard' />
                        <Route element={<Inventory />} path='inventory' />
                        <Route element={<Stores />} path='stores' />
                        <Route element={<Products />} path='products' />
                        <Route element={<Sync />} path='sync' />



                    </Route>
                </Routes>
            </BrowserRouter>
        </>

    )
}

export default App
