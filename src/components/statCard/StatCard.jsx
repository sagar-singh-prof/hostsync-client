import styles from "./StatCard.module.css";
export default function StatCard({title,value}){
    return(
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
}