import { NavLinks } from "../navLinks/NavLinks";
import styles from './Navigation.module.css'
import {  CgMenuRound , CgCloseO } from 'react-icons/cg'
import {useState} from 'react'
export  const MobileNavigation = ()=>{
    const [open, setOpen] = useState(false)
    const hamburguerIcon = <CgMenuRound className={styles.hamburguer} size='40px' onClick={()=>{setOpen(!open)}}/>
    const closeIcon = <CgCloseO className={styles.hamburguer} size='40px' onClick={()=>{setOpen(!open)}}/>
    return(
        <nav className={styles.mobileNavigation}>
            {open? closeIcon :  hamburguerIcon}
           {open &&  <NavLinks/>}
        </nav>
    )
};