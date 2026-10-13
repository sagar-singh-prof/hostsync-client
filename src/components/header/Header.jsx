
import styles from "./Header.module.css";
export default function Header() {
    return (
        <header className={styles.header}>
            <h1>HostSync</h1>

            <div>
                <span>Welcome, to HostSync</span>
            </div>
        </header>
    );
}