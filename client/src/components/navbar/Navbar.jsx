import { MobileNavigation } from "../navigation/MobileNavigation";
import { Navigation } from "../navigation/Navigation";
import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <h3 className={styles.logo}>Budget Manager</h3>
      <Navigation />
      <MobileNavigation />
    </div>
  );
}
