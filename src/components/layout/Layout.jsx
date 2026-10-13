import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Layout.module.css";
export default function Layout() {
    return (
        <>
            <Header />

            <div className={styles.parent}>
                <Sidebar />
                <main className={styles.main}>
                    <Outlet />
                </main>
            </div>
        </>
    )
}