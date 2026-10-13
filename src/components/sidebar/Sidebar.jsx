import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <h2>MultiStore</h2>

            <nav>
                <ul>
                    <li><NavLink to="/dashboard" className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }>Dashboard</NavLink>  </li>
                    <li><NavLink to="/channels" className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }>Booking Channels</NavLink> </li>
                    <li><NavLink to="/rooms" className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }>Room Types</NavLink></li>
                    <li><NavLink to="/availability" className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }>Availablity</NavLink></li>
                    <li><NavLink to="/sync" className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }>Booking Sync</NavLink></li>
                </ul>
            </nav>
        </aside>

    )
}