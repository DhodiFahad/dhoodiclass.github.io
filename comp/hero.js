import styles from '../styles/Hero.module.css'
import { Talk } from "./talk";
export const Hero =()=>{
    return (
        <div className={styles.wrapper}>
            <h3>Dhodi Fahad Kinene</h3>
            <span>Frontend | Mobile | Software Testing | Blockchain</span>
            <h1>
                <span className={styles.software}>
                    Need a website for 
                </span>
                <br/> 
                your business?
            </h1>
            <Talk/>
        </div>
    )
}