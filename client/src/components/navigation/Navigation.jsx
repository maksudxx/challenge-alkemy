import { NavLinks } from "../navLinks/NavLinks"
import styles from './Navigation.module.css'
export  const Navigation =()=>{
    return(
        <nav className={styles.navigation}>
            <NavLinks/>
        </nav>
    )
}