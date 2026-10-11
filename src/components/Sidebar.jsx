import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>MultiStore</h2>

            <nav>
                <ul>
                    <li><NavLink to="/dashboard" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Dashboard</NavLink>  </li>
                    <li><NavLink to="/channels" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Booking Channels</NavLink> </li>
                    <li><NavLink to="/rooms" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Room Types</NavLink></li>
                    <li><NavLink to="/availability" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Availablity</NavLink></li>
                    <li><NavLink to="/sync" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Booking Sync</NavLink></li>
                </ul>
            </nav>
        </aside>

    )
}