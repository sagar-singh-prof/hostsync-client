import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout(){
    return (
        <>
        <Header />
        
                    <div className='parent'>
                        <Sidebar />
                        <main>
                            <Outlet/>
                        </main>
                    </div>
        </>
    )
}