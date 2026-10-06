import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>MultiStore</h2>

            <nav>
                <ul>
                    <li><NavLink to="/dashboard" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Dashboard</NavLink>  </li>
                    <li><NavLink to="/stores" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Stores</NavLink> </li>
                    <li><NavLink to="/products" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Products</NavLink></li>
                    <li><NavLink to="/inventory" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Inventory</NavLink></li>
                    <li><NavLink to="/sync" className={({isActive})=>isActive?"nav-link active":"nav-link"}>Sync</NavLink></li>
                </ul>
            </nav>
        </aside>

    )
}