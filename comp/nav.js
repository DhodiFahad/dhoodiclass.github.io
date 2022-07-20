import styles from '../styles/Nav.module.css'
import { Talk } from "./talk"
import { Vibes } from "./vibes"


export const Nav = ()=>{
    return (
        <div className={styles.wrapper}>
            <Vibes/>
            <nav className={styles.nav}>
                <ul className={styles.nav_ul}>
                    <li className={styles.active}>
                        
                            Home
                       
                    </li>
                    <li>
                       
                            Projects
                        
                    </li>
                    <li>
                       
                            Blog
                       
                    </li>
                </ul>
                <Talk/>
            </nav>
        </div>
    )
} 