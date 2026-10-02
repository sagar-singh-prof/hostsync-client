
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

    return (
        <>
            <Header />

            <div className='parent'>
                <Sidebar />
                <main>
                    <h2>Dashboard</h2>
                    <p>Welcome to Multi-Store Sync.</p>
                </main>
            </div>
        </>

    )
}

export default App
